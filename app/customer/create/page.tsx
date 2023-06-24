"use client"

import React from "react";
import Button from "@/components/ButtonComponents/customer.list.button";
import CustomerFillField from "@/components/CustomerListsComponents/customer.field";
import { Select } from "@mantine/core";

const CreateCustomerPage = () => {
  return (
    <section>
      <form
        className="p-8 w-[80%] mx-auto bg-white rounded-lg mt-14 shadow-lg"
        onSubmit={() => {}}
      >
        <div className="grid grid-cols-2 gap-x-14 gap-y-8">
          <CustomerFillField
            label="Full Name"
            placeholder="Enter Customer Full Name"
          />
          <CustomerFillField label="NRC" placeholder="Enter Customer NRC" />
          <CustomerFillField
            label="Phone Number"
            placeholder="Enter Customer Phone Number"
          />
          <CustomerFillField label="Email" placeholder="Enter Customer Email" />
          <CustomerFillField label="City" placeholder="Enter Customer City" />
          <CustomerFillField
            label="Township"
            placeholder="Enter Customer Township"
          />
          <CustomerFillField
            label="Address"
            placeholder="Enter Customer Address"
          />
          <CustomerFillField
            label="Job Title"
            placeholder="Enter Customer Job Title"
          />
          <Select
            label={<span className="font-semibold">Gender</span>}
            size="md"
            radius={"md"}
            data={["Male", "Female", "Others"]}
            placeholder="Select your gender"
            required
          />
        </div>
        <div className="flex ml-auto justify-between w-[300px] px-6 mt-10">
          <Button
            text="Cancel"
            bg="bg-white"
            textColor="text-blue-700"
            border="border-[1px] border-blue-700"
            padding="px-8 py-2 rounded-md"
          />
          <Button
            type="submit"
            text="Create"
            bg="bg-blue-700"
            textColor="text-white"
            padding="px-8 py-2 rounded-md"
          />
        </div>
      </form>
    </section>
  );
};

export default CreateCustomerPage;
