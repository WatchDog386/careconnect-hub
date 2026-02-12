import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/DataTable";
import StatusBadge from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const mockDoctors = [
  { id: "D001", name: "Dr. Sarah Smith", specialization: "Cardiology", phone: "+1 555-1001", status: "Available", patients: 24 },
  { id: "D002", name: "Dr. James Johnson", specialization: "Neurology", phone: "+1 555-1002", status: "Available", patients: 18 },
  { id: "D003", name: "Dr. Priya Patel", specialization: "Orthopedics", phone: "+1 555-1003", status: "Unavailable", patients: 31 },
  { id: "D004", name: "Dr. Michael Lee", specialization: "Pediatrics", phone: "+1 555-1004", status: "Available", patients: 22 },
  { id: "D005", name: "Dr. Emily Chen", specialization: "Dermatology", phone: "+1 555-1005", status: "Available", patients: 15 },
];

const columns = [
  { key: "id", header: "ID" },
  { key: "name", header: "Doctor Name" },
  { key: "specialization", header: "Specialization" },
  { key: "phone", header: "Phone" },
  { key: "patients", header: "Patients" },
  { key: "status", header: "Status", render: (d: any) => <StatusBadge status={d.status} /> },
];

export default function Doctors() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Doctors"
        description="Manage doctor profiles and schedules"
        action={<Button><Plus className="mr-2 h-4 w-4" /> Add Doctor</Button>}
      />
      <DataTable columns={columns} data={mockDoctors} />
    </div>
  );
}
