"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CustomerAccountsColumnProps } from "@/Types"
import { DataTableRowActions } from "@/components/utils/TableUtilties/data-table-row-actions"

export const accountListsColumn:ColumnDef<CustomerAccountsColumnProps>[] = [
    {
        accessorKey:"name",
        header:"Customer Name"
    },
    {
        accessorKey:"nrc",
        header:"NRC"
    },
    {
        accessorKey:"phone",
        header:"Phone Number"
    },
    {
        accessorKey:"accountNo",
        header:"Account No"
    },
    {
        accessorKey:"amount",
        header:"Amount"
    },
    {
        accessorKey:"accountType",
        header:"Account Type"
    },
    {
        accessorKey:"createdDate",
        header:"Created Date"
    },
    {
        accessorKey:"status",
        header:"Account Status"
    },
    {
        id:"action",
        cell:({row})=> <DataTableRowActions row={row}/>
    }
]