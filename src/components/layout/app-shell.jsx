import { createClient } from "@/lib/supabase/server";
import { Navbar } from "./navbar";

export async function AppShell({ children }) {
  const supabase = await createClient();

  // Get current authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let profile = null;

  // Fetch profile only if user is logged in
  if (user) {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    profile = data;
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      <Navbar user={user} profile={profile} />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        {children}
      </main>
    </div>
  );
}