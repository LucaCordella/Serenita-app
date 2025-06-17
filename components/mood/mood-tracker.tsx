"use client"

import { useState } from "react"
import { Frown, Meh, Smile, SmilePlus, ThumbsDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"

type MoodEntry = {
  id: string
  value: number
  notes: string
  timestamp: string
  date: string
  time: string
}

export function MoodTracker() {
  const [moodValue, setMoodValue] = useState(3)
  const [notes, setNotes] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const moods = [
    { value: 1, icon: ThumbsDown, label: "Terrível", color: "text-red-500" },
    { value: 2, icon: Frown, label: "Ruim", color: "text-orange-500" },
    { value: 3, icon: Meh, label: "Ok", color: "text-yellow-500" },
    { value: 4, icon: Smile, label: "Bom", color: "text-green-500" },
    { value: 5, icon: SmilePlus, label: "Ótimo", color: "text-blue-500" },
  ]

  const currentMood = moods.find((mood) => mood.value === moodValue) || moods[2]
  const MoodIcon = currentMood.icon

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Criar novo registro de humor
    const now = new Date()
    const newEntry: MoodEntry = {
      id: Date.now().toString(),
      value: moodValue,
      notes: notes,
      timestamp: now.toISOString(),
      date: now.toLocaleDateString("pt-BR"),
      time: now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    }

    // Simular salvamento
    setTimeout(() => {
      // Em um app real, isso salvaria no banco de dados
      const existingEntries = JSON.parse(localStorage.getItem("moodEntries") || "[]")
      existingEntries.unshift(newEntry)
      localStorage.setItem("moodEntries", JSON.stringify(existingEntries))

      setIsSubmitting(false)
      setNotes("")
      setMoodValue(3)

      // Disparar evento customizado para atualizar o histórico
      window.dispatchEvent(new CustomEvent("moodEntryAdded", { detail: newEntry }))

      alert("Humor registrado com sucesso!")
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div
          className={`flex h-20 w-20 items-center justify-center rounded-full ${currentMood.color.replace("text-", "bg-")}/20`}
        >
          <MoodIcon className={`h-10 w-10 ${currentMood.color}`} />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-medium text-white">{currentMood.label}</h3>
          <p className="text-sm text-slate-400">Nível do Humor: {moodValue}/5</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm text-slate-400">
          <span>Baixo</span>
          <span>Alto</span>
        </div>
        <Slider
          value={[moodValue]}
          min={1}
          max={5}
          step={1}
          onValueChange={(value) => setMoodValue(value[0])}
          className="py-4"
        />
        <div className="flex justify-between">
          {moods.map((mood) => (
            <div
              key={mood.value}
              className={`cursor-pointer transition-colors ${moodValue === mood.value ? mood.color : "text-slate-500"}`}
              onClick={() => setMoodValue(mood.value)}
            >
              <mood.icon className="h-5 w-5" />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="notes" className="text-sm font-medium text-slate-300">
          Observações (opcional)
        </label>
        <Textarea
          id="notes"
          placeholder="Como você está se sentindo hoje? O que está em sua mente?"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="min-h-24 bg-slate-900/50 border-slate-700 text-slate-200 placeholder:text-slate-500"
        />
      </div>

      <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full btn-primary">
        {isSubmitting ? "Salvando..." : "Salvar Registro de Humor"}
      </Button>
    </div>
  )
}
