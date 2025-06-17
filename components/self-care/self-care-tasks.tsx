"use client"

import { useState } from "react"
import { CheckCircle2, Circle, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

type Task = {
  id: string
  title: string
  completed: boolean
  category: "physical" | "mental" | "social" | "other"
}

export function SelfCareTasks() {
  // Dados simulados para tarefas de autocuidado
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Beber 8 copos de água", completed: true, category: "physical" },
    { id: "2", title: "30 minutos de exercício", completed: false, category: "physical" },
    { id: "3", title: "10 minutos de meditação", completed: true, category: "mental" },
    { id: "4", title: "Ler por 20 minutos", completed: false, category: "mental" },
    { id: "5", title: "Ligar para um amigo", completed: false, category: "social" },
    { id: "6", title: "Dormir 8 horas", completed: false, category: "physical" },
    { id: "7", title: "Praticar gratidão", completed: true, category: "mental" },
    { id: "8", title: "Limitar redes sociais a 30 minutos", completed: false, category: "mental" },
  ])

  const [newTask, setNewTask] = useState("")

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask,
        completed: false,
        category: "other",
      }
      setTasks([...tasks, task])
      setNewTask("")
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "physical":
        return "bg-blue-500/20 text-blue-500"
      case "mental":
        return "bg-purple-500/20 text-purple-500"
      case "social":
        return "bg-green-500/20 text-green-500"
      default:
        return "bg-slate-500/20 text-slate-500"
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "physical":
        return "Físico"
      case "mental":
        return "Mental"
      case "social":
        return "Social"
      default:
        return "Outro"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Adicionar nova tarefa de autocuidado..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          className="input-primary"
        />
        <Button size="icon" onClick={addTask} className="btn-primary">
          <Plus className="h-4 w-4" />
          <span className="sr-only">Adicionar tarefa</span>
        </Button>
      </div>

      <Separator className="bg-slate-700" />

      <ScrollArea className="h-[350px] pr-4">
        <div className="space-y-2">
          {tasks.map((task) => (
            <Card key={task.id} className="border-slate-700 bg-slate-900/30 card-hover">
              <CardContent className="p-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
                      task.completed ? "text-teal-500" : "text-slate-500"
                    }`}
                  >
                    {task.completed ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
                    <span className="sr-only">
                      {task.completed ? "Marcar como incompleta" : "Marcar como completa"}
                    </span>
                  </button>
                  <span
                    className={`flex-1 text-sm ${task.completed ? "text-slate-500 line-through" : "text-slate-200"}`}
                  >
                    {task.title}
                  </span>
                  <span className={`rounded-full px-2 py-1 text-xs ${getCategoryColor(task.category)}`}>
                    {getCategoryLabel(task.category)}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>

      <div className="flex items-center justify-between text-sm text-slate-400">
        <span>
          {tasks.filter((t) => t.completed).length} de {tasks.length} tarefas concluídas
        </span>
        <span>{Math.round((tasks.filter((t) => t.completed).length / tasks.length) * 100)}% completo</span>
      </div>
    </div>
  )
}
