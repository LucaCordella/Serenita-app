import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MoodTracker } from "@/components/mood/mood-tracker"
import { MoodHistory } from "@/components/mood/mood-history"

export default function MoodPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container-responsive py-6 space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Diário do Humor</h1>
            <p className="text-slate-400">Acompanhe e monitore seus humores e emoções diários</p>
          </div>
          <Button className="bg-slate-700 text-slate-200 hover:bg-slate-600 hover:text-white transition-all duration-200 border border-slate-600/50 hover:border-slate-500/50">
            Novo Registro
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-slate-800 bg-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white">Humor de Hoje</CardTitle>
              <CardDescription className="text-slate-400">Como você está se sentindo agora?</CardDescription>
            </CardHeader>
            <CardContent>
              <MoodTracker />
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white">Registros Recentes</CardTitle>
              <CardDescription className="text-slate-400">Seu histórico de humor da semana passada</CardDescription>
            </CardHeader>
            <CardContent>
              <MoodHistory />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
