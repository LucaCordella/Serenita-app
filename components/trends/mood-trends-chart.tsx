"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function MoodTrendsChart() {
  // Dados simulados para tendências de humor
  const data = [
    { date: "1 Mai", mood: 3, label: "Ok" },
    { date: "2 Mai", mood: 4, label: "Bom" },
    { date: "3 Mai", mood: 4, label: "Bom" },
    { date: "4 Mai", mood: 3, label: "Ok" },
    { date: "5 Mai", mood: 2, label: "Ruim" },
    { date: "6 Mai", mood: 2, label: "Ruim" },
    { date: "7 Mai", mood: 3, label: "Ok" },
    { date: "8 Mai", mood: 4, label: "Bom" },
    { date: "9 Mai", mood: 5, label: "Ótimo" },
    { date: "10 Mai", mood: 4, label: "Bom" },
    { date: "11 Mai", mood: 3, label: "Ok" },
    { date: "12 Mai", mood: 3, label: "Ok" },
    { date: "13 Mai", mood: 2, label: "Ruim" },
    { date: "14 Mai", mood: 1, label: "Terrível" },
    { date: "15 Mai", mood: 3, label: "Ok" },
    { date: "16 Mai", mood: 3, label: "Ok" },
    { date: "17 Mai", mood: 5, label: "Ótimo" },
    { date: "18 Mai", mood: 4, label: "Bom" },
    { date: "19 Mai", mood: 4, label: "Bom" },
  ]

  const getMoodLabel = (value: number) => {
    switch (value) {
      case 1:
        return "Terrível"
      case 2:
        return "Ruim"
      case 3:
        return "Ok"
      case 4:
        return "Bom"
      case 5:
        return "Ótimo"
      default:
        return "Desconhecido"
    }
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
          <p className="text-popover-foreground font-medium">{`Data: ${label}`}</p>
          <p className="text-primary">{`Humor: ${getMoodLabel(payload[0].value)} (${payload[0].value}/5)`}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium text-card-foreground">Evolução do Seu Humor</h3>
        <p className="text-sm text-muted-foreground">
          Este gráfico mostra como seu humor variou ao longo dos últimos 19 dias. Você pode identificar padrões e
          tendências para entender melhor seus estados emocionais.
        </p>
        <div className="flex justify-center gap-4 text-xs text-muted-foreground">
          <span>• Linha ascendente = melhoria no humor</span>
          <span>• Linha descendente = declínio no humor</span>
        </div>
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="date"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickFormatter={(value) => value.split(" ")[0]}
            />
            <YAxis
              domain={[1, 5]}
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickFormatter={(value) => getMoodLabel(value)}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="mood"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
