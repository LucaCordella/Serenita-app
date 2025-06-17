"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function DashboardHeader() {
  const [userName] = useState("Luca")
  const [moodStreak] = useState(5)
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      })
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Bom dia"
    if (hour < 18) return "Boa tarde"
    return "Boa noite"
  }

  return (
    <Card className="border-slate-800 bg-slate-800/50 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-white">
              {getGreeting()}, {userName}!
            </h1>
            <p className="text-slate-400">Você registrou seu humor {moodStreak} dias esta semana. Continue assim!</p>
            {currentTime && <p className="text-sm text-slate-500">{currentTime}</p>}
          </div>
          <Button className="bg-slate-700 text-slate-200 hover:bg-slate-600 hover:text-white transition-all duration-200 border border-slate-600/50 hover:border-slate-500/50 shadow-sm hover:shadow-md">
            Registrar Humor de Hoje
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
