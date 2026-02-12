import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/DataTable";
import StatusBadge from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const mockLabTests = [
  { id: "L001", patient: "John Doe", test: "Complete Blood Count", doctor: "Dr. Smith", date: "2026-02-12", status: "Completed" },
  { id: "L002", patient: "Sarah Connor", test: "Blood Panel", doctor: "Dr. Johnson", date: "2026-02-12", status: "Pending" },
  { id: "L003", patient: "Mike Wilson", test: "Urinalysis", doctor: "Dr. Patel", date: "2026-02-11", status: "Completed" },
  { id: "L004", patient: "Emily Davis", test: "X-Ray Chest", doctor: "Dr. Lee", date: "2026-02-11", status: "Pending" },
];

const columns = [
  { key: "id", header: "ID" },
  { key: "patient", header: "Patient" },
  { key: "test", header: "Test Name" },
  { key: "doctor", header: "Requested By" },
  { key: "date", header: "Date" },
  { key: "status", header: "Status", render: (l: any) => <StatusBadge status={l.status} /> },
];

export default function Lab() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Laboratory"
        description="Manage lab test requests and results"
        action={<Button><Plus className="mr-2 h-4 w-4" /> New Test Request</Button>}
      />
      <DataTable columns={columns} data={mockLabTests} />
    </div>
  );
}
