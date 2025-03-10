import { NextRequest } from "next/server";

import deliveryList from "@/data/delivery_list.json";
import deliveryStatus from "@/data/delivery_status.json";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const limit = parseInt(searchParams.get("limit") ?? "0", 10) || 0;
  const skip = parseInt(searchParams.get("skip") ?? "0", 10) || 0;
  const expandStatus = searchParams.get("expand_status") === "true";
  const statusIds = searchParams.get("status_ids");

  let filteredDeliveries = [...deliveryList];

  if (statusIds) {
    const statusIdsArr = statusIds.split(",").map(Number);
    filteredDeliveries = filteredDeliveries.filter((item) =>
      statusIdsArr.includes(item.status_id)
    );
  }

  const totalFilteredItems = filteredDeliveries.length;

  filteredDeliveries = limit
    ? filteredDeliveries.slice(skip, skip + limit)
    : filteredDeliveries.slice(skip);

  if (expandStatus) {
    filteredDeliveries = filteredDeliveries.map((delivery) => ({
      ...delivery,
      status:
        deliveryStatus.find((status) => status.id === delivery.status_id) ||
        null,
    }));
  }

  return Response.json({
    deliveries: filteredDeliveries,
    total_items: totalFilteredItems,
  });
}
