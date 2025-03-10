import { render, screen } from "@testing-library/react";
import { DeliveryList } from "./DeliveryList";
import { DeliveryListResponseType } from "@/types/deliveryTypes";

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

describe("DeliveryList", () => {
  it("Проверка рендера таблицы с доставками DeliveryList", async () => {
    render(<DeliveryList initialList={mockDeliveries} statusList={[]} />);

    expect(screen.getByText("📋 Доставки")).toBeInTheDocument();
    expect(await screen.findByText("1")).toBeInTheDocument();
    expect(screen.getByText("Доставлено")).toBeInTheDocument();
    expect(screen.getByText("Уфа, ул. Победы, д. 21")).toBeInTheDocument();
    expect(
      screen.getByText("Челябинск, ул. Советская, д. 25")
    ).toBeInTheDocument();
  });
});
