import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AssessmentList } from "@/components/assessments/assessment-list"
import { AssessmentHistory } from "@/components/assessments/assessment-history"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AssessmentsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container-responsive py-6 space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Autoavaliações Psicológicas</h1>
            <p className="text-slate-400">Faça avaliações para obter insights sobre sua saúde mental</p>
          </div>
          <Button className="bg-slate-700 text-slate-200 hover:bg-slate-600 hover:text-white transition-all duration-200 border border-slate-600/50 hover:border-slate-500/50">
            Fazer Nova Avaliação
          </Button>
        </div>

        <Tabs defaultValue="available" className="space-y-4">
          <TabsList className="bg-slate-800 text-slate-400">
            <TabsTrigger value="available" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Avaliações Disponíveis
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Histórico de Avaliações
            </TabsTrigger>
          </TabsList>

          <TabsContent value="available" className="space-y-4">
            <Card className="border-slate-800 bg-slate-800/50">
              <CardHeader>
                <CardTitle className="text-white">Avaliações Disponíveis</CardTitle>
                <CardDescription className="text-slate-400">
                  Selecione uma avaliação para obter insights sobre diferentes aspectos da sua saúde mental
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AssessmentList />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card className="border-slate-800 bg-slate-800/50">
              <CardHeader>
                <CardTitle className="text-white">Histórico de Avaliações</CardTitle>
                <CardDescription className="text-slate-400">
                  Revise os resultados de suas avaliações anteriores e acompanhe seu progresso
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AssessmentHistory />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
