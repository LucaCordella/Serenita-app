import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RewardsList } from "@/components/rewards/rewards-list"
import { AchievementsList } from "@/components/rewards/achievements-list"

export default function RewardsPage() {
  return (
    <div className="space-y-6">
      <div className="flex-responsive">
        <div>
          <h1 className="text-2xl font-bold text-white">Recompensas e Conquistas</h1>
          <p className="text-slate-400">Acompanhe seu progresso e ganhe recompensas pela sua jornada de autocuidado</p>
        </div>
        <Button className="btn-primary">Resgatar Pontos</Button>
      </div>

      <Card className="border-slate-800 bg-slate-800/50">
        <CardContent className="p-6">
          <div className="flex-responsive">
            <div className="space-y-1">
              <h2 className="text-lg font-medium text-white">Seu Progresso</h2>
              <p className="text-sm text-slate-400">Você ganhou 350 pontos este mês</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-teal-500">350</span>
                <span className="text-xs text-slate-400">Pontos</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-amber-500">7</span>
                <span className="text-xs text-slate-400">Dias Seguidos</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-purple-500">5</span>
                <span className="text-xs text-slate-400">Conquistas</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="rewards" className="space-y-4">
        <TabsList className="bg-slate-800 text-slate-400">
          <TabsTrigger value="rewards" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
            Recompensas Disponíveis
          </TabsTrigger>
          <TabsTrigger value="achievements" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
            Conquistas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="rewards" className="space-y-4">
          <Card className="border-slate-800 bg-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white">Recompensas Disponíveis</CardTitle>
              <CardDescription className="text-slate-400">
                Resgate seus pontos por essas recompensas para celebrar seu progresso
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RewardsList />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <Card className="border-slate-800 bg-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white">Suas Conquistas</CardTitle>
              <CardDescription className="text-slate-400">
                Acompanhe seu progresso e desbloqueie conquistas conforme usa o Serenità
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AchievementsList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
