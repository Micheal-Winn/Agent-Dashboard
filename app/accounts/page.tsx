"use client"
import React, { useState } from "react";
import CreateBankAccountModal from "@/components/CustomerAccountsListTableComponents/create.account.modal";
import Button from "@/components/ButtonComponents/customer.list.button";
import { IconPlus } from "@tabler/icons-react";
import { CustomerDataTable } from "@/components/TableComponents/DashboardTables/CustomerTable/data.table";
import { accountListsColumn } from "@/components/TableComponents/DashboardTables/CustomerAccountListsTable/column";
import { accountList } from "@/components/utils/DummyData/data";

const CustomerAccountPage = () => {
  const [openCreateAccountModal, setOpenCreateAccountModal] = useState(false);
  const openAccountModalHandler = () =>
    setOpenCreateAccountModal(!openCreateAccountModal);
  const closeAccountModalHandler = () =>
    setOpenCreateAccountModal(!openCreateAccountModal);

  return (
    <section className="">
      <CreateBankAccountModal
        open={openCreateAccountModal}
        close={closeAccountModalHandler}
      />
      <section className="mt-4 pl-4 overflow-hidden">
        <div className="flex justify-between items-center w-full pl-2">
          <h2 className="text-2xl font-semibold my-3 text-gray-800">
            Account Lists
          </h2>
          <div className="pr-12">
            <Button
              handler={openAccountModalHandler}
              bg="bg-blue-700"
              textColor="text-white"
              text="Create Account"
              padding="px-5 py-2 rounded-md"
              icon={<IconPlus size={16} />}
            />
          </div>
        </div>
       <div className="!overflow-hidden">
       <CustomerDataTable data={accountList} columns={accountListsColumn} />
       </div>
      </section>
    </section>
  );
};

export default CustomerAccountPage;
