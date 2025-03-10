import { NextRequest } from "next/server";

import deliveryDetails from "@/data/delivery_details.json";
import deliveryStatus from "@/data/delivery_status.json";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const searchParams = req.nextUrl.searchParams;
  const expandStatus = searchParams.get("expand_status") === "true";

  const deliveryDetail = deliveryDetails.find(
    (detail) => detail.id === Number(id)
  );

  if (!deliveryDetail) {
    return Response.json(
      { error: `Запись с id:${id} отсутствует.` },
      { status: 404 }
    );
  }

  const responseData = expandStatus
    ? {
        ...deliveryDetail,
        status:
          deliveryStatus.find(
            (status) => status.id === deliveryDetail.status_id
          ) || null,
      }
    : deliveryDetail;

  return Response.json(responseData);
}
