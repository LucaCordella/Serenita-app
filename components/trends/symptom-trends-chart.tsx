"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function SymptomTrendsChart() {
  // Dados simulados para tendências de sintomas
  const data = [
    {
      week: "Semana 1",
      ansiedade: 5,
      insonia: 3,
      fadiga: 4,
      dor_cabeca: 2,
    },
    {
      week: "Semana 2",
      ansiedade: 4,
      insonia: 4,
      fadiga: 3,
      dor_cabeca: 1,
    },
    {
      week: "Semana 3",
      ansiedade: 3,
      insonia: 2,
      fadiga: 3,
      dor_cabeca: 3,
    },
    {
      week: "Semana 4",
      ansiedade: 2,
      insonia: 1,
      fadiga: 2,
      dor_cabeca: 1,
    },
  ]

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
          <p className="text-popover-foreground font-medium mb-2">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value} ocorrências`}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium text-card-foreground">Frequência dos Seus Sintomas</h3>
        <p className="text-sm text-muted-foreground">
          Este gráfico de barras mostra quantas vezes você relatou diferentes sintomas ao longo das últimas 4 semanas.
          Acompanhe se há melhoria ou piora nos sintomas mais comuns.
        </p>
        <div className="flex justify-center gap-4 text-xs text-muted-foreground">
          <span>• Barras menores = menos sintomas</span>
          <span>• Compare semanas para ver progresso</span>
        </div>
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ color: "hsl(var(--muted-foreground))" }}
              formatter={(value) => {
                const labels: { [key: string]: string } = {
                  ansiedade: "Ansiedade",
                  insonia: "Insônia",
                  fadiga: "Fadiga",
                  dor_cabeca: "Dor de Cabeça",
                }
                return labels[value] || value
              }}
            />
            <Bar dataKey="ansiedade" fill="#ef4444" radius={[4, 4, 0, 0]} name="ansiedade" />
            <Bar dataKey="insonia" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="insonia" />
            <Bar dataKey="fadiga" fill="#f59e0b" radius={[4, 4, 0, 0]} name="fadiga" />
            <Bar dataKey="dor_cabeca" fill="#3b82f6" radius={[4, 4, 0, 0]} name="dor_cabeca" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
