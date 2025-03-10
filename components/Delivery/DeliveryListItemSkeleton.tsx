import { TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export const DeliveryListItemSkeleton = () => {
  return (
    <TableRow>
      <TableCell className="font-medium">
        <Skeleton className="h-8 w-full" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-8 SKELETON_ITEMS_COUNT" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-8 SKELETON_ITEMS_COUNT" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-8 SKELETON_ITEMS_COUNT" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-8 SKELETON_ITEMS_COUNT" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-8 SKELETON_ITEMS_COUNT" />
      </TableCell>
    </TableRow>
  );
};
