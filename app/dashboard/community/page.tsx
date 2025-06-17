import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CommunityFeed } from "@/components/community/community-feed"
import { CommunityGuidelines } from "@/components/community/community-guidelines"

export default function CommunityPage() {
  return (
    <div className="space-y-6">
      <div className="flex-responsive">
        <div>
          <h1 className="text-2xl font-bold text-white">Apoio e Comunidade</h1>
          <p className="text-slate-400">Conecte-se com outras pessoas e compartilhe sua jornada</p>
        </div>
        <Button className="btn-primary">Criar Publicação</Button>
      </div>

      <Tabs defaultValue="feed" className="space-y-4">
        <TabsList className="bg-slate-800 text-slate-400">
          <TabsTrigger value="feed" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
            Feed da Comunidade
          </TabsTrigger>
          <TabsTrigger value="guidelines" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
            Diretrizes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="space-y-4">
          <Card className="border-slate-800 bg-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white">Feed da Comunidade</CardTitle>
              <CardDescription className="text-slate-400">Publicações da comunidade Serenità</CardDescription>
            </CardHeader>
            <CardContent>
              <CommunityFeed />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines" className="space-y-4">
          <Card className="border-slate-800 bg-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white">Diretrizes da Comunidade</CardTitle>
              <CardDescription className="text-slate-400">Nossos valores e regras da comunidade</CardDescription>
            </CardHeader>
            <CardContent>
              <CommunityGuidelines />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
