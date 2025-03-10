import {
  DeliveryStatusResponseType,
  DeliveryStatusType,
} from "@/types/deliveryTypes";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const statuses = {
  delivered: { label: "Доставлено", color: "bg-green-500" },
  transit: { label: "В пути", color: "bg-blue-500" },
  warehouse: { label: "На складе", color: "bg-yellow-500" },
  canceled: { label: "Отменено", color: "bg-red-500" },
};

const statusColors: Record<DeliveryStatusType, string> = {
  [DeliveryStatusType.transit]: "bg-blue-100 text-blue-700",
  [DeliveryStatusType.delivered]: "bg-green-100 text-green-700",
  [DeliveryStatusType.canceled]: "bg-red-100 text-red-700",
  [DeliveryStatusType.warehouse]: "bg-red-100 text-white",
};

export const StatusBadge = ({
  statusData,
}: {
  statusData: DeliveryStatusResponseType;
}) => {
  return (
    <Badge className={cn(statusColors[statusData.name])}>
      {statusData.display_name}
    </Badge>
  );
};
