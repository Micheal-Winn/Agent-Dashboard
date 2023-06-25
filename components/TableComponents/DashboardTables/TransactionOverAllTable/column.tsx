"use client"

import { ColumnDef } from "@tanstack/react-table"
import { TransactionTableProps } from "@/Types"
import { DataTableRowActions } from "@/components/utils/TableUtilties/data-table-row-actions"

export const transactionOverAllColumns:ColumnDef<TransactionTableProps>[] = [
    {
        accessorKey:"accountNo",
        header:"Account No"
    },
    {
        accessorKey:"amount",
        header:"Amount"
    },
    {
        accessorKey:"flash",
        header:"Flash"
    },
    {
        accessorKey:"type",
        header:"Type"
    },
    {
        accessorKey:"date",
        header:"Date"
    },
    {
        id:"action",
        cell:({row})=> <DataTableRowActions row={row}/>
    }
]