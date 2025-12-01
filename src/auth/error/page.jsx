// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { AlertCircle } from "lucide-react"
// import { Link } from "react-router-dom"
// import { Button } from "@/components/ui/button"

// export default async function AuthErrorPage({
//   searchParams,
// }: {
//   searchParams: Promise<{ error?: string }>
// }) {
//   const params = await searchParams

//   return (
//     <div className="flex min-h-svh w-full items-center justify-center bg-muted/40 p-6 md:p-10">
//       <div className="w-full max-w-md">
//         <Card className="border-0 shadow-lg text-center">
//           <CardHeader className="space-y-4">
//             <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
//               <AlertCircle className="h-8 w-8 text-destructive" />
//             </div>
//             <CardTitle className="text-2xl font-bold">Authentication Error</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <p className="text-sm text-muted-foreground">
//               {params?.error ? `Error: ${params.error}` : "An unexpected error occurred during authentication."}
//             </p>
//             <Button asChild className="w-full">
//               <Link href="/auth/login">Try Again</Link>
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }


// src/pages/auth/AuthErrorPage.jsx
import { AlertCircle } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default async function AuthErrorPage({ searchParams }) {
  const params = await searchParams
  const error = params?.error || "Unknown authentication error"

  return (
    <div className="relative w-full flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-black to-orange-900" />
      <div className="absolute inset-0 bg-grid-white/[0.03]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center max-w-lg"
      >
        <motion.div
          animate={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 0.6, repeat: 2 }}
          className="w-32 h-32 mx-auto mb-8 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/50"
        >
          <AlertCircle className="h-20 w-20 text-red-500" />
        </motion.div>

        <h1 className="text-6xl md:text-7xl font-black text-red-500 mb-6">Access Denied</h1>
        <p className="text-xl text-gray-300 mb-10">Something went wrong during authentication:</p>
        <p className="text-lg text-red-400 font-mono bg-black/50 px-6 py-4 rounded-xl mb-10 border border-red-500/30">
          {error}
        </p>

        <Button asChild className="h-16 px-12 text-xl font-bold bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-xl shadow-2xl">
          <Link to="/auth/login">Try Again</Link>
        </Button>
      </motion.div>
    </div>
  )
}