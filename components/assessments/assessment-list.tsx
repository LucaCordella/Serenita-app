"use client"

import type React from "react"

import { useState } from "react"
import { Brain, Clock, FileText, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

type Assessment = {
  id: string
  title: string
  description: string
  category: string
  questions: number
  timeEstimate: string
  icon: React.ElementType
  color: string
}

export function AssessmentList() {
  const [selectedAssessment, setSelectedAssessment] = useState<Assessment | null>(null)

  const assessments: Assessment[] = [
    {
      id: "1",
      title: "Triagem de Ansiedade",
      description: "Avalie seus níveis atuais de ansiedade e identifique possíveis preocupações",
      category: "Ansiedade",
      questions: 7,
      timeEstimate: "3-5 min",
      icon: Brain,
      color: "bg-amber-500/20 text-amber-500",
    },
    {
      id: "2",
      title: "Triagem de Depressão",
      description: "Avalie sintomas de depressão e transtornos de humor",
      category: "Depressão",
      questions: 9,
      timeEstimate: "4-6 min",
      icon: Brain,
      color: "bg-blue-500/20 text-blue-500",
    },
    {
      id: "3",
      title: "Avaliação de Estresse",
      description: "Meça seus níveis atuais de estresse e identifique fatores estressantes",
      category: "Estresse",
      questions: 10,
      timeEstimate: "5-7 min",
      icon: Brain,
      color: "bg-red-500/20 text-red-500",
    },
    {
      id: "4",
      title: "Índice de Qualidade do Sono",
      description: "Avalie seus padrões e qualidade do sono",
      category: "Sono",
      questions: 8,
      timeEstimate: "3-5 min",
      icon: Brain,
      color: "bg-purple-500/20 text-purple-500",
    },
    {
      id: "5",
      title: "Avaliação de Atenção Plena",
      description: "Avalie sua consciência presente e práticas de mindfulness",
      category: "Mindfulness",
      questions: 12,
      timeEstimate: "6-8 min",
      icon: Brain,
      color: "bg-green-500/20 text-green-500",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {assessments.map((assessment) => (
          <Card key={assessment.id} className="border-border bg-card card-hover flex flex-col h-full">
            <CardHeader className="pb-3 flex-shrink-0">
              <div className="flex items-center justify-between mb-3">
                <Badge className={assessment.color}>{assessment.category}</Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{assessment.timeEstimate}</span>
                </div>
              </div>
              <CardTitle className="text-lg text-card-foreground leading-tight">{assessment.title}</CardTitle>
              <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                {assessment.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3 flex-shrink-0">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <FileText className="h-3 w-3" />
                <span>{assessment.questions} perguntas</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between gap-2 mt-auto pt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-card-foreground flex-1">
                    <Info className="mr-1 h-4 w-4" />
                    Detalhes
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-popover border-border text-popover-foreground">
                  <DialogHeader>
                    <DialogTitle>{assessment.title}</DialogTitle>
                    <DialogDescription className="text-muted-foreground">{assessment.description}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="rounded-md bg-muted p-4">
                      <h4 className="mb-2 font-medium text-card-foreground">Sobre esta avaliação</h4>
                      <p className="text-sm text-muted-foreground">
                        Esta avaliação foi desenvolvida para ajudá-lo a entender seus níveis atuais de{" "}
                        {assessment.category.toLowerCase()}. Ela consiste em {assessment.questions} perguntas e leva
                        aproximadamente {assessment.timeEstimate} para ser concluída.
                      </p>
                    </div>
                    <div className="rounded-md bg-muted p-4">
                      <h4 className="mb-2 font-medium text-card-foreground">Como funciona</h4>
                      <p className="text-sm text-muted-foreground">
                        Você receberá uma série de perguntas sobre seus pensamentos, sentimentos e comportamentos.
                        Responda cada pergunta honestamente para obter os resultados mais precisos. Suas respostas são
                        confidenciais e serão usadas apenas para fornecer insights personalizados.
                      </p>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button className="btn-primary">Iniciar Avaliação</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button className="btn-primary flex-1">Fazer Avaliação</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
