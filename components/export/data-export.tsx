"use client"

import { useState } from "react"
import { Calendar, Download, FileJson, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DataExport() {
  const [dataTypes, setDataTypes] = useState({
    moods: true,
    symptoms: true,
    selfCare: true,
    assessments: true,
    community: false,
  })

  const [dateRange, setDateRange] = useState("30days")
  const [format, setFormat] = useState("csv")

  const handleDataTypeChange = (type: keyof typeof dataTypes) => {
    setDataTypes({
      ...dataTypes,
      [type]: !dataTypes[type],
    })
  }

  const handleExport = () => {
    // Em um app real, isso chamaria uma API para gerar e baixar a exportação
    console.log("Exportando dados:", { dataTypes, dateRange, format })

    // Simular download
    setTimeout(() => {
      alert("Seus dados foram exportados com sucesso!")
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <h3 className="mb-3 text-lg font-medium text-white">Selecionar Dados para Exportar</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="moods"
                checked={dataTypes.moods}
                onCheckedChange={() => handleDataTypeChange("moods")}
                className="border-slate-700 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
              />
              <Label htmlFor="moods" className="text-slate-300">
                Registros de Humor
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="symptoms"
                checked={dataTypes.symptoms}
                onCheckedChange={() => handleDataTypeChange("symptoms")}
                className="border-slate-700 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
              />
              <Label htmlFor="symptoms" className="text-slate-300">
                Registros de Sintomas
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="selfCare"
                checked={dataTypes.selfCare}
                onCheckedChange={() => handleDataTypeChange("selfCare")}
                className="border-slate-700 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
              />
              <Label htmlFor="selfCare" className="text-slate-300">
                Tarefas de Autocuidado
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="assessments"
                checked={dataTypes.assessments}
                onCheckedChange={() => handleDataTypeChange("assessments")}
                className="border-slate-700 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
              />
              <Label htmlFor="assessments" className="text-slate-300">
                Resultados de Avaliações
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="community"
                checked={dataTypes.community}
                onCheckedChange={() => handleDataTypeChange("community")}
                className="border-slate-700 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
              />
              <Label htmlFor="community" className="text-slate-300">
                Atividade da Comunidade
              </Label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-medium text-white">Período de Tempo</h3>
          <RadioGroup
            defaultValue="30days"
            value={dateRange}
            onValueChange={setDateRange}
            className="grid gap-4 sm:grid-cols-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="7days" id="7days" className="border-slate-700 text-teal-600" />
              <Label htmlFor="7days" className="text-slate-300">
                Últimos 7 dias
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="30days" id="30days" className="border-slate-700 text-teal-600" />
              <Label htmlFor="30days" className="text-slate-300">
                Últimos 30 dias
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="90days" id="90days" className="border-slate-700 text-teal-600" />
              <Label htmlFor="90days" className="text-slate-300">
                Últimos 90 dias
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="6months" id="6months" className="border-slate-700 text-teal-600" />
              <Label htmlFor="6months" className="text-slate-300">
                Últimos 6 meses
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1year" id="1year" className="border-slate-700 text-teal-600" />
              <Label htmlFor="1year" className="text-slate-300">
                Último ano
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" className="border-slate-700 text-teal-600" />
              <Label htmlFor="all" className="text-slate-300">
                Todo o período
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-medium text-white">Formato de Exportação</h3>
          <Select value={format} onValueChange={setFormat}>
            <SelectTrigger className="w-full sm:w-[200px] input-primary">
              <SelectValue placeholder="Selecionar formato" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              <SelectItem value="csv" className="hover:bg-slate-700 focus:bg-slate-700">
                CSV
              </SelectItem>
              <SelectItem value="json" className="hover:bg-slate-700 focus:bg-slate-700">
                JSON
              </SelectItem>
              <SelectItem value="pdf" className="hover:bg-slate-700 focus:bg-slate-700">
                PDF
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-slate-700 bg-slate-900/30 card-hover">
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <FileText className="mb-2 h-8 w-8 text-teal-500" />
            <h3 className="text-sm font-medium text-white">Formato CSV</h3>
            <p className="text-xs text-slate-400">Melhor para programas de planilha como Excel</p>
          </CardContent>
        </Card>
        <Card className="border-slate-700 bg-slate-900/30 card-hover">
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <FileJson className="mb-2 h-8 w-8 text-blue-500" />
            <h3 className="text-sm font-medium text-white">Formato JSON</h3>
            <p className="text-xs text-slate-400">Melhor para desenvolvedores e análise de dados</p>
          </CardContent>
        </Card>
        <Card className="border-slate-700 bg-slate-900/30 card-hover">
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <Calendar className="mb-2 h-8 w-8 text-red-500" />
            <h3 className="text-sm font-medium text-white">Formato PDF</h3>
            <p className="text-xs text-slate-400">Melhor para impressão e compartilhamento</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleExport} className="btn-primary">
          <Download className="mr-2 h-4 w-4" />
          Exportar Dados
        </Button>
      </div>

      <div className="rounded-md bg-slate-800 p-4 text-sm text-slate-300">
        <h4 className="mb-2 font-medium text-white">Nota sobre Privacidade</h4>
        <p>
          Seus dados pertencem a você. Os dados exportados são criptografados e não contêm informações pessoais
          identificáveis. Para mais informações, consulte nossa{" "}
          <a href="#" className="text-teal-500 hover:text-teal-400 transition-colors">
            Política de Privacidade
          </a>
          .
        </p>
      </div>
    </div>
  )
}
