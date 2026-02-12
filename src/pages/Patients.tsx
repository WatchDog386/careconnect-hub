import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/DataTable";
import StatusBadge from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const mockPatients = [
  { id: "P001", name: "John Doe", age: 45, gender: "Male", phone: "+1 555-0101", status: "Active", doctor: "Dr. Smith" },
  { id: "P002", name: "Sarah Connor", age: 32, gender: "Female", phone: "+1 555-0102", status: "Admitted", doctor: "Dr. Johnson" },
  { id: "P003", name: "Mike Wilson", age: 58, gender: "Male", phone: "+1 555-0103", status: "Active", doctor: "Dr. Patel" },
  { id: "P004", name: "Emily Davis", age: 27, gender: "Female", phone: "+1 555-0104", status: "Discharged", doctor: "Dr. Smith" },
  { id: "P005", name: "Robert Brown", age: 63, gender: "Male", phone: "+1 555-0105", status: "Active", doctor: "Dr. Lee" },
];

const columns = [
  { key: "id", header: "ID" },
  { key: "name", header: "Patient Name" },
  { key: "age", header: "Age" },
  { key: "gender", header: "Gender" },
  { key: "phone", header: "Phone" },
  { key: "doctor", header: "Assigned Doctor" },
  { key: "status", header: "Status", render: (p: any) => <StatusBadge status={p.status} /> },
];

export default function Patients() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Patients"
        description="Manage patient records and medical history"
        action={<Button><Plus className="mr-2 h-4 w-4" /> Add Patient</Button>}
      />
      <DataTable columns={columns} data={mockPatients} />
    </div>
  );
}
