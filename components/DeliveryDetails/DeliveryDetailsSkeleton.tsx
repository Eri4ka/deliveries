import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export const DeliveryDetailsSkeleton = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="w-40 h-6" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <Skeleton className="w-32 h-5" />
              <Skeleton className="w-48 h-5" />
              <Skeleton className="w-40 h-5" />
              <Skeleton className="w-44 h-5" />
            </div>
            <div className="space-y-3">
              <Skeleton className="w-52 h-5" />
              <Skeleton className="w-52 h-5" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="w-40 h-6" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Skeleton className="w-20 h-5" />
                </TableHead>
                <TableHead>
                  <Skeleton className="w-20 h-5" />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(3)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="w-24 h-5" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-28 h-5" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="w-40 h-6" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {[...Array(3)].map((_, index) => (
              <li key={index} className="p-2">
                <Skeleton className="w-full h-6" />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Skeleton className="w-32 h-10 rounded-md" />
        <Skeleton className="w-40 h-10 rounded-md" />
      </div>
    </div>
  );
};