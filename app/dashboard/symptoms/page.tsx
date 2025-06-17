import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SymptomTracker } from "@/components/symptoms/symptom-tracker"
import { SymptomHistory } from "@/components/symptoms/symptom-history"

export default function SymptomsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container-responsive py-6 space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Registro de Sintomas</h1>
            <p className="text-slate-400">Acompanhe e monitore seus sintomas físicos e de saúde mental</p>
          </div>
          <Button className="bg-slate-700 text-slate-200 hover:bg-slate-600 hover:text-white transition-all duration-200 border border-slate-600/50 hover:border-slate-500/50">
            Registrar Novos Sintomas
          </Button>
        </div>

        <Tabs defaultValue="log" className="space-y-4">
          <TabsList className="bg-slate-800 text-slate-400">
            <TabsTrigger value="log" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Registrar Sintomas
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Histórico
            </TabsTrigger>
          </TabsList>

          <TabsContent value="log" className="space-y-4">
            <Card className="border-slate-800 bg-slate-800/50">
              <CardHeader>
                <CardTitle className="text-white">Rastreador de Sintomas</CardTitle>
                <CardDescription className="text-slate-400">Registre seus sintomas e sua gravidade</CardDescription>
              </CardHeader>
              <CardContent>
                <SymptomTracker />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card className="border-slate-800 bg-slate-800/50">
              <CardHeader>
                <CardTitle className="text-white">Histórico de Sintomas</CardTitle>
                <CardDescription className="text-slate-400">
                  Seus registros de sintomas da semana passada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SymptomHistory />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
