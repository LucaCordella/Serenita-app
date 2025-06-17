import { Check, Heart, Shield } from "lucide-react"

export function CommunityGuidelines() {
  const guidelines = [
    {
      title: "Respeite a Privacidade",
      description:
        "Embora o compartilhamento seja encorajado, respeite sua privacidade e a dos outros. Nunca compartilhe informações pessoais identificáveis.",
      icon: Shield,
    },
    {
      title: "Seja Solidário",
      description: "Este é um espaço para apoio e encorajamento. Ofereça feedback construtivo e reforço positivo.",
      icon: Heart,
    },
    {
      title: "Não Dê Conselhos Médicos",
      description: "Não dê ou peça conselhos médicos. O Serenità não substitui cuidados médicos profissionais.",
      icon: Check,
    },
    {
      title: "Denuncie Preocupações",
      description: "Se você vir conteúdo que viola essas diretrizes ou o preocupa, denuncie imediatamente.",
      icon: Shield,
    },
  ]

  return (
    <div className="space-y-6">
      <p className="text-slate-300">
        Bem-vindo à comunidade Serenità! Este é um espaço seguro para compartilhar experiências, oferecer apoio e
        conectar-se com outras pessoas em sua jornada de saúde mental. Para manter um ambiente positivo, siga estas
        diretrizes:
      </p>

      <div className="space-y-4">
        {guidelines.map((guideline, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-500/20">
              <guideline.icon className="h-5 w-5 text-teal-500" />
            </div>
            <div>
              <h3 className="font-medium text-white">{guideline.title}</h3>
              <p className="text-sm text-slate-400">{guideline.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-slate-800 p-4 text-sm text-slate-300">
        <p className="font-medium text-white">Recursos de emergência</p>
        <p className="mt-2">
          Se você ou alguém que você conhece estiver em crise, use o Modo de Emergência do aplicativo ou entre em
          contato com um destes recursos:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-slate-400">
          <li>Centro de Valorização da Vida (CVV): 188</li>
          <li>SAMU: 192</li>
          <li>Bombeiros: 193</li>
          <li>Polícia Militar: 190</li>
        </ul>
      </div>
    </div>
  )
}
