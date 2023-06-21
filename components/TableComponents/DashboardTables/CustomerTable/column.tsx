import { ColumnDef } from "@tanstack/react-table";
import { activeStatus } from "../../TableData/data";
import { DashboardCustomer } from "@/Types";

import { DataTableColumnHeader } from "@/components/utils/TableUtilties/data-table-column-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DataTableRowActions } from "@/components/utils/TableUtilties/data-table-row-actions";

export const columns: ColumnDef<DashboardCustomer>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Full Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-x-2 w-[140px]">
          <Avatar>
            <AvatarImage src={`${row.original.profile}`} />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
          <p>{row.getValue("name")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "nrc",
    header: "NRC",
  },
  {
    accessorKey: "date",
    header: "Created Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = activeStatus.find(
        (status) => status.label === row.getValue("status")
      );
      if (!status) {
        return null;
      }
      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon
              color={status.value === "active" ? "green" : "red"}
              className={`mr-1 h-3 ${
                status.value === "active" ? "text-green-500" : "text-red-500"
              }`}
            />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "account",
    header: "Account",
  },
  {
    id: "action",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
