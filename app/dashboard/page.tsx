import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardCards } from "@/components/dashboard/dashboard-cards"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container-responsive py-6 space-y-6">
        <DashboardHeader />
        <DashboardCards />
      </div>
    </div>
  )
}
