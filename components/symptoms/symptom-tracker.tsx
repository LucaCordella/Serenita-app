"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

type SymptomCategory = "physical" | "mental" | "sleep" | "energy" | "other"

type Symptom = {
  id: string
  name: string
  severity: number
  category: SymptomCategory
}

type SymptomRecord = {
  id: string
  date: string
  time: string
  symptoms: {
    name: string
    severity: number
    category: string
  }[]
  notes?: string
}

export function SymptomTracker() {
  const router = useRouter()
  const [symptoms, setSymptoms] = useState<Symptom[]>([])
  const [newSymptom, setNewSymptom] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<SymptomCategory>("physical")
  const [severity, setSeverity] = useState(3)
  const [notes, setNotes] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories: { value: SymptomCategory; label: string; color: string }[] = [
    { value: "physical", label: "Físico", color: "bg-red-500/20 text-red-500" },
    { value: "mental", label: "Mental", color: "bg-purple-500/20 text-purple-500" },
    { value: "sleep", label: "Sono", color: "bg-blue-500/20 text-blue-500" },
    { value: "energy", label: "Energia", color: "bg-amber-500/20 text-amber-500" },
    { value: "other", label: "Outro", color: "bg-slate-500/20 text-slate-500" },
  ]

  const addSymptom = () => {
    if (newSymptom.trim()) {
      const symptom: Symptom = {
        id: Date.now().toString(),
        name: newSymptom,
        severity,
        category: selectedCategory,
      }
      setSymptoms([...symptoms, symptom])
      setNewSymptom("")
      setSeverity(3)
    }
  }

  const removeSymptom = (id: string) => {
    setSymptoms(symptoms.filter((symptom) => symptom.id !== id))
  }

  const getCategoryColor = (category: SymptomCategory) => {
    return categories.find((c) => c.value === category)?.color || "bg-slate-500/20 text-slate-500"
  }

  const getCategoryLabel = (category: SymptomCategory) => {
    return categories.find((c) => c.value === category)?.label || "Outro"
  }

  const getSeverityLabel = (value: number) => {
    switch (value) {
      case 1:
        return "Muito Leve"
      case 2:
        return "Leve"
      case 3:
        return "Moderado"
      case 4:
        return "Grave"
      case 5:
        return "Muito Grave"
      default:
        return "Moderado"
    }
  }

  const handleSubmit = async () => {
    if (symptoms.length === 0) {
      alert("Adicione pelo menos um sintoma")
      return
    }

    setIsSubmitting(true)

    // Criar novo registro de sintomas
    const now = new Date()
    const newRecord: SymptomRecord = {
      id: Date.now().toString(),
      date: now.toLocaleDateString("pt-BR"),
      time: now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      symptoms: symptoms.map((symptom) => ({
        name: symptom.name,
        severity: symptom.severity,
        category: getCategoryLabel(symptom.category),
      })),
      notes: notes || undefined,
    }

    // Simular salvamento
    setTimeout(() => {
      // Em um app real, isso salvaria no banco de dados
      const existingRecords = JSON.parse(localStorage.getItem("symptomRecords") || "[]")
      existingRecords.unshift(newRecord)
      localStorage.setItem("symptomRecords", JSON.stringify(existingRecords))

      setIsSubmitting(false)
      setSymptoms([])
      setNotes("")

      alert("Sintomas registrados com sucesso!")

      // Navegar para a aba de histórico
      router.push("/dashboard/symptoms?tab=history")
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="symptom" className="text-slate-300">
            Nome do Sintoma
          </Label>
          <div className="flex gap-2">
            <Input
              id="symptom"
              placeholder="Digite o sintoma (ex: Dor de cabeça, Ansiedade)"
              value={newSymptom}
              onChange={(e) => setNewSymptom(e.target.value)}
              className="input-primary"
            />
            <Button onClick={addSymptom} className="btn-primary">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Adicionar sintoma</span>
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-slate-300">Categoria</Label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category.value}
                className={`cursor-pointer transition-colors ${
                  selectedCategory === category.value
                    ? category.color
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                }`}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="severity" className="text-slate-300">
              Gravidade
            </Label>
            <span className="text-sm text-slate-400">{getSeverityLabel(severity)}</span>
          </div>
          <Slider
            id="severity"
            value={[severity]}
            min={1}
            max={5}
            step={1}
            onValueChange={(value) => setSeverity(value[0])}
            className="py-4"
          />
          <div className="flex justify-between text-xs text-slate-500">
            <span>Muito Leve</span>
            <span>Moderado</span>
            <span>Muito Grave</span>
          </div>
        </div>
      </div>

      {symptoms.length > 0 && (
        <div className="space-y-2">
          <Label className="text-slate-300">Sintomas Adicionados</Label>
          <ScrollArea className="h-40 rounded-md border border-slate-700 bg-slate-900/30 p-2">
            <div className="space-y-2">
              {symptoms.map((symptom) => (
                <div key={symptom.id} className="flex items-center justify-between rounded-md bg-slate-800 p-2">
                  <div className="flex items-center gap-2">
                    <Badge className={getCategoryColor(symptom.category)}>{getCategoryLabel(symptom.category)}</Badge>
                    <span className="text-sm text-slate-200">{symptom.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Gravidade: {getSeverityLabel(symptom.severity)}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-slate-400 hover:text-red-400"
                      onClick={() => removeSymptom(symptom.id)}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remover</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="notes" className="text-slate-300">
          Observações (opcional)
        </Label>
        <Textarea
          id="notes"
          placeholder="Adicione detalhes adicionais sobre seus sintomas..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="min-h-24 input-primary"
        />
      </div>

      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          className="btn-outline"
          onClick={() => {
            setSymptoms([])
            setNotes("")
            setNewSymptom("")
            setSeverity(3)
          }}
        >
          Cancelar
        </Button>
        <Button onClick={handleSubmit} disabled={isSubmitting} className="btn-primary">
          {isSubmitting ? "Salvando..." : "Salvar Sintomas"}
        </Button>
      </div>
    </div>
  )
}
