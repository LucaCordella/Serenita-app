"use client"

import { useState } from "react"
import { Gift, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Reward = {
  id: string
  title: string
  description: string
  pointsCost: number
  category: string
  isLocked: boolean
  color: string
}

export function RewardsList() {
  const [userPoints] = useState(350)
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null)

  const rewards: Reward[] = [
    {
      id: "1",
      title: "Tema Personalizado",
      description: "Desbloqueie um tema personalizado para seu app Serenità",
      pointsCost: 200,
      category: "Personalização",
      isLocked: false,
      color: "bg-purple-500/20 text-purple-500",
    },
    {
      id: "2",
      title: "Pacote de Meditação",
      description: "Desbloqueie meditações guiadas premium",
      pointsCost: 300,
      category: "Conteúdo",
      isLocked: false,
      color: "bg-blue-500/20 text-blue-500",
    },
    {
      id: "3",
      title: "Análises Avançadas",
      description: "Desbloqueie insights detalhados e análise de tendências",
      pointsCost: 500,
      category: "Recurso",
      isLocked: true,
      color: "bg-teal-500/20 text-teal-500",
    },
    {
      id: "4",
      title: "Emblema Digital",
      description: "Mostre seu progresso com um emblema compartilhável",
      pointsCost: 150,
      category: "Social",
      isLocked: false,
      color: "bg-amber-500/20 text-amber-500",
    },
    {
      id: "5",
      title: "Fundos Premium",
      description: "Desbloqueie belos fundos relaxantes",
      pointsCost: 250,
      category: "Personalização",
      isLocked: false,
      color: "bg-green-500/20 text-green-500",
    },
    {
      id: "6",
      title: "Consulta com Especialista",
      description: "Consulta de 30 minutos com um especialista em bem-estar",
      pointsCost: 1000,
      category: "Premium",
      isLocked: true,
      color: "bg-red-500/20 text-red-500",
    },
  ]

  const handleRedeemReward = (reward: Reward) => {
    // Em um app real, isso chamaria uma API para resgatar a recompensa
    console.log(`Resgatando recompensa: ${reward.title}`)
    alert("Recompensa resgatada com sucesso!")
  }

  return (
    <div className="grid-responsive">
      {rewards.map((reward) => (
        <Card
          key={reward.id}
          className={`border-slate-700 bg-slate-900/30 card-hover ${
            reward.isLocked || reward.pointsCost > userPoints ? "opacity-70" : ""
          }`}
        >
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <Badge className={reward.color}>{reward.category}</Badge>
              <div className="flex items-center gap-1 text-xs font-medium text-amber-500">
                <Gift className="h-3 w-3" />
                <span>{reward.pointsCost} pontos</span>
              </div>
            </div>
            <CardTitle className="mt-2 text-lg text-white flex items-center gap-2">
              {reward.title}
              {reward.isLocked && <Lock className="h-4 w-4 text-slate-500" />}
            </CardTitle>
            <CardDescription className="text-slate-400">{reward.description}</CardDescription>
          </CardHeader>
          <CardFooter className="pt-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="w-full btn-primary"
                  disabled={reward.isLocked || reward.pointsCost > userPoints}
                  onClick={() => setSelectedReward(reward)}
                >
                  {reward.isLocked
                    ? "Bloqueado"
                    : reward.pointsCost > userPoints
                      ? "Pontos Insuficientes"
                      : "Resgatar Recompensa"}
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-slate-700 text-white">
                <DialogHeader>
                  <DialogTitle>Resgatar Recompensa</DialogTitle>
                  <DialogDescription className="text-slate-400">
                    Tem certeza de que deseja resgatar esta recompensa?
                  </DialogDescription>
                </DialogHeader>
                {selectedReward && (
                  <div className="space-y-4">
                    <div className="rounded-md bg-slate-800 p-4">
                      <h4 className="mb-2 font-medium text-white">{selectedReward.title}</h4>
                      <p className="text-sm text-slate-400">{selectedReward.description}</p>
                      <div className="mt-2 flex items-center gap-1 text-xs font-medium text-amber-500">
                        <Gift className="h-3 w-3" />
                        <span>{selectedReward.pointsCost} pontos</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400">
                      Você atualmente tem <span className="font-medium text-amber-500">{userPoints} pontos</span>. Após
                      resgatar, você terá{" "}
                      <span className="font-medium text-amber-500">
                        {userPoints - selectedReward.pointsCost} pontos
                      </span>{" "}
                      restantes.
                    </p>
                  </div>
                )}
                <DialogFooter>
                  <Button variant="outline" className="btn-outline">
                    Cancelar
                  </Button>
                  <Button className="btn-primary" onClick={() => selectedReward && handleRedeemReward(selectedReward)}>
                    Confirmar Resgate
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
