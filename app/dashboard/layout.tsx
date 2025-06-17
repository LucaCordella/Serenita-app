import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { TopNav } from "@/components/dashboard/top-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col bg-slate-900">
        <TopNav />
        <div className="flex flex-1">
          <AppSidebar />
          <main className="flex-1 overflow-auto">
            <div className="min-h-full bg-slate-900">{children}</div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
