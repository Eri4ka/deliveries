import Link from "next/link";

import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge/StatusBadge";
import { DeliveryType } from "@/types/deliveryTypes";
import { formatDateString } from "@/lib/helpers";

type Props = {
  item: DeliveryType;
  ref: React.ForwardedRef<HTMLTableRowElement>;
};

export const DeliveryListItem = ({ item, ref }: Props) => {
  return (
    <TableRow ref={ref}>
      <TableCell className="font-medium">{item.id}</TableCell>
      <TableCell>
        <Link href={`/${item.id}`}>
          <Button size="sm" variant="outline">
            Подробнее
          </Button>
        </Link>
      </TableCell>
      <TableCell>
        {item.status && <StatusBadge statusData={item.status} />}
      </TableCell>
      <TableCell>{formatDateString(item.created_at)}</TableCell>
      <TableCell>{item.sender_address}</TableCell>
      <TableCell>{item.recipient_address}</TableCell>
    </TableRow>
  );
};
