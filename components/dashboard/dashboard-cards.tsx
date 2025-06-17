import Link from "next/link"
import { BarChart3, Brain, CheckSquare, Heart, MessageSquare, SmilePlus, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardCards() {
  const cards = [
    {
      title: "Diário do Humor",
      description: "Acompanhe suas emoções e humores diários",
      icon: SmilePlus,
      href: "/dashboard/mood",
      color: "bg-slate-800/30",
      iconColor: "text-blue-400",
      hoverColor: "hover:bg-slate-800/50",
      action: "Registrar Humor",
      stats: "5 registros esta semana",
    },
    {
      title: "Registro de Sintomas",
      description: "Registre sintomas físicos e de saúde mental",
      icon: Heart,
      href: "/dashboard/symptoms",
      color: "bg-slate-800/30",
      iconColor: "text-red-400",
      hoverColor: "hover:bg-slate-800/50",
      action: "Registrar Sintomas",
      stats: "3 sintomas registrados",
    },
    {
      title: "Tendências e Relatórios",
      description: "Visualize seu progresso e padrões",
      icon: BarChart3,
      href: "/dashboard/trends",
      color: "bg-slate-800/30",
      iconColor: "text-purple-400",
      hoverColor: "hover:bg-slate-800/50",
      action: "Ver Tendências",
      stats: "Melhoria de 15% no humor",
    },
    {
      title: "Autoavaliações",
      description: "Faça autoavaliações psicológicas",
      icon: Brain,
      href: "/dashboard/assessments",
      color: "bg-slate-800/30",
      iconColor: "text-amber-400",
      hoverColor: "hover:bg-slate-800/50",
      action: "Fazer Avaliação",
      stats: "2 avaliações concluídas",
    },
    {
      title: "Autocuidado e Hábitos",
      description: "Gerencie suas tarefas de autocuidado",
      icon: CheckSquare,
      href: "/dashboard/self-care",
      color: "bg-slate-800/30",
      iconColor: "text-green-400",
      hoverColor: "hover:bg-slate-800/50",
      action: "Ver Tarefas",
      stats: "8 de 10 tarefas concluídas",
    },
    {
      title: "Apoio e Comunidade",
      description: "Conecte-se com uma comunidade de apoio",
      icon: MessageSquare,
      href: "/dashboard/community",
      color: "bg-slate-800/30",
      iconColor: "text-teal-400",
      hoverColor: "hover:bg-slate-800/50",
      action: "Participar da Comunidade",
      stats: "12 mensagens de apoio",
    },
    {
      title: "Recompensas e Conquistas",
      description: "Acompanhe seu progresso e ganhe recompensas",
      icon: Award,
      href: "/dashboard/rewards",
      color: "bg-slate-800/30",
      iconColor: "text-indigo-400",
      hoverColor: "hover:bg-slate-800/50",
      action: "Ver Recompensas",
      stats: "350 pontos acumulados",
    },
  ]

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cards.map((card) => (
        <Card
          key={card.title}
          className={`border-slate-800 bg-slate-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/50 hover:scale-[1.02] ${card.hoverColor} group`}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color} group-hover:scale-110 transition-transform duration-300 border border-slate-700/50`}
              >
                <card.icon className={`h-6 w-6 ${card.iconColor}`} />
              </div>
            </div>
            <CardTitle className="mt-4 text-lg text-white group-hover:text-slate-100 transition-colors duration-300">
              {card.title}
            </CardTitle>
            <CardDescription className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
              {card.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-3">
            <div className="h-20 flex items-center justify-center rounded-lg bg-slate-900/50 text-slate-400 group-hover:bg-slate-900/70 group-hover:text-slate-300 transition-all duration-300 border border-slate-700/30">
              <p className="text-sm text-center font-medium">{card.stats}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              asChild
              variant="ghost"
              className={`w-full ${card.iconColor} hover:bg-slate-700/50 hover:text-white transition-all duration-300 font-medium border border-transparent hover:border-slate-600/50 rounded-lg`}
            >
              <Link href={card.href}>{card.action}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
