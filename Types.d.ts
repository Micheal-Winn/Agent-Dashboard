import { ReactNode } from "react"

interface Link {
    link:string,
    subLinks:Array<string>

}

interface NavLink{
    label:string
    links:Array<Link>
}

interface UserCardListInfo{
    total:number,
    name:string,
    bgColor:string
}

interface TableData{
    id?:string,
    profile?:string,
    name:string,
    nrc:string,
    email?:string,
    createdDate:string,
    totalAccount?:number,
    status?:string,
    Address?:string,
    phone?:string,
    accountNo?:string,
    amount?:number,
    accountType?:string,
    accountStatus?:string,
    gender?:string,
    // date:""

}

export type CustomerListTableColumns = {
    id: string;
    profile: string;
    name: string;
    nrc: string;
    email: string;
    createdDate: string;
    totalAccount: number;
    Address: string;
    phone: string;
    status: "Online" | "Offline";
    gender: string;
  };

export type DashboardCustomer = {
    id:string,
    profile:string,
    name:string,
    nrc:string,
    date:string,
    status:"Active" | "Inactive"
    account:number
}

interface CustomerEditProps{
    name:string,
    nrc:string,
    phone:string,
    email:string,
    Address:string,
    createdDate:string,
    gender:string,
    totalAccount:number
}

interface AccountTableData{
    id:string,
    type:string,
    amount:number
}

interface nested{
    id:string,
    name:string,
    path:string,
}

interface MobileNavLists{
    id:string,
    name:string,
    path:string | null,
    icon?:TablerIconsProps,
    nested?:Array<nested>,
    leftIcon?:ReactNode
}

interface NewCusProps{
    name:string,
    placeholder:string,
    handler:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    photo?:string,
    
}


interface TransactionTableProps {
    id:string,
    accountNo:string,
    amount:number,
    flash:string,
    type:string,
    date:string
}

interface DatePickerTableProps{
    senderNo:string,
    receiverNo:string,
    amount:number,
    date:string
}

interface CustomerAccountsColumnProps{
    name:string,
    nrc:string,
    phone:string,
    accountNo:string,
    amount:number,
    accountType:string,
    createdDate:string,
    status:ReactNode
}
