"use client"
import { ColumnDef } from "@tanstack/react-table";
import { DatePickerTableProps } from "@/Types";
import { DataTableRowActions } from "@/components/utils/TableUtilties/data-table-row-actions";

export const transactionQueryColumns:ColumnDef<DatePickerTableProps>[] = [
    {
        accessorKey:"senderNo",
        header:"Sender Account Number"
    },
    {
        accessorKey:"receiverNo",
        header:"Receiver Account Number"
    },
    {
        accessorKey:"amount",
        header:"Amount"
    },
    {
        accessorKey:"date",
        header:"Transaction Date"
    },
    {
        id:"action",
        cell:({row})=> <DataTableRowActions row={row}/>
    }
]