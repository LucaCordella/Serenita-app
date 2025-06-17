"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LogOut, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function SettingsPage() {
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    // Simular logout
    setTimeout(() => {
      setIsLoggingOut(false)
      router.push("/")
    }, 1500)
  }

  const handleEditProfile = () => {
    router.push("/dashboard/profile")
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container-responsive py-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Configurações</h1>
          <p className="text-slate-400">Gerencie suas preferências e configurações da conta</p>
        </div>

        <div className="space-y-6">
          {/* Configurações da Conta */}
          <Card className="border-slate-800 bg-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <User className="h-5 w-5" />
                Conta
              </CardTitle>
              <CardDescription className="text-slate-400">Gerencie suas informações de conta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-slate-300 font-medium">Editar Perfil</h3>
                  <p className="text-sm text-slate-400">Atualize suas informações pessoais e preferências</p>
                </div>
                <Button onClick={handleEditProfile} className="btn-primary">
                  Editar Perfil
                </Button>
              </div>

              <Separator className="bg-slate-700" />

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-slate-300 font-medium">Sair da Conta</h3>
                  <p className="text-sm text-slate-400">Desconecte-se do aplicativo</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sair
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-slate-900 border-slate-700 text-white">
                    <DialogHeader>
                      <DialogTitle>Confirmar Saída</DialogTitle>
                      <DialogDescription className="text-slate-400">
                        Tem certeza de que deseja sair da sua conta? Você precisará fazer login novamente para acessar o
                        aplicativo.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline" className="btn-outline">
                        Cancelar
                      </Button>
                      <Button
                        onClick={handleLogout}
                        disabled={isLoggingOut}
                        className="bg-red-600 hover:bg-red-500 text-white"
                      >
                        {isLoggingOut ? "Saindo..." : "Confirmar Saída"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          {/* Informações do Aplicativo */}
          <Card className="border-slate-800 bg-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white">Sobre o Serenità</CardTitle>
              <CardDescription className="text-slate-400">
                O Serenità nasceu para suprir a carência de ferramentas acessíveis e centradas no usuário que auxiliem
                jovens e universitários a monitorarem seu humor, registrar sintomas e adotar hábitos de autocuidado. A
                solução proposta unifica diário de humor, testes psicológicos simples e comunidade anônima em uma única
                plataforma.{" "}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Versão</span>
                <span className="text-slate-300">1.0.0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Desenvolvido por</span>
                <span className="text-slate-300">Luca Cordella</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Última atualização</span>
                <span className="text-slate-300">Janeiro 2025</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
