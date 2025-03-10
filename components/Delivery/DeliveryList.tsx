"use client";

import { useCallback, useState } from "react";
import { useInView } from "react-intersection-observer";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DeliveryListResponseType,
  DeliveryStatusResponseType,
} from "@/types/deliveryTypes";
import { DeliveryListItem } from "./DeliveryListItem";
import { DeliveryListFilter, FilterItemType } from "./DeliveryListFilter";
import { getDeliveryList } from "@/services/deliveryService";
import { DEFAULT_DELIVERY_LIST_SIZE } from "@/lib/constants";

import { DeliveryListItemSkeleton } from "./DeliveryListItemSkeleton";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

const INITIAL_PAGE = 1;
const SKELETON_ITEMS_COUNT = 10;

type Props = {
  initialList: DeliveryListResponseType;
  statusList: DeliveryStatusResponseType[];
};

export const DeliveryList = ({ initialList, statusList }: Props) => {
  const [list, setList] = useState(initialList.deliveries);
  const [totalItems, setTotalItems] = useState(initialList.total_items);
  const [isInitialListLoading, setIsInitialListLoading] = useState(false);
  const [isListLoading, setIsListLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [activeStatusIds, setActiveStatusIds] = useState<number[]>([]);

  const isDataLoading = isInitialListLoading || isListLoading;

  const handleStatusChange = useCallback(
    async (selectedStatusList: FilterItemType[]) => {
      const statusIds = selectedStatusList.map((status) => status.id);
      setActiveStatusIds(statusIds);

      setPage(INITIAL_PAGE);
      setList([]);
      setIsInitialListLoading(true);

      const filteredDeliveries = await getDeliveryList({
        status_ids: statusIds,
        expand_status: "true",
        limit: DEFAULT_DELIVERY_LIST_SIZE,
        skip: 0,
      });

      setIsInitialListLoading(false);
      setList(filteredDeliveries.deliveries);
      setTotalItems(filteredDeliveries.total_items);
    },
    []
  );

  const fetchMoreData = async () => {
    if (isDataLoading) return;

    setIsListLoading(true);

    const newDeliveries = await getDeliveryList({
      expand_status: "true",
      limit: DEFAULT_DELIVERY_LIST_SIZE,
      skip: page * DEFAULT_DELIVERY_LIST_SIZE,
      status_ids: activeStatusIds.length ? activeStatusIds : undefined,
    });

    setList((prev) => [...prev, ...newDeliveries.deliveries]);
    setPage((prev) => prev + INITIAL_PAGE);
    setIsListLoading(false);
  };

  const { ref: lastLineRef } = useInView({
    onChange: (inView) => {
      if (inView && !isDataLoading && totalItems > list.length) {
        fetchMoreData();
      }
    },
    triggerOnce: true,
    rootMargin: "0px 0px 35% 0px",
  });

  return (
    <Card className="p-4 shadow-md bg-white">
      <div
        className={cn(
          "flex justify-between items-center p-1 md:p-4 sticky top-0 z-20 backdrop-blur-lg bg-white/80"
        )}
      >
        <h2 className="text-lg font-semibold">📋 Доставки</h2>
        <DeliveryListFilter
          title="Фильтр по статусу"
          filterList={statusList}
          onFilterChange={handleStatusChange}
        />
      </div>

      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-24 text-left">ID</TableHead>
            <TableHead className="w-32"></TableHead>
            <TableHead className="text-left">Статус</TableHead>
            <TableHead className="text-left">Дата</TableHead>
            <TableHead className="text-left">Отправитель</TableHead>
            <TableHead className="text-left">Получатель</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isInitialListLoading
            ? [...Array(SKELETON_ITEMS_COUNT)].map((_, index) => (
                <DeliveryListItemSkeleton key={index} />
              ))
            : list.map((item, index) => (
                <DeliveryListItem
                  key={item.id}
                  item={item}
                  ref={index === list.length - 1 ? lastLineRef : null}
                />
              ))}
          {isListLoading &&
            [...Array(SKELETON_ITEMS_COUNT)].map((_, index) => (
              <DeliveryListItemSkeleton key={`loading-${index}`} />
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};
