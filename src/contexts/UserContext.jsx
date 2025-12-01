import React, { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useNavigate, useLocation } from 'react-router-dom'

const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    let isMounted = true
    const protectedRoutes = ['/dashboard', '/profile', '/edit-profile']

    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('UserContext auth state change:', event, !!session)

      if (event === 'SIGNED_OUT' || !session) {
        console.log('Sign out detected - clearing user state')
        if (isMounted) {
          setUser(null)
          setProfile(null)
          setLoading(false)
        }
        return
      }

      if (event === 'SIGNED_OUT') {
        console.log('Ignoring profile operations during sign out')
        return
      }

      console.log('Session found - setting user:', session.user.id)
      if (isMounted) {
        setUser(session.user)
        setLoading(true) 
      }

      if (session.user?.id) {
        try {
          console.log('Starting profile fetch...')
          console.log('User ID:', session.user.id)

          //timeout to prevent hanging
          const profilePromise = supabase
            .from("profiles")
            .select("*")
            .eq("id", session.user.id)

          console.log('Profile promise created')

          const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Profile fetch timeout')), 10000)
          )

          console.log('Timeout promise created, waiting for race...')

          const { data: profileData, error: profileError } = await Promise.race([profilePromise, timeoutPromise])

          console.log('Profile fetch result:', { data: profileData, error: profileError })
          if (profileError) {
            console.error('Profile fetch error:', profileError)
            // Check if it's a network error
            if (profileError.message?.includes('Failed to fetch') || profileError.message?.includes('ERR_INTERNET_DISCONNECTED')) {
              console.log('Network error detected, setting profile to null and continuing')
              if (isMounted) {
                setProfile(null)
                setLoading(false)
              }
              return
            }
            if (isMounted) {
              setProfile(null)
              setLoading(false)
            }
            return
          }

          if (!profileData || profileData.length === 0) {
            console.log('No profile found, creating...')

            // Retrying profile creation with exponential backoff
            const createProfileWithRetry = async (retries = 3) => {
              for (let attempt = 1; attempt <= retries; attempt++) {
                try {
                  console.log(`Profile creation attempt ${attempt}/${retries}`)

                  const { data: newProfile, error: createError } = await supabase
                    .from('profiles')
                    .insert({
                      id: session.user.id,
                      full_name: session.user.user_metadata?.name || session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User',
                      bio: "Welcome to my profile!",
                      role: "User",
                      level: "Beginner",
                      projects_count: 0,
                      streak: 0,
                    })
                    .select()

                  console.log('Profile insert result:', { data: newProfile, error: createError })

                  if (createError) {
                    console.error(`Error creating profile (attempt ${attempt}):`, createError)

                    // If it's an RLS error and we have retries left, wait and retry
                    if (createError.code === '42501' && attempt < retries) {
                      const delay = Math.pow(2, attempt) * 1000 
                      console.log(`RLS error detected, retrying in ${delay}ms...`)
                      await new Promise(resolve => setTimeout(resolve, delay))
                      continue
                    }

                    // If it's not an RLS error or we've exhausted retries, fail
                    if (isMounted) {
                      setProfile(null)
                      setLoading(false)
                    }
                    return
                  } else {
                    console.log('Profile created:', newProfile[0])
                    if (isMounted) {
                      setProfile(newProfile[0])
                      setLoading(false)
                    }
                    return
                  }
                } catch (createErr) {
                  console.error(`Network error during profile creation (attempt ${attempt}):`, createErr)

                  if (attempt < retries) {
                    const delay = Math.pow(2, attempt) * 1000
                    console.log(`Network error, retrying in ${delay}ms...`)
                    await new Promise(resolve => setTimeout(resolve, delay))
                    continue
                  }

                  if (isMounted) {
                    setProfile(null)
                    setLoading(false)
                  }
                  return
                }
              }
            }

            await createProfileWithRetry()
          } else {
            console.log('Profile data loaded:', profileData[0])
            if (isMounted) {
              setProfile(profileData[0])
              setLoading(false)
            }
          }
        } catch (fetchErr) {
          console.error('Network error during profile fetch:', fetchErr)
          if (isMounted) {
            setProfile(null)
            setLoading(false)
          }
        }
      }
    })

    // Initial session check
    const checkSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) {
          console.error('Session check error:', error)
          if (isMounted) setLoading(false)
          return
        }

        if (session && isMounted) {
          console.log('Initial session found:', session.user.id)
          setUser(session.user)

          if (session.user?.id) {
            try {
              let { data: profileData, error: profileError } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", session.user.id)

              console.log('Initial profile fetch result:', { data: profileData, error: profileError })

              if (profileError) {
                console.error('Initial profile fetch error:', profileError)
                if (profileError.message?.includes('Failed to fetch') || profileError.message?.includes('ERR_INTERNET_DISCONNECTED')) {
                  console.log('Network error detected during initial check, setting profile to null')
                  setProfile(null)
                } else {
                  setProfile(null)
                }
                setLoading(false) 
              } else if (!profileData || profileData.length === 0) {
                console.log('Initial profile not found, creating...')

                // Retrying profile creation with exponential backoff
                const createProfileWithRetry = async (retries = 3) => {
                  for (let attempt = 1; attempt <= retries; attempt++) {
                    try {
                      console.log(`Initial profile creation attempt ${attempt}/${retries}`)
                      const { data: newProfile, error: createError } = await supabase
                        .from('profiles')
                        .insert({
                          id: session.user.id,
                          full_name: session.user.user_metadata?.name || session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User',
                          bio: "Welcome to my profile!",
                          role: "User",
                          level: "Beginner",
                          projects_count: 0,
                          streak: 0,
                        })
                        .select()

                      console.log('Initial profile insert result:', { data: newProfile, error: createError })

                      if (createError) {
                        console.error(`Error creating initial profile (attempt ${attempt}):`, createError)

                        // If it's an RLS error and we have retries left, wait and retry
                        if (createError.code === '42501' && attempt < retries) {
                          const delay = Math.pow(2, attempt) * 1000 
                          console.log(`⏳ Initial RLS error detected, retrying in ${delay}ms...`)
                          await new Promise(resolve => setTimeout(resolve, delay))
                          continue
                        }

                        // If it's not an RLS error or we've exhausted retries, fail
                        setProfile(null)
                        return
                      } else {
                        console.log('Initial profile created:', newProfile[0])
                        setProfile(newProfile[0])
                        return
                      }
                    } catch (createErr) {
                      console.error(`Network error during initial profile creation (attempt ${attempt}):`, createErr)

                      if (attempt < retries) {
                        const delay = Math.pow(2, attempt) * 1000
                        console.log(`Initial network error, retrying in ${delay}ms...`)
                        await new Promise(resolve => setTimeout(resolve, delay))
                        continue
                      }

                      setProfile(null)
                      return
                    }
                  }
                }

                await createProfileWithRetry()
              } else {
                console.log('Initial profile data loaded:', profileData[0])
                setProfile(profileData[0])
              }
            } catch (fetchErr) {
              console.error('Network error during initial profile fetch:', fetchErr)
              setProfile(null)
            }
          }
        }
      } catch (sessionErr) {
        console.error('Network error during session check:', sessionErr)
      }
      if (isMounted) setLoading(false)
    }

    checkSession()

    return () => {
      isMounted = false
      listener?.subscription?.unsubscribe()
    }
  }, [navigate, location.pathname])

  const forceSignOut = async () => {
    console.log('FORCE SIGN OUT: Signing out from Supabase and clearing all user state')
    setUser(null)
    setProfile(null)
    setLoading(false)

    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error('Supabase sign out error:', error)
      } else {
        console.log('Supabase sign out successful')
      }
    } catch (err) {
      console.error('Error during Supabase sign out:', err)
    }
    navigate('/', { replace: true })
  }

  const value = {
    user,
    profile,
    loading,
    setProfile, 
    forceSignOut, 
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
