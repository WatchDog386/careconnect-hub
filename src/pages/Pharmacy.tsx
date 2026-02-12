import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/DataTable";
import StatusBadge from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const mockMedications = [
  { id: "M001", name: "Amoxicillin 500mg", category: "Antibiotic", stock: 12, price: "$8.50", status: "Low-Stock" },
  { id: "M002", name: "Ibuprofen 200mg", category: "Pain Relief", stock: 8, price: "$4.20", status: "Low-Stock" },
  { id: "M003", name: "Paracetamol 650mg", category: "Pain Relief", stock: 25, price: "$3.00", status: "Low-Stock" },
  { id: "M004", name: "Metformin 500mg", category: "Diabetes", stock: 340, price: "$12.00", status: "In-Stock" },
  { id: "M005", name: "Lisinopril 10mg", category: "Cardiovascular", stock: 180, price: "$9.75", status: "In-Stock" },
];

const columns = [
  { key: "id", header: "ID" },
  { key: "name", header: "Medication" },
  { key: "category", header: "Category" },
  { key: "stock", header: "Stock" },
  { key: "price", header: "Price" },
  { key: "status", header: "Status", render: (m: any) => <StatusBadge status={m.status} /> },
];

export default function Pharmacy() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Pharmacy"
        description="Manage medication inventory and prescriptions"
        action={<Button><Plus className="mr-2 h-4 w-4" /> Add Medication</Button>}
      />
      <DataTable columns={columns} data={mockMedications} />
    </div>
  );
}
