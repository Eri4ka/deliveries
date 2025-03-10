import Link from "next/link";
import { revalidatePath } from "next/cache";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DeliveryDetailsType } from "@/types/deliveryTypes";
import { StatusBadge } from "@/components/StatusBadge/StatusBadge";
import { formatDateString } from "@/lib/helpers";
import { getDeliveryDetails } from "@/services/deliveryService";

import { DeliveryDetailsField } from "./DeliveryDetailsField";

type Props = {
  delivery: DeliveryDetailsType;
};

export const DeliveryDetails = ({ delivery }: Props) => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Информация о доставке</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              {delivery.status && (
                <DeliveryDetailsField title="Статус:">
                  <StatusBadge statusData={delivery.status} />
                </DeliveryDetailsField>
              )}
              <DeliveryDetailsField title="Дата создания:">
                {formatDateString(delivery.created_at)}
              </DeliveryDetailsField>
              <DeliveryDetailsField title="Отправитель:">
                {delivery.sender.name}
              </DeliveryDetailsField>
              <DeliveryDetailsField title="Получатель:">
                {delivery.recipient.name}
              </DeliveryDetailsField>
            </div>
            <div>
              <DeliveryDetailsField title="Адрес отправки:">
                {delivery.sender_address}
              </DeliveryDetailsField>
              <DeliveryDetailsField title="Адрес доставки:">
                {delivery.recipient_address}
              </DeliveryDetailsField>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>История статусов</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Дата</TableHead>
                <TableHead>Статус</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {delivery.status_history.map((status, index) => (
                <TableRow key={index}>
                  <TableCell>{formatDateString(status.date)}</TableCell>
                  <TableCell>{status.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Комментарии</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {delivery.comments.map((comment, index) => (
              <li key={index} className="p-2 bg-gray-100 rounded-lg">
                {comment}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Link href={"/"}>
          <Button variant="outline">Назад к списку</Button>
        </Link>
        <Button
          onClick={async () => {
            "use server";
            await getDeliveryDetails(delivery.id.toString(), {
              expand_status: "true",
            });

            revalidatePath(`/${delivery.id}`);
          }}
        >
          Обновить статус
        </Button>
      </div>
    </div>
  );
};
