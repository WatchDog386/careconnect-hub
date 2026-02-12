import { Users, Stethoscope, CalendarDays, Receipt, AlertTriangle, Activity } from "lucide-react";
import StatsCard from "@/components/StatsCard";
import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import { motion } from "framer-motion";

const stats = [
  { title: "Total Patients", value: "1,284", icon: Users, trend: "+12% this month", trendUp: true, color: "primary" as const },
  { title: "Total Doctors", value: "48", icon: Stethoscope, trend: "+2 new", trendUp: true, color: "info" as const },
  { title: "Today's Appointments", value: "32", icon: CalendarDays, trend: "5 pending", trendUp: true, color: "warning" as const },
  { title: "Revenue (MTD)", value: "$142,500", icon: Receipt, trend: "+8.2%", trendUp: true, color: "success" as const },
];

const recentActivities = [
  { action: "Patient admitted", detail: "John Doe — ICU Ward", time: "5 min ago", status: "admitted" },
  { action: "Appointment completed", detail: "Dr. Smith — Sarah Connor", time: "12 min ago", status: "completed" },
  { action: "Lab result uploaded", detail: "Blood panel — Patient #1042", time: "25 min ago", status: "completed" },
  { action: "Invoice generated", detail: "Invoice #4521 — $2,300", time: "1 hour ago", status: "pending" },
  { action: "Medication dispensed", detail: "Amoxicillin 500mg — Patient #987", time: "2 hours ago", status: "completed" },
];

const lowStockMeds = [
  { name: "Amoxicillin 500mg", stock: 12, threshold: 50 },
  { name: "Ibuprofen 200mg", stock: 8, threshold: 100 },
  { name: "Paracetamol 650mg", stock: 25, threshold: 200 },
];

export default function Dashboard() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Dashboard" description="Overview of hospital operations" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div key={stat.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
            <StatsCard {...stat} />
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="lg:col-span-2 rounded-xl border border-border bg-card p-5 shadow-sm">
          <h2 className="font-heading text-lg font-semibold text-card-foreground">Recent Activity</h2>
          <div className="mt-4 space-y-3">
            {recentActivities.map((item, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-border/50 px-4 py-3">
                <div className="flex items-center gap-3">
                  <Activity className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-card-foreground">{item.action}</p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <StatusBadge status={item.status} />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Low Stock */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-warning" />
            <h2 className="font-heading text-lg font-semibold text-card-foreground">Low Stock Alerts</h2>
          </div>
          <div className="mt-4 space-y-3">
            {lowStockMeds.map((med, i) => (
              <div key={i} className="rounded-lg border border-warning/20 bg-warning/5 px-4 py-3">
                <p className="text-sm font-medium text-card-foreground">{med.name}</p>
                <div className="mt-1 flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">Stock: {med.stock} / {med.threshold}</p>
                  <div className="h-1.5 w-16 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-warning" style={{ width: `${(med.stock / med.threshold) * 100}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
