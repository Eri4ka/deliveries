import { endpoints } from "@/api/endpoints";
import { request } from "@/api/request";
import { NEXT_PUBLIC_API_URL } from "@/lib/constants";

import {
  DeliveryDetailsType,
  DeliveryListResponseType,
  DeliveryStatusResponseType,
} from "@/types/deliveryTypes";

type DeliveryListSearchParamsType = {
  skip?: number;
  limit?: number;
  expand_status?: string;
  status_ids?: number[];
};

export const getDeliveryList = async (
  params: DeliveryListSearchParamsType
): Promise<DeliveryListResponseType> => {
  const requestUrl = new URL(`${NEXT_PUBLIC_API_URL}${endpoints.deliveryList}`);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        if (value.length > 0) {
          requestUrl.searchParams.set(key, value.join(","));
        }
      } else {
        requestUrl.searchParams.set(key, value.toString());
      }
    }
  });

  return request<DeliveryListResponseType>(requestUrl.toString());
};

export const getDeliveryStatus = async (): Promise<
  DeliveryStatusResponseType[]
> => {
  return request<DeliveryStatusResponseType[]>(
    `${NEXT_PUBLIC_API_URL}${endpoints.deliveryStatus}`
  );
};

export const getDeliveryDetails = async (
  id: string,
  { expand_status }: { expand_status?: string } = {}
): Promise<DeliveryDetailsType> => {
  const requestUrl = new URL(
    `${NEXT_PUBLIC_API_URL}${endpoints.deliveryDetails}${id}`
  );

  if (expand_status) {
    requestUrl.searchParams.set("expand_status", expand_status);
  }

  return request<DeliveryDetailsType>(requestUrl.toString());
};
