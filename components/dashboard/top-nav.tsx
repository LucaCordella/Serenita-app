"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, User, AlertTriangle, X, Phone, Shield, Flame, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks/use-mobile"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function TopNav() {
  const isMobile = useIsMobile()
  const [showEmergencyPanel, setShowEmergencyPanel] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  // Dados simulados para notificações
  const notifications = [
    {
      id: "1",
      title: "Lembrete de Humor",
      message: "Não se esqueça de registrar seu humor hoje!",
      time: "5 min atrás",
      type: "reminder",
    },
    {
      id: "2",
      title: "Nova Conquista",
      message: "Você desbloqueou 'Campeão da Consistência'!",
      time: "2 horas atrás",
      type: "achievement",
    },
    {
      id: "3",
      title: "Apoio da Comunidade",
      message: "Alguém curtiu sua publicação na comunidade",
      time: "1 dia atrás",
      type: "social",
    },
  ]

  // Contatos de emergência
  const emergencyContacts = [
    {
      name: "Contato de Confiança",
      number: "+55 11 99999-9999",
      icon: User,
      color: "bg-blue-500/20 text-blue-500",
    },
    {
      name: "SAMU",
      number: "192",
      icon: Heart,
      color: "bg-red-500/20 text-red-500",
    },
    {
      name: "Bombeiros",
      number: "193",
      icon: Flame,
      color: "bg-orange-500/20 text-orange-500",
    },
    {
      name: "Polícia Militar",
      number: "190",
      icon: Shield,
      color: "bg-green-500/20 text-green-500",
    },
    {
      name: "CVV - Centro de Valorização da Vida",
      number: "188",
      icon: Phone,
      color: "bg-purple-500/20 text-purple-500",
    },
  ]

  const handleEmergencyCall = (number: string, name: string) => {
    if (confirm(`Ligar para ${name} (${number})?`)) {
      window.open(`tel:${number}`, "_self")
    }
  }

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 items-center border-b border-slate-800 bg-slate-900/95 px-4 backdrop-blur">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            {isMobile && <SidebarTrigger />}
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/20">
                <span className="text-lg font-bold text-teal-500">S</span>
              </div>
              <span className="text-lg font-semibold text-white">Serenità</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowEmergencyPanel(true)}
              className="hidden border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 sm:flex"
            >
              <AlertTriangle className="mr-2 h-4 w-4" />
              Emergência
            </Button>
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative text-slate-400 hover:text-white transition-colors"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-teal-500 text-[10px] text-white">
                  3
                </span>
                <span className="sr-only">Notificações</span>
              </Button>
              {showNotifications && (
                <div className="absolute right-0 top-12 w-80 z-50">
                  <Card className="border-slate-700 bg-slate-900 shadow-lg">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm text-white">Notificações</CardTitle>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setShowNotifications(false)}
                          className="h-6 w-6 text-slate-400 hover:text-white"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {notifications.map((notification, index) => (
                        <div key={notification.id}>
                          <div className="p-2 rounded-md hover:bg-slate-800/50 transition-colors">
                            <h4 className="text-sm font-medium text-white">{notification.title}</h4>
                            <p className="text-xs text-slate-400 mt-1">{notification.message}</p>
                            <span className="text-xs text-slate-500">{notification.time}</span>
                          </div>
                          {index < notifications.length - 1 && <Separator className="bg-slate-700" />}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-slate-400 hover:text-white transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span className="sr-only">Menu do usuário</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-slate-800 text-slate-200 border-slate-700">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-slate-700" />
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700">
                  <Link href="/dashboard/profile" className="flex w-full">
                    Perfil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700">
                  <Link href="/dashboard/settings" className="flex w-full">
                    Configurações
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700">
                  <Link href="/dashboard/export" className="flex w-full">
                    Exportar Dados
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-slate-700" />
                <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700">
                  <Link href="/" className="flex w-full">
                    Sair
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Emergency Panel Overlay */}
      {showEmergencyPanel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <Card className="w-full max-w-md mx-4 border-slate-700 bg-slate-900">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Contatos de Emergência
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowEmergencyPanel(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-400 mb-4">
                Em caso de emergência, toque em um dos botões abaixo para ligar diretamente.
              </p>
              {emergencyContacts.map((contact, index) => (
                <Button
                  key={index}
                  onClick={() => handleEmergencyCall(contact.number, contact.name)}
                  className="w-full justify-start gap-3 h-auto p-4 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 text-left"
                  variant="outline"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${contact.color}`}>
                    <contact.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white">{contact.name}</div>
                    <div className="text-sm text-slate-400">{contact.number}</div>
                  </div>
                  <Phone className="h-4 w-4 text-slate-400" />
                </Button>
              ))}
              <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                <p className="text-xs text-red-400">
                  <strong>Importante:</strong> Se você está em crise imediata, ligue para o SAMU (192) ou vá ao
                  pronto-socorro mais próximo.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Click outside to close notifications */}
      {showNotifications && <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />}
    </>
  )
}
