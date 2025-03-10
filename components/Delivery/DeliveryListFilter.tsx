"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { memo, useState } from "react";
import { Button } from "@/components/ui/button";

export type FilterItemType = { id: number; name: string; display_name: string };

type Props = {
  title: string;
  filterList: FilterItemType[];
  onFilterChange: (selectedList: FilterItemType[]) => void;
};

export const DeliveryListFilter = memo(
  ({ title, filterList, onFilterChange }: Props) => {
    const [selected, setSelected] = useState<FilterItemType[]>([]);

    const toggleSelection = (item: FilterItemType) => {
      const isSelected = selected.some((s) => s.id === item.id);
      const newSelection = isSelected
        ? selected.filter((s) => s.id !== item.id)
        : [...selected, item];
      setSelected(newSelection);
      onFilterChange(newSelection);
    };

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="text-sm">
            {title} ({selected.length})
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {filterList.map((item) => (
            <DropdownMenuCheckboxItem
              className="cursor-pointer"
              key={item.id}
              checked={selected.some((s) => s.id === item.id)}
              onCheckedChange={() => toggleSelection(item)}
            >
              {item.display_name}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
);

DeliveryListFilter.displayName = 'DeliveryListFilter'