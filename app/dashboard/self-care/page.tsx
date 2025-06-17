import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SelfCareTasks } from "@/components/self-care/self-care-tasks"
import { BreathingExercise } from "@/components/self-care/breathing-exercise"

export default function SelfCarePage() {
  return (
    <div className="space-y-6">
      <div className="flex-responsive">
        <div>
          <h1 className="text-2xl font-bold text-white">Autocuidado e Hábitos</h1>
          <p className="text-slate-400">Gerencie suas tarefas de autocuidado e exercícios guiados</p>
        </div>
        <Button className="btn-primary">Adicionar Nova Tarefa</Button>
      </div>

      <Tabs defaultValue="tasks" className="space-y-4">
        <TabsList className="bg-slate-800 text-slate-400">
          <TabsTrigger value="tasks" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
            Tarefas Diárias
          </TabsTrigger>
          <TabsTrigger value="exercises" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
            Exercícios Guiados
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tasks" className="space-y-4">
          <Card className="border-slate-800 bg-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white">Tarefas de Autocuidado</CardTitle>
              <CardDescription className="text-slate-400">
                Acompanhe suas atividades diárias de autocuidado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SelfCareTasks />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exercises" className="space-y-4">
          <Card className="border-slate-800 bg-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white">Exercício de Respiração</CardTitle>
              <CardDescription className="text-slate-400">Reserve um momento para respirar e relaxar</CardDescription>
            </CardHeader>
            <CardContent>
              <BreathingExercise />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
