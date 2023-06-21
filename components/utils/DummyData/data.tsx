import {
    AccountTableData,
    DashboardCustomer,
    DataForTable,
    DatePickerTableProps,
    MobileNavLists,
    NavLink,
    NewCusProps,
    TableData,
    TransactionTableProps,
    UserCardListInfo,
  } from "@/Types";
  import {
    IconBellRinging,
    IconMessage,
    IconChevronRight,
    IconGauge,IconUser,IconUsersGroup,IconReportAnalytics
  } from "@tabler/icons-react";
  
  export const NavbarLinks: Array<NavLink> = [
    {
      label: "Main Menu",
      links: [
        {
          link: "Dashboard",
          subLinks: [],
        },
        {
          link: "Dashboard",
          subLinks: [],
        },
        {
          link: "Dashboard",
          subLinks: [],
        },
        {
          link: "Dashboard",
          subLinks: [],
        },
        {
          link: "Dashboard",
          subLinks: [],
        },
      ],
    },
    {
      label: "Others",
      links: [
        {
          link: "Contacts",
          subLinks: [],
        },
        {
          link: "Messages",
          subLinks: [],
        },
        {
          link: "Settings",
          subLinks: [],
        },
      ],
    },
  ];
  
  export const AdminCards: Array<UserCardListInfo> = [
    {
      total: 9,
      name: "Created Customers",
      bgColor: "bg-blue-700",
    },
    {
      total: 3,
      name: "Total Account",
      bgColor: "bg-[#FE9520]",
    },
    {
      total: 10252000,
      name: "Total Deposit Amounts",
      bgColor: "bg-[#BE1FE5]",
    },
    {
      total: 3758000,
      name: "Total Transaction Amounts",
      bgColor: "bg-[#20C394]",
    },
  ];
  
  export const CustomerTableData:Array<DashboardCustomer> = [
    {
      id: "CUS000001",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant Zin Win",
      nrc: "5/MaMaNa(N)12345",
      date: "12/12/2021",
      account: 2,
      status:"Active"
    },
  ]
  
  export const tableData: Array<TableData> = [
    {
      id: "CUS000001",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant Zin Win",
      nrc: "5/MaMaNa(N)12345",
      email: "test1@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
    },
    {
      id: "2",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant",
      nrc: "5/MaMaNa(N)12345",
      email: "test2@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
    },
    {
      id: "3",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant",
      nrc: "5/MaMaNa(N)12345",
      email: "test3@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
    },
    {
      id: "4",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant",
      nrc: "5/MaMaNa(N)12345",
      email: "test4@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
    },
    {
      id: "5",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant",
      nrc: "5/MaMaNa(N)12345",
      email: "test5@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
    },
    {
      id: "6",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant",
      nrc: "5/MaMaNa(N)12345",
      email: "test6@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
    },
    {
      id: "7",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant",
      nrc: "5/MaMaNa(N)12345",
      email: "test7@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
    },
    {
      id: "8",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant",
      nrc: "5/MaMaNa(N)12345",
      email: "test8@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
    },
  ];
  
  export const customerLists: Array<DataForTable> = [
    {
      id: "CUS000001",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant Zin Win",
      nrc: "5/MaMaNa(N)12345",
      email: "test1@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
      Address: "Yangon",
      phone: "0987654321111",
      status: "Online",
      gender:"Male"
    },
    {
      id: "CUS000002",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant Zin Win",
      nrc: "5/MaMaNa(N)12345",
      email: "test1@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
      Address: "Yangon",
      phone: "0987654321111",
      status: "Online",
      gender:"Male"
    },
    {
      id: "CUS000003",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant Zin Win",
      nrc: "5/MaMaNa(N)12345",
      email: "test1@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
      Address: "Yangon",
      phone: "0987654321111",
      status: "Offline",
      gender:"Male"
    },
    {
      id: "CUS000004",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant Zin Win",
      nrc: "5/MaMaNa(N)12345",
      email: "test1@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
      Address: "Yangon",
      phone: "0987654321111",
      status: "Online",
      gender:"Male"
    },
    {
      id: "CUS000004",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant Zin Win",
      nrc: "5/MaMaNa(N)12345",
      email: "test1@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
      Address: "Yangon",
      phone: "0987654321111",
      status: "Online",
      gender:"Male"
    },
    {
      id: "CUS000004",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant Zin Win",
      nrc: "5/MaMaNa(N)12345",
      email: "test1@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
      Address: "Yangon",
      phone: "0987654321111",
      status: "Online",
      gender:"Male"
    },
    {
      id: "CUS000004",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant Zin Win",
      nrc: "5/MaMaNa(N)12345",
      email: "test1@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
      Address: "Yangon",
      phone: "0987654321111",
      status: "Online",
      gender:"Male"
    },
    {
      id: "CUS000004",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant Zin Win",
      nrc: "5/MaMaNa(N)12345",
      email: "test1@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
      Address: "Yangon",
      phone: "0987654321111",
      status: "Online",
      gender:"Male"
    },
    {
      id: "CUS000004",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant Zin Win",
      nrc: "5/MaMaNa(N)12345",
      email: "test1@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
      Address: "Yangon",
      phone: "0987654321111",
      status: "Online",
      gender:"Male"
    },
    {
      id: "CUS000004",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant Zin Win",
      nrc: "5/MaMaNa(N)12345",
      email: "test1@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
      Address: "Yangon",
      phone: "0987654321111",
      status: "Online",
      gender:"Male"
    },
    {
      id: "CUS000004",
      profile:
        "https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Thant Zin Win",
      nrc: "5/MaMaNa(N)12345",
      email: "test1@gmail.com",
      createdDate: "12/12/2021",
      totalAccount: 2,
      Address: "Yangon",
      phone: "0987654321111",
      status: "Online",
      gender:"Male"
    },
  ];
  
  export const accountTableData: Array<AccountTableData> = [
    {
      id: "ACCC00004",
      type: "Saving",
      amount: 205.221,
    },
    {
      id: "ACCC00004",
      type: "Saving",
      amount: 205.221,
    },
    {
      id: "ACCC00004",
      type: "Saving",
      amount: 205.221,
    },
    {
      id: "ACCC00004",
      type: "Saving",
      amount: 205.221,
    },
    {
      id: "ACCC00004",
      type: "Saving",
      amount: 205.221,
    },
  ];
  
  
  
  export const mobileLists: Array<MobileNavLists> = [
    {
      id: "1",
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      id: "2",
      name: "Customer Accounts",
      path: "/",
      icon: <IconChevronRight size="1rem" stroke={1.5} />,
      nested: [
        {
          id: "cus1",
          name: "Customer List",
          path: "/customer",
        },
        {
          id: "cus2",
          name: "Create Customer",
          path: "/createCustomer",
        },
      ],
    },
    {
      id: "3",
      name: "Customer Accounts",
      path: "/transaction",
      icon: <IconChevronRight size="1rem" stroke={1.5} />,
      nested: [
        {
          id: "acc1",
          name: "Account List",
          path: "/account-list",
        },
      ],
    },
    {
      id: "4",
      name: "Transaction Reports",
      path: "/transaction-reports",
      icon: <IconChevronRight size="1rem" stroke={1.5} />,
      nested: [
        {
          id: "tran1",
          name: "All Reports",
          path: "/account-list",
        },
        {
          id: "tran2",
          name: "Transfer Report",
          path: "/account-list",
        },
        {
          id: "tran3",
          name: "Customer Inqury",
          path: "/account-list",
        },
      ],
    },
    // {
    // 	id:"5",
    // 	name:"Notification",
    // 	path:"/noti",
    // 	icon:<IconBellRinging size="1rem" stroke={1.5}/>
    // },
    // {
    // 	id:"6",
    // 	name:"Message",
    // 	path:"/message",
    // 	icon:<IconMessage size="1rem" stroke={1.5}/>
    // },
  ];
  
  export const newCusData: Array<NewCusProps> = [
    {
      name: "Full Name",
      placeholder: "please enter  full name",
      handler: () => {},
      
    },
    {
      name: "NRC",
      placeholder: "Enter NRC number",
      handler: () => {},
      
    },
    {
      name: "Phone Number",
      placeholder: "Enter phone Number",
      handler: () => {},
      
    },
    {
      name: "Email",
      placeholder: "Enter email address",
      handler: () => {},
      
    },
    {
      name: "City",
      placeholder: "Enter customer city",
      handler: () => {},
      
    },
    {
      name: "Township",
      placeholder: "Enter name of Township",
      handler: () => {},
      
    },
    {
      name: "Address",
      placeholder: "Enter full address",
      handler: () => {},
      
    },
    {
      name: "Job Title",
      placeholder: "Enter job title",
      handler: () => {},
      
    },
    
  ];
  
  export const accountList:Array<TableData> = [
      {
          name:"Thant Zin Win",
          nrc:"5/MaMaNa(N)12345",
          phone:"09985099050",
          accountNo:"ACCC00004",
          amount:4245000.00,
          accountType:"Saving",
          accountStatus:"Deposite",
          createdDate:"12/12/2021",
      },
      {
          name:"Thant Zin Win",
          nrc:"5/MaMaNa(N)12345",
          phone:"09985099050",
          accountNo:"ACCC00004",
          amount:4245000.00,
          accountType:"Saving",
          accountStatus:"Deposite",
          createdDate:"12/12/2021",
      },
      {
          name:"Thant Zin Win",
          nrc:"5/MaMaNa(N)12345",
          phone:"09985099050",
          accountNo:"ACCC00005",
          amount:4245000.00,
          accountType:"Saving",
          accountStatus:"Deposite",
          createdDate:"12/12/2021",
      },
      {
          name:"Thant Zin Win",
          nrc:"5/MaMaNa(N)12345",
          phone:"09985099050",
          accountNo:"ACCC00006",
          amount:4245000.00,
          accountType:"Saving",
          accountStatus:"Deposite",
          createdDate:"12/12/2021",
      },
      {
          name:"Thant Zin Win",
          nrc:"5/MaMaNa(N)12345",
          phone:"09985099050",
          accountNo:"ACCC00004",
          amount:4245000.00,
          accountType:"Saving",
          accountStatus:"Deposite",
          createdDate:"12/12/2021",
      },
  ];
  
  
  export const transactionReportTableHeadData:Array<string> = ["Transaction ID","Account No", "Transaction Amount","Flash","Transaction Type","Transaction Date",""];
  export const datePickerHeadData : Array<string> = ["No","Sender Account No","Receiver Account No","Transaction Amount","Transaction Date",""]
  
  export const transactionReportTableRowsData : Array<TransactionTableProps> =[
    {
      id:"12087E",
      accountNo:"ACC00004",
      amount:250000.0,
      flash:"Dr",
      type:"transfer",
      date:"21/5/2023 5:08:42 PM"
    },
    {
      id:"12087E",
      accountNo:"ACC00004",
      amount:250000.0,
      flash:"Dr",
      type:"transfer",
      date:"21/5/2023 5:08:42 PM"
    },
    {
      id:"12087E",
      accountNo:"ACC00004",
      amount:250000.0,
      flash:"Dr",
      type:"transfer",
      date:"21/5/2023 5:08:42 PM"
    },
    {
      id:"12087E",
      accountNo:"ACC00004",
      amount:250000.0,
      flash:"Dr",
      type:"transfer",
      date:"21/5/2023 5:08:42 PM"
    },
    {
      id:"12087E",
      accountNo:"ACC00004",
      amount:250000.0,
      flash:"Dr",
      type:"transfer",
      date:"21/5/2023 5:08:42 PM"
    },
    {
      id:"12087E",
      accountNo:"ACC00004",
      amount:250000.0,
      flash:"Dr",
      type:"transfer",
      date:"21/5/2023 5:08:42 PM"
    },
    {
      id:"12087E",
      accountNo:"ACC00004",
      amount:250000.0,
      flash:"Dr",
      type:"transfer",
      date:"21/5/2023 5:08:42 PM"
    },
    {
      id:"12087E",
      accountNo:"ACC00004",
      amount:250000.0,
      flash:"Dr",
      type:"transfer",
      date:"21/5/2023 5:08:42 PM"
    },
    {
      id:"12087E",
      accountNo:"ACC00004",
      amount:250000.0,
      flash:"Dr",
      type:"transfer",
      date:"21/5/2023 5:08:42 PM"
    },
    {
      id:"12087E",
      accountNo:"ACC00004",
      amount:250000.0,
      flash:"Dr",
      type:"transfer",
      date:"21/5/2023 5:08:42 PM"
    },
  ]
  
  export const datePickerTableRowsData :Array<DatePickerTableProps> = [
    {
      senderNo:"MN0004",
      receiverNo:"MN0005",
      amount:400000,
      date:"21/5/2023"
    }
  ]
  
  export const SibebarLists:Array<MobileNavLists>=[
    {
      id: "1",
      name: "Dashboard",
      leftIcon:<IconGauge size={"1rem"} stroke={1.5}/>,
      path: "/",
    },
    {
      id: "2",
      name: "Customer",
      path: "",
      leftIcon:<IconUser size={"1rem"} stroke={1.5}/>,
      icon: <IconChevronRight size="1rem" stroke={1.5} />,
      nested: [
        {
          id: "cus1",
          name: "Customer List",
          path: "/customer",
        },
        {
          id: "cus2",
          name: "Create Customer",
          path: "/customer/create",
        },
      ],
    },
    {
      id: "3",
      name: "Customer Accounts",
      path: "",
      leftIcon:<IconUsersGroup size={"1rem"} stroke={1.5}/>,
      icon: <IconChevronRight size="1rem" stroke={1.5} />,
      nested: [
        {
          id: "acc1",
          name: "Account List",
          path: "/accounts",
        },
      ],
    },
    {
      id: "4",
      name: "Transaction Reports",
      path: "",
      leftIcon:<IconReportAnalytics size={"1rem"} stroke={1.5}/>,
      icon: <IconChevronRight size="1rem" stroke={1.5} />,
      nested: [
        {
          id: "tran1",
          name: "All Reports",
          path: "/transaction",
        },
        {
          id: "tran2",
          name: "Transfer Report",
          path: "/transaction/transaction-report",
        },
        {
          id: "tran3",
          name: "Customer Inqury",
          path: "/transaction/customer-inqury",
        }
      ],
    },
  ]