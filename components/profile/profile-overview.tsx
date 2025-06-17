import { Award, Calendar, CheckCircle2, Clock } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export function ProfileOverview() {
  // Dados simulados para estatísticas do perfil
  const stats = [
    {
      title: "Registros de Humor",
      value: 42,
      icon: Calendar,
      color: "text-blue-500",
      bgColor: "bg-blue-500/20",
    },
    {
      title: "Tarefas Concluídas",
      value: 87,
      icon: CheckCircle2,
      color: "text-green-500",
      bgColor: "bg-green-500/20",
    },
    {
      title: "Sequência Atual",
      value: 7,
      icon: Clock,
      color: "text-purple-500",
      bgColor: "bg-purple-500/20",
    },
    {
      title: "Conquistas",
      value: 5,
      icon: Award,
      color: "text-amber-500",
      bgColor: "bg-amber-500/20",
    },
  ]

  // Dados simulados para conquistas
  const achievements = [
    {
      title: "Campeão da Consistência",
      description: "Registre seu humor por 7 dias seguidos",
      progress: 100,
      completed: true,
    },
    {
      title: "Superstar do Autocuidado",
      description: "Complete 50 tarefas de autocuidado",
      progress: 75,
      completed: false,
    },
    {
      title: "Mestre da Atenção Plena",
      description: "Complete 10 exercícios de respiração",
      progress: 60,
      completed: false,
    },
    {
      title: "Contribuidor da Comunidade",
      description: "Faça 5 comentários de apoio na comunidade",
      progress: 40,
      completed: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <Avatar className="h-24 w-24">
          <AvatarFallback className="bg-teal-500/20 text-2xl text-teal-500">LC</AvatarFallback>
          <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Avatar do usuário" />
        </Avatar>
        <div className="space-y-1 text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Luca Cordella</h2>
          <p className="text-sm text-slate-400">Membro desde maio de 2025</p>
          <p className="text-sm text-teal-500">Sequência de 7 dias 🔥</p>
        </div>
      </div>

      <Separator className="bg-slate-700" />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-slate-700 bg-slate-900/30">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${stat.bgColor}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <h3 className="mt-2 text-2xl font-bold text-white">{stat.value}</h3>
              <p className="text-xs text-slate-400 text-center">{stat.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h3 className="mb-4 text-lg font-medium text-white">Conquistas</h3>
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      achievement.completed ? "bg-teal-500/20" : "bg-slate-700"
                    }`}
                  >
                    {achievement.completed ? (
                      <Award className="h-4 w-4 text-teal-500" />
                    ) : (
                      <Award className="h-4 w-4 text-slate-500" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{achievement.title}</p>
                    <p className="text-xs text-slate-400">{achievement.description}</p>
                  </div>
                </div>
                <span className="text-sm text-slate-400">{achievement.progress}%</span>
              </div>
              <Progress value={achievement.progress} className="h-2 bg-slate-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
