"use client"

import { useState, useEffect, useRef } from "react"
import { Pause, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function BreathingExercise() {
  const [isActive, setIsActive] = useState(false)
  const [currentPhase, setCurrentPhase] = useState<"inhale" | "hold" | "exhale">("inhale")
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(5) // em minutos

  const animationRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number | null>(null)

  // Durações das fases em milissegundos
  const phaseDurations = {
    inhale: 4000, // 4 segundos
    hold: 7000, // 7 segundos
    exhale: 8000, // 8 segundos
  }

  const totalCycleDuration = phaseDurations.inhale + phaseDurations.hold + phaseDurations.exhale
  const totalDuration = duration * 60 * 1000 // converter minutos para milissegundos

  const animate = (time: number) => {
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time
    }

    const deltaTime = time - lastTimeRef.current
    lastTimeRef.current = time

    // Atualizar progresso
    const newProgress = Math.min(progress + (deltaTime / totalDuration) * 100, 100)
    setProgress(newProgress)

    // Calcular fase atual
    const elapsedInCycle = ((newProgress / 100) * totalDuration) % totalCycleDuration

    if (elapsedInCycle < phaseDurations.inhale) {
      setCurrentPhase("inhale")
    } else if (elapsedInCycle < phaseDurations.inhale + phaseDurations.hold) {
      setCurrentPhase("hold")
    } else {
      setCurrentPhase("exhale")
    }

    // Continuar animação se não estiver completa
    if (newProgress < 100) {
      animationRef.current = requestAnimationFrame(animate)
    } else {
      setIsActive(false)
      lastTimeRef.current = null
    }
  }

  const toggleExercise = () => {
    if (isActive) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    } else {
      animationRef.current = requestAnimationFrame(animate)
    }
    setIsActive(!isActive)
  }

  const resetExercise = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
    setIsActive(false)
    setProgress(0)
    setCurrentPhase("inhale")
    lastTimeRef.current = null
  }

  // Limpar animação ao desmontar
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Obter texto de instrução baseado na fase atual
  const getInstructionText = () => {
    switch (currentPhase) {
      case "inhale":
        return "Inspire lentamente pelo nariz..."
      case "hold":
        return "Segure a respiração..."
      case "exhale":
        return "Expire lentamente pela boca..."
    }
  }

  // Calcular o tamanho do círculo de respiração baseado na fase atual
  const getCircleSize = () => {
    switch (currentPhase) {
      case "inhale":
        return "scale-100"
      case "hold":
        return "scale-100"
      case "exhale":
        return "scale-75"
    }
  }

  // Formatar tempo como MM:SS
  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  const remainingTime = totalDuration - (progress / 100) * totalDuration

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium text-white">Técnica de Respiração 4-7-8</h3>
        <p className="text-sm text-slate-400">Inspire por 4 segundos, segure por 7 segundos, expire por 8 segundos</p>
      </div>

      <div className="relative flex h-48 w-48 items-center justify-center">
        <div
          className={`absolute h-40 w-40 rounded-full bg-teal-500/10 transition-transform duration-1000 ${getCircleSize()}`}
        />
        <div
          className={`absolute h-32 w-32 rounded-full bg-teal-500/20 transition-transform duration-1000 ${getCircleSize()}`}
        />
        <div
          className={`flex h-24 w-24 items-center justify-center rounded-full bg-teal-500/30 text-lg font-medium text-white transition-transform duration-1000 ${getCircleSize()}`}
        >
          {formatTime(remainingTime)}
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg font-medium text-white">{getInstructionText()}</p>
      </div>

      <div className="w-full space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">Duração: {duration} min</span>
          <span className="text-sm text-slate-400">Progresso: {Math.round(progress)}%</span>
        </div>

        <Slider
          value={[duration]}
          min={1}
          max={15}
          step={1}
          onValueChange={(value) => {
            setDuration(value[0])
            resetExercise()
          }}
          disabled={isActive}
          className="py-4"
        />

        <div className="flex justify-center gap-4">
          <Button onClick={toggleExercise} className="btn-primary">
            {isActive ? (
              <>
                <Pause className="mr-2 h-4 w-4" /> Pausar
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" /> Iniciar
              </>
            )}
          </Button>
          <Button onClick={resetExercise} variant="outline" className="btn-outline">
            Reiniciar
          </Button>
        </div>
      </div>
    </div>
  )
}
