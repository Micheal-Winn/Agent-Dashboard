"use client"

import { ColumnDef } from "@tanstack/react-table";
import { AccountTableData } from "@/Types";

import { DataTableColumnHeader } from "@/components/utils/TableUtilties/data-table-column-header";
import { DataTableRowActions } from "@/components/utils/TableUtilties/data-table-row-actions";

export const accountColumns : ColumnDef<AccountTableData>[] = [
    {
        accessorKey:"id",
        header:"Account No"
    },
    {
        accessorKey:"type",
        header:"Account Type"
    },
    {
        accessorKey:"amount",
        header:"Amount"
    },
    {
        id:"action",
        cell:({row}) => <DataTableRowActions row={row} />
    }
    
]