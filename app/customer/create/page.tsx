"use client";

import React from "react";
import Button from "@/components/ButtonComponents/customer.list.button";
import CustomerFillField from "@/components/CustomerListsComponents/customer.field";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import { Select, Breadcrumbs, Anchor, Text } from "@mantine/core";
import Link from "next/link";

// const links = [
//   {
//     title: "Customer Lists",
//     href: "/customer",
//   },
//   {
//     title: "Create",
//     href: "/customer/create",
//   },
// ].map((link, i) => (
//   <Link href={link.href} key={i} className="hover:text-blue-700 hover:underline font-semibold text-gray-800 text-2xl mt-3">
//     {link.title}
//   </Link>
// ));

const links = [
  {
    title: "Customer Lists",
  },
  {
    title: "Create Customer Account",
  },
].map((link, i) => (
  <Text
    key={i}
    className="text-gray-800 text-xs sm:text-sm xl:text-2xl mt-3 font-semibold hover:underline"
  >
    {link.title}
  </Text>
));

const CreateCustomerPage = () => {
  const customerForm = useForm({
    initialValues: {
      fullName: "",
      nrc: "",
      phoneNo: "",
      email: "",
      city: "",
      township: "",
      address: "",
      // dob: Date.toString(),
      jobTitle: "",
      gender: "",
    },
    validate: {
      fullName: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      nrc: (value) =>
        value.length < 12 ? "NRC must have at least 13 digits" : null,
      phoneNo: (value) =>
        value.length < 10 ? "Phone number must have at least 10 digits" : null,
      email: (value) =>
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)
          ? null
          : "please provide a valid email",
      city: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      township: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      address: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      // dob:(value)=>
      // value.
      jobTitle: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      gender: (value) =>
        value === "" ? "Please select the gender Type" : null,
    },
  });

  const formSubmitHandler = (data: any) => {
    console.log("customer Data", data);
  };

  return (
    <section className="pl-8 pr-8 pt-8">
      <Breadcrumbs
        className="flex items-center"
        separator={<Text className="text-2xl mt-3">/</Text>}
      >
        {links}
      </Breadcrumbs>
      <form
        className="p-8 w-full lg:w-[80%] mx-auto bg-white rounded-lg mt-14 shadow-lg"
        onSubmit={customerForm.onSubmit(formSubmitHandler)}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-8">
          <CustomerFillField
            label="Full Name"
            placeholder="Enter Customer Full Name"
            form={customerForm.getInputProps("fullName")}
          />
          <CustomerFillField
            label="NRC"
            placeholder="Enter Customer NRC"
            form={customerForm.getInputProps("nrc")}
          />
          <CustomerFillField
            label="Phone Number"
            placeholder="Enter Customer Phone Number"
            form={customerForm.getInputProps("phoneNo")}
          />
          <CustomerFillField
            label="Email"
            placeholder="Enter Customer Email"
            form={customerForm.getInputProps("email")}
          />
          <CustomerFillField
            label="City"
            placeholder="Enter Customer City"
            form={customerForm.getInputProps("city")}
          />
          <CustomerFillField
            label="Township"
            placeholder="Enter Customer Township"
            form={customerForm.getInputProps("township")}
          />
          <CustomerFillField
            label="Address"
            placeholder="Enter Customer Address"
            form={customerForm.getInputProps("address")}
          />
          <CustomerFillField
            label="Job Title"
            placeholder="Enter Customer Job Title"
            form={customerForm.getInputProps("jobTitle")}
          />
          <DateInput
            label={
              <span className="font-medium text-xs 2xl:text-sm">
                Date of Birth
              </span>
            }
            placeholder="Enter your date of birth"
            radius={"md"}
            size="md"
            valueFormat="DD/MM/YYYY"
            {...customerForm.getInputProps("dob")}
          />
          <Select
            label={
              <span className="font-semibold text-xs 2xl:text-sm">Gender</span>
            }
            size="md"
            radius={"md"}
            data={["Male", "Female", "Others"]}
            placeholder="Select your gender"
            defaultValue={""}
            {...customerForm.getInputProps("gender")}
          />
        </div>
        <div className="flex  sm:ml-auto flex-col space-y-3 sm:space-y-0 sm:flex-row justify-between w-full sm:w-[300px] sm:pl-12 xl:pl-6 mt-10">
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
