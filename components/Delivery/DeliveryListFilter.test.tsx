import { render, screen, fireEvent, within } from "@testing-library/react";
import { DeliveryList } from "./DeliveryList";
import {
  DeliveryListResponseType,
  DeliveryStatusResponseType,
} from "@/types/deliveryTypes";

const mockDeliveries: DeliveryListResponseType = {
  deliveries: [
    {
      id: 1,
      status_id: 2,
      status: { id: 2, name: "delivered", display_name: "Доставлено" },
      created_at: "2025-03-03T04:19:00",
      sender_address: "Уфа, ул. Победы, д. 21",
      recipient_address: "Челябинск, ул. Советская, д. 25",
    },
  ],
  total_items: 1,
};

const mockStatusList: DeliveryStatusResponseType[] = [
  {
    id: 1,
    name: "transit",
    display_name: "В пути",
  },
  {
    id: 2,
    name: "delivered",
    display_name: "Доставлено",
  },
];

describe("DeliveryListFilter", () => {
  it("Проверка, что дропдаун со статусами открыт", async () => {
    render(
      <DeliveryList initialList={mockDeliveries} statusList={mockStatusList} />
    );

    expect(screen.getByText("Фильтр по статусу (0)")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Фильтр по статусу (0)"));

    expect(within(document.body).getByText("Доставлено")).toBeInTheDocument();
  });
});
