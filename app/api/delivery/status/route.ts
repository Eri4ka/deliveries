import { NextRequest } from "next/server";
import deliveryStatus from "@/data/delivery_status.json";

export async function GET() {
  return Response.json(deliveryStatus);
}
