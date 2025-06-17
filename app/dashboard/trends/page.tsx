import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MoodTrendsChart } from "@/components/trends/mood-trends-chart"
import { SymptomTrendsChart } from "@/components/trends/symptom-trends-chart"
import { TrendsInsights } from "@/components/trends/trends-insights"

export default function TrendsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container-responsive py-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Tendências e Relatórios</h1>
          <p className="text-slate-400">Visualize seu progresso e identifique padrões</p>
        </div>

        <Tabs defaultValue="mood" className="space-y-4">
          <TabsList className="bg-slate-800 text-slate-400">
            <TabsTrigger value="mood" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Tendências do Humor
            </TabsTrigger>
            <TabsTrigger value="symptoms" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Tendências dos Sintomas
            </TabsTrigger>
            <TabsTrigger value="insights" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mood" className="space-y-4">
            <Card className="border-slate-800 bg-slate-800/50">
              <CardHeader>
                <CardTitle className="text-white">Humor ao Longo do Tempo</CardTitle>
                <CardDescription className="text-slate-400">Seus padrões de humor dos últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <MoodTrendsChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="symptoms" className="space-y-4">
            <Card className="border-slate-800 bg-slate-800/50">
              <CardHeader>
                <CardTitle className="text-white">Frequência de Sintomas</CardTitle>
                <CardDescription className="text-slate-400">
                  Frequência de sintomas relatados ao longo do tempo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SymptomTrendsChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-4">
            <Card className="border-slate-800 bg-slate-800/50">
              <CardHeader>
                <CardTitle className="text-white">Insights e Padrões</CardTitle>
                <CardDescription className="text-slate-400">Análise personalizada dos seus dados</CardDescription>
              </CardHeader>
              <CardContent>
                <TrendsInsights />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
