import { DeliveryDetails } from "@/components/DeliveryDetails/DeliveryDetails";
import { getDeliveryDetails } from "@/services/deliveryService";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function DeliveryDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const deliveryDetails = await getDeliveryDetails(id, {
    expand_status: "true",
  });

  return <DeliveryDetails delivery={deliveryDetails} />;
}
