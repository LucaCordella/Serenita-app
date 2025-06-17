"use client"

import { useState, useEffect } from "react"
import { Frown, Meh, Smile, SmilePlus, ThumbsDown } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

type MoodEntry = {
  id: string
  value: number
  notes: string
  timestamp: string
  date: string
  time: string
}

export function MoodHistory() {
  const [moodHistory, setMoodHistory] = useState<MoodEntry[]>([])

  // Dados simulados iniciais
  const initialHistory: MoodEntry[] = [
    {
      id: "1",
      value: 4,
      notes: "Me sentindo energético após uma boa noite de sono",
      timestamp: new Date().toISOString(),
      date: "Hoje",
      time: "9:15",
    },
    {
      id: "2",
      value: 3,
      notes: "Dia neutro, nada especial",
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      date: "Ontem",
      time: "20:30",
    },
    {
      id: "3",
      value: 2,
      notes: "Estressado com prazo de trabalho",
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      date: "Ontem",
      time: "10:00",
    },
    {
      id: "4",
      value: 5,
      notes: "Ótimo dia! Terminei um grande projeto",
      timestamp: new Date(Date.now() - 172800000).toISOString(),
      date: "17 Mai",
      time: "21:45",
    },
    {
      id: "5",
      value: 3,
      notes: "Me sentindo ok, um pouco cansado",
      timestamp: new Date(Date.now() - 259200000).toISOString(),
      date: "16 Mai",
      time: "7:30",
    },
    {
      id: "6",
      value: 4,
      notes: "Tive uma boa sessão de exercícios",
      timestamp: new Date(Date.now() - 345600000).toISOString(),
      date: "15 Mai",
      time: "18:15",
    },
    {
      id: "7",
      value: 1,
      notes: "Dor de cabeça o dia todo",
      timestamp: new Date(Date.now() - 432000000).toISOString(),
      date: "14 Mai",
      time: "21:00",
    },
  ]

  useEffect(() => {
    // Carregar histórico do localStorage ou usar dados iniciais
    const savedEntries = localStorage.getItem("moodEntries")
    if (savedEntries) {
      const parsed = JSON.parse(savedEntries)
      setMoodHistory([...parsed, ...initialHistory])
    } else {
      setMoodHistory(initialHistory)
    }

    // Escutar por novos registros
    const handleNewEntry = (event: CustomEvent) => {
      setMoodHistory((prev) => [event.detail, ...prev])
    }

    window.addEventListener("moodEntryAdded", handleNewEntry as EventListener)

    return () => {
      window.removeEventListener("moodEntryAdded", handleNewEntry as EventListener)
    }
  }, [])

  const getMoodIcon = (value: number) => {
    switch (value) {
      case 1:
        return { icon: ThumbsDown, color: "text-red-500", bg: "bg-red-500/20" }
      case 2:
        return { icon: Frown, color: "text-orange-500", bg: "bg-orange-500/20" }
      case 3:
        return { icon: Meh, color: "text-yellow-500", bg: "bg-yellow-500/20" }
      case 4:
        return { icon: Smile, color: "text-green-500", bg: "bg-green-500/20" }
      case 5:
        return { icon: SmilePlus, color: "text-blue-500", bg: "bg-blue-500/20" }
      default:
        return { icon: Meh, color: "text-yellow-500", bg: "bg-yellow-500/20" }
    }
  }

  return (
    <ScrollArea className="h-[350px] pr-4">
      <div className="space-y-4">
        {moodHistory.map((entry, index) => {
          const { icon: MoodIcon, color, bg } = getMoodIcon(entry.value)

          return (
            <Card key={entry.id} className="border-slate-700 bg-slate-900/30 card-hover">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${bg}`}>
                    <MoodIcon className={`h-5 w-5 ${color}`} />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-white">{entry.date}</p>
                      <p className="text-xs text-slate-500">{entry.time}</p>
                    </div>
                    <p className="text-sm text-slate-300">{entry.notes}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </ScrollArea>
  )
}
