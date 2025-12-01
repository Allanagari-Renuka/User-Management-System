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

    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('UserContext auth state change:', event, !!session)

      if (!session) {
        console.log('No session - clearing user state and redirecting to home')
        if (isMounted) {
          setUser(null)
          setProfile(null)
          setLoading(false)
        }
        // Redirect to home page on signout
        navigate('/')
        return
      }

      console.log('Session found - setting user:', session.user.id)
      if (isMounted) {
        setUser(session.user)
        setLoading(true) // Set loading while fetching profile
      }

      if (session.user?.id) {
        console.log('Fetching profile for user:', session.user.id)
        let { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single()

        if (profileError && profileError.code === 'PGRST116') {
          console.log('Profile not found, creating new profile...')
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
            .single()

          if (createError) {
            console.error('Error creating profile:', createError)
            if (isMounted) {
              setProfile(null)
              setLoading(false)
            }
          } else {
            console.log('Profile created:', newProfile)
            if (isMounted) {
              setProfile(newProfile)
              setLoading(false)
            }
          }
        } else if (profileError) {
          console.error('Profile fetch error:', profileError)
          if (isMounted) {
            setProfile(null)
            setLoading(false)
          }
        } else {
          console.log('Profile data loaded:', profileData)
          if (isMounted) {
            setProfile(profileData)
            setLoading(false)
          }
        }
      }
    })

    // Initial session check
    const checkSession = async () => {
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
          let { data: profileData, error: profileError } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", session.user.id)
            .single()

          if (profileError && profileError.code === 'PGRST116') {
            console.log('Initial profile not found, creating new profile...')
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
              .single()

            if (createError) {
              console.error('Error creating initial profile:', createError)
              setProfile(null)
            } else {
              console.log('Initial profile created:', newProfile)
              setProfile(newProfile)
            }
          } else if (profileError) {
            console.error('Initial profile fetch error:', profileError)
            setProfile(null)
          } else {
            console.log('Initial profile data loaded:', profileData)
            setProfile(profileData)
          }
        }
      }
      if (isMounted) setLoading(false)
    }

    checkSession()

    return () => {
      isMounted = false
      listener?.subscription?.unsubscribe()
    }
  }, [navigate])

  const value = {
    user,
    profile,
    loading,
    setProfile, // Allow updating profile
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
