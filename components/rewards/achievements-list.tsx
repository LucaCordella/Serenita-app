"use client"

import { Award, CheckCircle2 } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"

type Achievement = {
  id: string
  title: string
  description: string
  progress: number
  completed: boolean
  points: number
  category: string
}

export function AchievementsList() {
  // Dados simulados para conquistas
  const achievements: Achievement[] = [
    {
      id: "1",
      title: "Campeão da Consistência",
      description: "Registre seu humor por 7 dias seguidos",
      progress: 100,
      completed: true,
      points: 50,
      category: "Acompanhamento",
    },
    {
      id: "2",
      title: "Superstar do Autocuidado",
      description: "Complete 50 tarefas de autocuidado",
      progress: 75,
      completed: false,
      points: 100,
      category: "Autocuidado",
    },
    {
      id: "3",
      title: "Mestre da Atenção Plena",
      description: "Complete 10 exercícios de respiração",
      progress: 60,
      completed: false,
      points: 75,
      category: "Mindfulness",
    },
    {
      id: "4",
      title: "Contribuidor da Comunidade",
      description: "Faça 5 comentários de apoio na comunidade",
      progress: 40,
      completed: false,
      points: 50,
      category: "Comunidade",
    },
    {
      id: "5",
      title: "Explorador de Insights",
      description: "Complete 3 autoavaliações psicológicas diferentes",
      progress: 100,
      completed: true,
      points: 75,
      category: "Avaliações",
    },
    {
      id: "6",
      title: "Rastreador de Sintomas",
      description: "Registre sintomas por 10 dias",
      progress: 100,
      completed: true,
      points: 50,
      category: "Acompanhamento",
    },
    {
      id: "7",
      title: "Analista de Dados",
      description: "Visualize suas tendências e relatórios 5 vezes",
      progress: 100,
      completed: true,
      points: 25,
      category: "Insights",
    },
    {
      id: "8",
      title: "Perfeccionista do Perfil",
      description: "Complete seu perfil com todas as informações",
      progress: 100,
      completed: true,
      points: 25,
      category: "Perfil",
    },
    {
      id: "9",
      title: "Melhorador do Sono",
      description: "Registre melhoria na qualidade do sono por 5 dias consecutivos",
      progress: 20,
      completed: false,
      points: 75,
      category: "Sono",
    },
    {
      id: "10",
      title: "Gerenciador de Ansiedade",
      description: "Relate diminuição dos níveis de ansiedade por 7 dias",
      progress: 30,
      completed: false,
      points: 100,
      category: "Saúde Mental",
    },
  ]

  // Ordenar conquistas: concluídas primeiro, depois por progresso
  const sortedAchievements = [...achievements].sort((a, b) => {
    if (a.completed && !b.completed) return -1
    if (!a.completed && b.completed) return 1
    return b.progress - a.progress
  })

  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-4">
        {sortedAchievements.map((achievement) => (
          <Card key={achievement.id} className="border-slate-700 bg-slate-900/30 card-hover">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div
                  className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                    achievement.completed ? "bg-teal-500/20" : "bg-slate-700"
                  }`}
                >
                  {achievement.completed ? (
                    <Award className="h-5 w-5 text-teal-500" />
                  ) : (
                    <Award className="h-5 w-5 text-slate-500" />
                  )}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-white">{achievement.title}</h3>
                        {achievement.completed && <CheckCircle2 className="h-4 w-4 text-teal-500" />}
                      </div>
                      <p className="text-sm text-slate-400">{achievement.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-medium text-amber-500">+{achievement.points} pontos</span>
                      <p className="text-xs text-slate-500">{achievement.category}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Progresso</span>
                      <span className="text-slate-400">{achievement.progress}%</span>
                    </div>
                    <Progress
                      value={achievement.progress}
                      className="h-2 bg-slate-700"
                      indicatorClassName={achievement.completed ? "bg-teal-500" : "bg-slate-500"}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  )
}
