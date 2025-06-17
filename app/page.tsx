import { redirect } from "next/navigation"
import { LoginForm } from "@/components/auth/login-form"

export default function Home() {
  // Em um app real, verificar se o usuário está autenticado
  const isAuthenticated = false

  // Se autenticado, redirecionar para o dashboard
  if (isAuthenticated) {
    redirect("/dashboard")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 p-4">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  )
}
