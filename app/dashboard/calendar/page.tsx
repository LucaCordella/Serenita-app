"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus, Clock, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Event = {
  id: string
  title: string
  date: string
  time: string
  type: "appointment" | "reminder" | "task"
  description?: string
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  // Eventos simulados
  const events: Event[] = [
    {
      id: "1",
      title: "Consulta com Psicólogo",
      date: "2025-01-20",
      time: "14:00",
      type: "appointment",
      description: "Sessão semanal de terapia",
    },
    {
      id: "2",
      title: "Lembrete: Exercício de Respiração",
      date: "2025-01-18",
      time: "09:00",
      type: "reminder",
      description: "Praticar técnica 4-7-8",
    },
    {
      id: "3",
      title: "Registrar Humor",
      date: "2025-01-18",
      time: "20:00",
      type: "task",
      description: "Registro diário do humor",
    },
    {
      id: "4",
      title: "Consulta com Psicólogo",
      date: "2025-01-27",
      time: "14:00",
      type: "appointment",
      description: "Sessão semanal de terapia",
    },
    {
      id: "5",
      title: "Avaliação de Ansiedade",
      date: "2025-01-22",
      time: "10:00",
      type: "task",
      description: "Completar autoavaliação mensal",
    },
  ]

  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]

  const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Dias do mês anterior
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i)
      days.push({ date: prevDate, isCurrentMonth: false })
    }

    // Dias do mês atual
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      days.push({ date, isCurrentMonth: true })
    }

    // Dias do próximo mês para completar a grade
    const remainingDays = 42 - days.length
    for (let day = 1; day <= remainingDays; day++) {
      const nextDate = new Date(year, month + 1, day)
      days.push({ date: nextDate, isCurrentMonth: false })
    }

    return days
  }

  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split("T")[0]
    return events.filter((event) => event.date === dateString)
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const getEventTypeColor = (type: Event["type"]) => {
    switch (type) {
      case "appointment":
        return "bg-blue-500/20 text-blue-500"
      case "reminder":
        return "bg-amber-500/20 text-amber-500"
      case "task":
        return "bg-green-500/20 text-green-500"
      default:
        return "bg-slate-500/20 text-slate-500"
    }
  }

  const getEventTypeIcon = (type: Event["type"]) => {
    switch (type) {
      case "appointment":
        return <User className="h-3 w-3" />
      case "reminder":
      case "task":
        return <Clock className="h-3 w-3" />
      default:
        return <Clock className="h-3 w-3" />
    }
  }

  const days = getDaysInMonth(currentDate)
  const today = new Date()
  const todayString = today.toDateString()

  return (
    <div className="space-y-6">
      <div className="flex-responsive">
        <div>
          <h1 className="text-2xl font-bold text-white">Calendário</h1>
          <p className="text-slate-400">Gerencie seus compromissos e lembretes</p>
        </div>
        <Button className="btn-primary">
          <Plus className="mr-2 h-4 w-4" />
          Novo Evento
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Calendário */}
        <div className="lg:col-span-2">
          <Card className="border-slate-800 bg-slate-800/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigateMonth("prev")}
                    className="h-8 w-8 btn-outline"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigateMonth("next")}
                    className="h-8 w-8 btn-outline"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {dayNames.map((day) => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-slate-400">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => {
                  const dayEvents = getEventsForDate(day.date)
                  const isToday = day.date.toDateString() === todayString
                  const isSelected = selectedDate?.toDateString() === day.date.toDateString()

                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(day.date)}
                      className={`
                        relative p-2 min-h-[60px] text-sm border border-slate-700 rounded-md transition-colors
                        ${day.isCurrentMonth ? "text-slate-200 hover:bg-slate-700" : "text-slate-500"}
                        ${isToday ? "bg-teal-500/20 border-teal-500/50" : ""}
                        ${isSelected ? "bg-slate-700 border-slate-600" : ""}
                      `}
                    >
                      <div className="font-medium">{day.date.getDate()}</div>
                      {dayEvents.length > 0 && (
                        <div className="absolute bottom-1 left-1 right-1">
                          <div className="flex gap-1 justify-center">
                            {dayEvents.slice(0, 3).map((event, eventIndex) => (
                              <div key={eventIndex} className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                            ))}
                            {dayEvents.length > 3 && <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />}
                          </div>
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Eventos */}
        <div>
          <Card className="border-slate-800 bg-slate-800/50">
            <CardHeader>
              <CardTitle className="text-white">
                {selectedDate
                  ? `Eventos - ${selectedDate.getDate()}/${selectedDate.getMonth() + 1}`
                  : "Próximos Eventos"}
              </CardTitle>
              <CardDescription className="text-slate-400">
                {selectedDate ? "Eventos para o dia selecionado" : "Seus próximos compromissos"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {(selectedDate ? getEventsForDate(selectedDate) : events.slice(0, 5)).map((event) => (
                  <Dialog key={event.id}>
                    <DialogTrigger asChild>
                      <div className="p-3 rounded-lg bg-slate-900/30 border border-slate-700 cursor-pointer hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-start gap-3">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${getEventTypeColor(event.type)}`}
                          >
                            {getEventTypeIcon(event.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium text-white truncate">{event.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-slate-400">{event.time}</span>
                              <Badge className={getEventTypeColor(event.type)}>
                                {event.type === "appointment"
                                  ? "Consulta"
                                  : event.type === "reminder"
                                    ? "Lembrete"
                                    : "Tarefa"}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-900 border-slate-700 text-white">
                      <DialogHeader>
                        <DialogTitle>{event.title}</DialogTitle>
                        <DialogDescription className="text-slate-400">
                          {new Date(event.date).toLocaleDateString("pt-BR")} às {event.time}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Badge className={getEventTypeColor(event.type)}>
                            {event.type === "appointment"
                              ? "Consulta"
                              : event.type === "reminder"
                                ? "Lembrete"
                                : "Tarefa"}
                          </Badge>
                        </div>
                        {event.description && (
                          <div>
                            <h4 className="text-sm font-medium text-white mb-2">Descrição</h4>
                            <p className="text-sm text-slate-400">{event.description}</p>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
                {(selectedDate ? getEventsForDate(selectedDate) : events).length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-slate-400">Nenhum evento encontrado</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
