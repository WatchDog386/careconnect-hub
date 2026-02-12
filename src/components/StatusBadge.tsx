const statusStyles: Record<string, string> = {
  active: "bg-success/10 text-success",
  admitted: "bg-info/10 text-info",
  discharged: "bg-muted text-muted-foreground",
  pending: "bg-warning/10 text-warning",
  confirmed: "bg-success/10 text-success",
  cancelled: "bg-destructive/10 text-destructive",
  completed: "bg-primary/10 text-primary",
  paid: "bg-success/10 text-success",
  unpaid: "bg-destructive/10 text-destructive",
  partial: "bg-warning/10 text-warning",
  "in-stock": "bg-success/10 text-success",
  "low-stock": "bg-warning/10 text-warning",
  "out-of-stock": "bg-destructive/10 text-destructive",
  available: "bg-success/10 text-success",
  unavailable: "bg-muted text-muted-foreground",
};

export default function StatusBadge({ status }: { status: string }) {
  const style = statusStyles[status.toLowerCase()] || "bg-muted text-muted-foreground";
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${style}`}>
      {status}
    </span>
  );
}
