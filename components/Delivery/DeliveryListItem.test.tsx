import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DeliveryType } from "@/types/deliveryTypes";

import { DeliveryListItem } from "./DeliveryListItem";

test("Проверка, что по кнопке 'Подробнее', указан верный url", async () => {
  const item: DeliveryType = {
    id: 123,
    created_at: "2024-03-10",
    sender_address: "Отправитель",
    recipient_address: "Получатель",
    status: { id: 2, name: "delivered", display_name: "Доставлено" },
    status_id: 2,
  };

  render(<DeliveryListItem item={item} ref={null} />);

  const link = screen.getByRole("link", { name: /Подробнее/i });

  expect(link).toHaveAttribute("href", "/123");

  await userEvent.click(link);
});
