"use client"

import { ColumnDef } from "@tanstack/react-table"
import { TableData } from "@/Types"
import { DataTableRowActions } from "@/components/utils/TableUtilties/data-table-row-actions"
import CustomerDepositModal from "@/components/CustomerAccountsListTableComponents/customer.deposit.modal"

export const accountListsColumn:ColumnDef<TableData>[] = [
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
        header:"Account Status",
        cell:({row})=> <CustomerDepositModal buttonText={`${row.original.accountStatus}`} accountNo={`${row.original.accountNo}`}/>
    },
    {
        id:"action",
        cell:({row})=> <DataTableRowActions row={row}/>
    }
]