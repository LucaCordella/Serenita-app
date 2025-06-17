"use client"

import type React from "react"

import { useState } from "react"
import { Bell, Camera, Moon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export function ProfileSettings() {
  const [formData, setFormData] = useState({
    firstName: "Luca",
    lastName: "Cordella",
    email: "luca.cordella@example.com",
    bio: "Estou em uma jornada para melhorar minha saúde mental e bem-estar.",
  })

  const [preferences, setPreferences] = useState({
    darkMode: true,
    emailNotifications: true,
    pushNotifications: true,
    reminderTime: "20:00",
    dataSharing: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSwitchChange = (name: string, checked: boolean | string) => {
    setPreferences({
      ...preferences,
      [name]: checked,
    })
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simular salvamento
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Configurações salvas com sucesso!")
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <Avatar className="h-24 w-24">
            <AvatarFallback className="bg-teal-500/20 text-2xl text-teal-500">
              {formData.firstName.charAt(0)}
              {formData.lastName.charAt(0)}
            </AvatarFallback>
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Avatar do usuário" />
          </Avatar>
          <Button
            size="icon"
            variant="outline"
            className="absolute bottom-0 right-0 h-8 w-8 rounded-full border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
          >
            <Camera className="h-4 w-4" />
            <span className="sr-only">Enviar avatar</span>
          </Button>
        </div>
        <Button variant="outline" className="btn-outline">
          Alterar Avatar
        </Button>
      </div>

      <Separator className="bg-slate-700" />

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Informações Pessoais</h3>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-slate-300">
              Nome
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="input-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-slate-300">
              Sobrenome
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="input-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-300">
            E-mail
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio" className="text-slate-300">
            Biografia
          </Label>
          <Textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="min-h-24 input-primary"
          />
        </div>
      </div>

      <Separator className="bg-slate-700" />

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Preferências</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Moon className="h-5 w-5 text-slate-400" />
              <Label htmlFor="darkMode" className="text-slate-300">
                Modo Escuro
              </Label>
            </div>
            <Switch
              id="darkMode"
              checked={preferences.darkMode}
              onCheckedChange={(checked) => handleSwitchChange("darkMode", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-slate-400" />
              <Label htmlFor="emailNotifications" className="text-slate-300">
                Notificações por E-mail
              </Label>
            </div>
            <Switch
              id="emailNotifications"
              checked={preferences.emailNotifications}
              onCheckedChange={(checked) => handleSwitchChange("emailNotifications", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-slate-400" />
              <Label htmlFor="pushNotifications" className="text-slate-300">
                Notificações Push
              </Label>
            </div>
            <Switch
              id="pushNotifications"
              checked={preferences.pushNotifications}
              onCheckedChange={(checked) => handleSwitchChange("pushNotifications", checked)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reminderTime" className="text-slate-300">
              Horário do Lembrete Diário
            </Label>
            <Input
              id="reminderTime"
              type="time"
              value={preferences.reminderTime}
              onChange={(e) => handleSwitchChange("reminderTime", e.target.value)}
              className="input-primary"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="dataSharing" className="text-slate-300">
                Compartilhamento de Dados Anônimos
              </Label>
              <p className="text-xs text-slate-400">Ajude a melhorar o Serenità compartilhando dados de uso anônimos</p>
            </div>
            <Switch
              id="dataSharing"
              checked={preferences.dataSharing}
              onCheckedChange={(checked) => handleSwitchChange("dataSharing", checked)}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="outline" className="btn-outline">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} disabled={isSubmitting} className="btn-primary">
          {isSubmitting ? "Salvando..." : "Salvar Alterações"}
        </Button>
      </div>
    </div>
  )
}
