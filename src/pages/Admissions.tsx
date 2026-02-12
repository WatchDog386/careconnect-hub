import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/DataTable";
import StatusBadge from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const mockAdmissions = [
  { id: "AD001", patient: "Sarah Connor", ward: "ICU", room: "ICU-3", doctor: "Dr. Johnson", admitted: "2026-02-10", status: "Admitted" },
  { id: "AD002", patient: "Mike Wilson", ward: "General", room: "G-12", doctor: "Dr. Patel", admitted: "2026-02-08", status: "Admitted" },
  { id: "AD003", patient: "Emily Davis", ward: "Private", room: "P-5", doctor: "Dr. Smith", admitted: "2026-02-05", status: "Discharged" },
];

const columns = [
  { key: "id", header: "ID" },
  { key: "patient", header: "Patient" },
  { key: "ward", header: "Ward" },
  { key: "room", header: "Room" },
  { key: "doctor", header: "Doctor" },
  { key: "admitted", header: "Admitted On" },
  { key: "status", header: "Status", render: (a: any) => <StatusBadge status={a.status} /> },
];

export default function Admissions() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Admissions"
        description="Manage patient admissions and ward assignments"
        action={<Button><Plus className="mr-2 h-4 w-4" /> Admit Patient</Button>}
      />
      <DataTable columns={columns} data={mockAdmissions} />
    </div>
  );
}
