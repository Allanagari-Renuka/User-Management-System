export type Profile = {
  id: string
  name: string | null
  email: string | null
  phone: string | null
  profile_image: string | null
  address: string | null
  state: string | null
  city: string | null
  country: string | null
  pincode: string | null
  role: "admin" | "user"
  created_at: string
  updated_at: string
}

export type ProfileInsert = Omit<Profile, "created_at" | "updated_at">
export type ProfileUpdate = Partial<Omit<Profile, "id" | "created_at" | "updated_at">>
