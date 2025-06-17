"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Calendar,
  CheckSquare,
  Heart,
  Home,
  MessageSquare,
  Settings,
  SmilePlus,
  User,
  Download,
  Brain,
  Award,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const pathname = usePathname()

  const mainNavItems = [
    {
      title: "Início",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Diário do Humor",
      href: "/dashboard/mood",
      icon: SmilePlus,
    },
    {
      title: "Sintomas",
      href: "/dashboard/symptoms",
      icon: Heart,
    },
    {
      title: "Tendências",
      href: "/dashboard/trends",
      icon: BarChart3,
    },
    {
      title: "Avaliações",
      href: "/dashboard/assessments",
      icon: Brain,
    },
    {
      title: "Autocuidado",
      href: "/dashboard/self-care",
      icon: CheckSquare,
    },
    {
      title: "Comunidade",
      href: "/dashboard/community",
      icon: MessageSquare,
    },
    {
      title: "Recompensas",
      href: "/dashboard/rewards",
      icon: Award,
    },
  ]

  const secondaryNavItems = [
    {
      title: "Calendário",
      href: "/dashboard/calendar",
      icon: Calendar,
    },
    {
      title: "Perfil",
      href: "/dashboard/profile",
      icon: User,
    },
    {
      title: "Exportar Dados",
      href: "/dashboard/export",
      icon: Download,
    },
    {
      title: "Configurações",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="border-r border-slate-800">
      <SidebarHeader className="py-4">
        <div className="flex items-center px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/20">
            <span className="text-lg font-bold text-teal-500">S</span>
          </div>
          <span className="ml-2 text-lg font-semibold text-white">Serenità</span>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarMenu>
          {mainNavItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarSeparator className="my-2" />
        <SidebarMenu>
          {secondaryNavItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="py-4">
        <div className="px-3 text-xs text-slate-500">
          <p>© 2025 Serenità por Luca Cordella</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
