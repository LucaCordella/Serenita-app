import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileOverview } from "@/components/profile/profile-overview"
import { ProfileSettings } from "@/components/profile/profile-settings"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Perfil</h1>
        <p className="text-slate-400">Gerencie as configurações e preferências da sua conta</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-slate-800 text-slate-400">
          <TabsTrigger value="overview" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
            Visão Geral
          </TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
            Configurações
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card className="border-slate-800 bg-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white">Visão Geral do Perfil</CardTitle>
              <CardDescription className="text-slate-400">Suas informações de perfil e estatísticas</CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileOverview />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card className="border-slate-800 bg-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white">Configurações do Perfil</CardTitle>
              <CardDescription className="text-slate-400">
                Atualize suas informações de perfil e preferências
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileSettings />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
