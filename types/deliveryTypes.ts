export type DeliveryType = {
  id: number;
  status: DeliveryStatusResponseType | null;
  status_id: number;
  created_at: string;
  sender_address: string;
  recipient_address: string;
};

export type DeliveryListResponseType = {
  deliveries: DeliveryType[];
  total_items: number;
};

export enum DeliveryStatusType {
  transit = "transit",
  delivered = "delivered",
  canceled = "canceled",
  warehouse = 'warehouse'
}

export type DeliveryStatusResponseType = {
  id: number;
  name: keyof typeof DeliveryStatusType;
  display_name: string;
};

export type DeliveryDetailsType = {
  id: number;
  status: DeliveryStatusResponseType | null;
  status_id: number;
  created_at: string;
  sender_address: string;
  recipient_address: string;
  status_history: { status: string; date: string }[];
  comments: string[];
  sender: { name: string; address: string; contact: string; role: string };
  recipient: { name: string; address: string; contact: string; role: string };
};
