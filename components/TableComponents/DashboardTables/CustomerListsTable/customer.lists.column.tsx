"use client";

import { CustomerListTableColumns } from "@/Types";
import { ColumnDef } from "@tanstack/react-table";
import { statuses } from "../../TableData/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DataTableColumnHeader } from "@/components/utils/TableUtilties/data-table-column-header";

export const customerListColumns: ColumnDef<CustomerListTableColumns>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Name" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2 w-[140px]">
        <Avatar>
          <AvatarImage
            src={`${row.original.profile}`}
            alt="user Profile Photo"
          />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
        <p>{row.getValue("name")}</p>
      </div>
    ),
  },
  {
    accessorKey: "nrc",
    header: "NRC",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "createdDate",
    header: "Created Date",
  },
  {
    accessorKey: "totalAccount",
    header: "Total Account",
    cell: ({ row }) => (
      <p className="text-center">{row.getValue("totalAccount")}</p>
    ),
  },
  {
    accessorKey: "Address",
    header: "Address",
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.label === row.getValue("status")
      );
      if (!status) {
        return null;
      }
      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon
              color={status.value === "online" ? "green" : "red"}
              className={`mr-1 h-3 ${
                status.value === "online" ? "text-green-500" : "text-red-500"
              }`}
            />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
];
