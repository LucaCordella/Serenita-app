"use client"

import { Calendar, Download, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

type AssessmentResult = {
  id: string
  title: string
  category: string
  date: string
  score: number
  maxScore: number
  interpretation: string
  color: string
}

export function AssessmentHistory() {
  // Dados simulados para histórico de avaliações
  const assessmentResults: AssessmentResult[] = [
    {
      id: "1",
      title: "Triagem de Ansiedade",
      category: "Ansiedade",
      date: "Hoje",
      score: 8,
      maxScore: 21,
      interpretation: "Sintomas leves de ansiedade",
      color: "bg-amber-500/20 text-amber-500",
    },
    {
      id: "2",
      title: "Triagem de Depressão",
      category: "Depressão",
      date: "3 dias atrás",
      score: 6,
      maxScore: 27,
      interpretation: "Sintomas mínimos de depressão",
      color: "bg-blue-500/20 text-blue-500",
    },
    {
      id: "3",
      title: "Avaliação de Estresse",
      category: "Estresse",
      date: "1 semana atrás",
      score: 18,
      maxScore: 40,
      interpretation: "Níveis moderados de estresse",
      color: "bg-red-500/20 text-red-500",
    },
    {
      id: "4",
      title: "Índice de Qualidade do Sono",
      category: "Sono",
      date: "2 semanas atrás",
      score: 12,
      maxScore: 21,
      interpretation: "Qualidade do sono ruim",
      color: "bg-purple-500/20 text-purple-500",
    },
    {
      id: "5",
      title: "Avaliação de Atenção Plena",
      category: "Mindfulness",
      date: "1 mês atrás",
      score: 32,
      maxScore: 60,
      interpretation: "Consciência moderada de atenção plena",
      color: "bg-green-500/20 text-green-500",
    },
  ]

  const getScorePercentage = (score: number, maxScore: number) => {
    return (score / maxScore) * 100
  }

  const getScoreColor = (score: number, maxScore: number) => {
    const percentage = getScorePercentage(score, maxScore)
    if (percentage < 30) return "bg-green-500"
    if (percentage < 60) return "bg-amber-500"
    return "bg-red-500"
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-slate-400" />
          <span className="text-sm text-slate-400">Últimos 30 dias</span>
        </div>
        <Button variant="outline" size="sm" className="btn-outline">
          <Download className="mr-2 h-4 w-4" />
          Exportar Resultados
        </Button>
      </div>

      <ScrollArea className="h-[350px] pr-4">
        <div className="space-y-4">
          {assessmentResults.map((result) => (
            <Card key={result.id} className="border-slate-700 bg-slate-900/30 card-hover">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className={result.color}>{result.category}</Badge>
                      <span className="text-sm font-medium text-white">{result.title}</span>
                    </div>
                    <span className="text-xs text-slate-500">{result.date}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">
                        Pontuação: {result.score}/{result.maxScore}
                      </span>
                      <span className="text-slate-400">{result.interpretation}</span>
                    </div>
                    <Progress
                      value={getScorePercentage(result.score, result.maxScore)}
                      className="h-2"
                      indicatorClassName={getScoreColor(result.score, result.maxScore)}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
