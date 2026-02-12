import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/DataTable";
import StatusBadge from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const mockInvoices = [
  { id: "INV-001", patient: "John Doe", amount: "$2,340", date: "2026-02-12", status: "Paid" },
  { id: "INV-002", patient: "Sarah Connor", amount: "$5,600", date: "2026-02-11", status: "Unpaid" },
  { id: "INV-003", patient: "Mike Wilson", amount: "$1,200", date: "2026-02-10", status: "Partial" },
  { id: "INV-004", patient: "Emily Davis", amount: "$890", date: "2026-02-09", status: "Paid" },
  { id: "INV-005", patient: "Robert Brown", amount: "$3,450", date: "2026-02-08", status: "Unpaid" },
];

const columns = [
  { key: "id", header: "Invoice #" },
  { key: "patient", header: "Patient" },
  { key: "amount", header: "Amount" },
  { key: "date", header: "Date" },
  { key: "status", header: "Status", render: (b: any) => <StatusBadge status={b.status} /> },
];

export default function Billing() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Billing"
        description="Manage invoices and track payments"
        action={<Button><Plus className="mr-2 h-4 w-4" /> Create Invoice</Button>}
      />
      <DataTable columns={columns} data={mockInvoices} />
    </div>
  );
}
