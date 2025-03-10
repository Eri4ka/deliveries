

import { DeliveryList } from "@/components/Delivery/DeliveryList";
import { PageLayout } from "@/components/Layout/PageLayout";
import { DEFAULT_DELIVERY_LIST_SIZE } from "@/lib/constants";
import { getDeliveryList, getDeliveryStatus } from "@/services/deliveryService";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function DeliveryListPage() {
  const [deliveryListData, deliveryStatus] = await Promise.all([
    getDeliveryList({
      expand_status: "true",
      limit: DEFAULT_DELIVERY_LIST_SIZE,
      skip: 0,
    }),
    getDeliveryStatus(),
  ]);

  return (
    <PageLayout headingText="📦 Список доставок">
      <DeliveryList
        initialList={deliveryListData}
        statusList={deliveryStatus}
      />
    </PageLayout>
  );
}
