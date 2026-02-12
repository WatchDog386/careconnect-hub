import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/DataTable";
import StatusBadge from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const mockAppointments = [
  { id: "A001", patient: "John Doe", doctor: "Dr. Smith", date: "2026-02-12", time: "09:00 AM", status: "Confirmed" },
  { id: "A002", patient: "Sarah Connor", doctor: "Dr. Johnson", date: "2026-02-12", time: "10:30 AM", status: "Pending" },
  { id: "A003", patient: "Mike Wilson", doctor: "Dr. Patel", date: "2026-02-12", time: "11:00 AM", status: "Completed" },
  { id: "A004", patient: "Emily Davis", doctor: "Dr. Lee", date: "2026-02-13", time: "02:00 PM", status: "Pending" },
  { id: "A005", patient: "Robert Brown", doctor: "Dr. Chen", date: "2026-02-13", time: "03:30 PM", status: "Cancelled" },
];

const columns = [
  { key: "id", header: "ID" },
  { key: "patient", header: "Patient" },
  { key: "doctor", header: "Doctor" },
  { key: "date", header: "Date" },
  { key: "time", header: "Time" },
  { key: "status", header: "Status", render: (a: any) => <StatusBadge status={a.status} /> },
];

export default function Appointments() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Appointments"
        description="Schedule and manage patient appointments"
        action={<Button><Plus className="mr-2 h-4 w-4" /> Book Appointment</Button>}
      />
      <DataTable columns={columns} data={mockAppointments} />
    </div>
  );
}
