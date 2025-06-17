import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DataExport } from "@/components/export/data-export"

export default function ExportPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container-responsive py-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Exportar Seus Dados</h1>
          <p className="text-slate-400">Baixe seus dados em vários formatos para seus registros</p>
        </div>

        <Card className="border-slate-800 bg-slate-800/50">
          <CardHeader>
            <CardTitle className="text-white">Opções de Exportação de Dados</CardTitle>
            <CardDescription className="text-slate-400">
              Escolha quais dados você deseja exportar e em qual formato
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataExport />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
