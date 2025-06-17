"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular envio de e-mail
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 2000)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 p-4">
      <div className="w-full max-w-md">
        <Card className="border-slate-700 bg-slate-900/50 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-white">Redefinir senha</CardTitle>
            <CardDescription className="text-slate-400">
              {isSubmitted
                ? "Enviamos um código para o seu e-mail"
                : "Digite seu e-mail e enviaremos um código para redefinir sua senha"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    placeholder="seu@email.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500"
                    required
                    disabled={isLoading}
                  />
                </div>
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-500 text-white" disabled={isLoading}>
                  {isLoading ? "Enviando..." : "Enviar código"}
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="rounded-lg bg-teal-500/10 border border-teal-500/20 p-4">
                  <p className="text-sm text-teal-400">
                    Código enviado para <strong>{email}</strong>
                  </p>
                  <p className="text-xs text-slate-400 mt-2">Verifique sua caixa de entrada e spam</p>
                </div>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  Enviar novamente
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button variant="ghost" asChild className="w-full text-slate-400 hover:text-white">
              <Link href="/" className="flex items-center justify-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar ao login
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
