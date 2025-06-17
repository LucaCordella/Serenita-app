"use client"

import { useState } from "react"
import { Calendar, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type SymptomRecord = {
  date: string
  time: string
  symptoms: {
    name: string
    severity: number
    category: string
  }[]
  notes?: string
}

export function SymptomHistory() {
  // Dados simulados para histórico de sintomas
  const symptomHistory: SymptomRecord[] = [
    {
      date: "Hoje",
      time: "9:15",
      symptoms: [
        { name: "Dor de cabeça", severity: 3, category: "physical" },
        { name: "Fadiga", severity: 4, category: "energy" },
      ],
      notes: "Acordei com dor de cabeça, possivelmente devido ao sono ruim",
    },
    {
      date: "Ontem",
      time: "20:30",
      symptoms: [
        { name: "Ansiedade", severity: 4, category: "mental" },
        { name: "Inquietação", severity: 3, category: "mental" },
      ],
      notes: "Me senti ansioso sobre a apresentação que vem aí",
    },
    {
      date: "Ontem",
      time: "10:00",
      symptoms: [{ name: "Insônia", severity: 5, category: "sleep" }],
      notes: "Não consegui dormir bem na noite passada",
    },
    {
      date: "17 Mai",
      time: "21:45",
      symptoms: [
        { name: "Tensão muscular", severity: 3, category: "physical" },
        { name: "Preocupação", severity: 2, category: "mental" },
      ],
    },
    {
      date: "16 Mai",
      time: "7:30",
      symptoms: [
        { name: "Baixa energia", severity: 4, category: "energy" },
        { name: "Névoa mental", severity: 3, category: "mental" },
      ],
      notes: "Me sentindo muito cansado apesar de dormir 8 horas",
    },
  ]

  const [filters, setFilters] = useState({
    physical: true,
    mental: true,
    sleep: true,
    energy: true,
    other: true,
  })

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "physical":
        return "bg-red-500/20 text-red-500"
      case "mental":
        return "bg-purple-500/20 text-purple-500"
      case "sleep":
        return "bg-blue-500/20 text-blue-500"
      case "energy":
        return "bg-amber-500/20 text-amber-500"
      default:
        return "bg-slate-500/20 text-slate-500"
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "physical":
        return "Físico"
      case "mental":
        return "Mental"
      case "sleep":
        return "Sono"
      case "energy":
        return "Energia"
      default:
        return "Outro"
    }
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

  const filteredHistory = symptomHistory.filter((record) => {
    return record.symptoms.some((symptom) => filters[symptom.category as keyof typeof filters])
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-slate-400" />
          <span className="text-sm text-slate-400">Últimos 7 dias</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="btn-outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtrar
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700">
            <DropdownMenuCheckboxItem
              checked={filters.physical}
              onCheckedChange={(checked) => setFilters({ ...filters, physical: checked })}
              className="hover:bg-slate-700 focus:bg-slate-700"
            >
              Físico
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.mental}
              onCheckedChange={(checked) => setFilters({ ...filters, mental: checked })}
              className="hover:bg-slate-700 focus:bg-slate-700"
            >
              Mental
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.sleep}
              onCheckedChange={(checked) => setFilters({ ...filters, sleep: checked })}
              className="hover:bg-slate-700 focus:bg-slate-700"
            >
              Sono
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.energy}
              onCheckedChange={(checked) => setFilters({ ...filters, energy: checked })}
              className="hover:bg-slate-700 focus:bg-slate-700"
            >
              Energia
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.other}
              onCheckedChange={(checked) => setFilters({ ...filters, other: checked })}
              className="hover:bg-slate-700 focus:bg-slate-700"
            >
              Outro
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ScrollArea className="h-[350px] pr-4">
        <div className="space-y-4">
          {filteredHistory.map((record, index) => (
            <Card key={index} className="border-slate-700 bg-slate-900/30 card-hover">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-white">{record.date}</span>
                      <span className="text-xs text-slate-500">{record.time}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {record.symptoms.map((symptom, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-md bg-slate-800 p-2">
                        <div className="flex items-center gap-2">
                          <Badge className={getCategoryColor(symptom.category)}>
                            {getCategoryLabel(symptom.category)}
                          </Badge>
                          <span className="text-sm text-slate-200">{symptom.name}</span>
                        </div>
                        <span className="text-xs text-slate-400">{getSeverityLabel(symptom.severity)}</span>
                      </div>
                    ))}
                  </div>
                  {record.notes && <p className="text-sm text-slate-400">{record.notes}</p>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
