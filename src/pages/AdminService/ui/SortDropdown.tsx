import { Button } from "@shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@shared/ui/dropdown-menu";

interface SortDropdownProps {
  onSelect: (value: "all" | "approved" | "rejected" | "pending") => void;
  selected?: "all" | "approved" | "rejected" | "pending";
}

export function SortDropdown({ onSelect, selected }: SortDropdownProps) {
  const labelMap = {
    all: "Все заявки",
    approved: "Одобренные",
    rejected: "Отклоненные",
    pending: "Ждут решения",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{labelMap[selected || "all"]}</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onSelect("all")}>
          Все заявки
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("approved")}>
          Одобренные
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("rejected")}>
          Отклоненные
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("pending")}>
          Ждут решения
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
