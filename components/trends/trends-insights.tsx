"use client"

import { TrendingUp, TrendingDown, AlertCircle, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function TrendsInsights() {
  const insights = [
    {
      type: "positive",
      icon: TrendingUp,
      title: "Melhoria no Humor",
      description: "Seu humor médio melhorou 15% nas últimas 2 semanas",
      color: "text-green-500",
      bgColor: "bg-green-500/20",
    },
    {
      type: "neutral",
      icon: AlertCircle,
      title: "Padrão de Sono",
      description: "Problemas de sono são mais frequentes às terças-feiras",
      color: "text-amber-500",
      bgColor: "bg-amber-500/20",
    },
    {
      type: "negative",
      icon: TrendingDown,
      title: "Ansiedade em Alta",
      description: "Níveis de ansiedade aumentaram 8% esta semana",
      color: "text-red-500",
      bgColor: "bg-red-500/20",
    },
    {
      type: "positive",
      icon: CheckCircle,
      title: "Consistência no Autocuidado",
      description: "Você completou 85% das suas tarefas de autocuidado",
      color: "text-teal-500",
      bgColor: "bg-teal-500/20",
    },
  ]

  const weeklyStats = [
    { day: "Seg", mood: 4, symptoms: 1 },
    { day: "Ter", mood: 3, symptoms: 3 },
    { day: "Qua", mood: 4, symptoms: 2 },
    { day: "Qui", mood: 5, symptoms: 0 },
    { day: "Sex", mood: 4, symptoms: 1 },
    { day: "Sáb", mood: 5, symptoms: 0 },
    { day: "Dom", mood: 3, symptoms: 2 },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {insights.map((insight, index) => (
          <Card key={index} className="border-slate-700 bg-slate-900/30 card-hover">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${insight.bgColor}`}>
                  <insight.icon className={`h-5 w-5 ${insight.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white">{insight.title}</h3>
                  <p className="text-sm text-slate-400 mt-1">{insight.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-slate-700 bg-slate-900/30">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">Resumo Semanal</h3>
          <div className="space-y-4">
            {weeklyStats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 text-sm text-slate-400">{stat.day}</div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Humor</span>
                    <span className="text-slate-300">{stat.mood}/5</span>
                  </div>
                  <Progress value={(stat.mood / 5) * 100} className="h-2" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Sintomas</span>
                    <span className="text-slate-300">{stat.symptoms}</span>
                  </div>
                  <Progress
                    value={stat.symptoms > 0 ? (stat.symptoms / 5) * 100 : 0}
                    className="h-2"
                    indicatorClassName="bg-red-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-700 bg-slate-900/30">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-white mb-4">Recomendações</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-teal-500/10 border border-teal-500/20">
              <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-teal-400">Continue com o autocuidado</p>
                <p className="text-xs text-slate-400">Sua consistência está gerando resultados positivos</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-amber-400">Foque na qualidade do sono</p>
                <p className="text-xs text-slate-400">Considere uma rotina de sono mais consistente</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
