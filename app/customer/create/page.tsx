"use client"

import React from "react";
import Button from "@/components/ButtonComponents/customer.list.button";
import CustomerFillField from "@/components/CustomerListsComponents/customer.field";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import { Select, Breadcrumbs, Anchor ,Text } from "@mantine/core";
import Link from "next/link";

const links = [
  {
    title: "Customer Lists",
    href: "/customer",
  },
  {
    title: "Create",
    href: "/customer/create",
  },
].map((link, i) => (
  <Link href={link.href} key={i} className="hover:text-blue-700 hover:underline font-semibold text-gray-800 text-2xl mt-3">
    {link.title}
  </Link>
));

const CreateCustomerPage = () => {

  const cutomerForm = useForm({
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
    },
  });

  return (
    <section className="pl-8 pr-8 pt-8">
      <Breadcrumbs className="flex items-center" separator={<Text className="text-2xl mt-3">/</Text>}>{links}</Breadcrumbs>
      <form
        className="p-8 w-[80%] mx-auto bg-white rounded-lg mt-14 shadow-lg"
        onSubmit={() => {}}
      >
        <div className="grid grid-cols-2 gap-x-14 gap-y-8">
          <CustomerFillField
            label="Full Name"
            placeholder="Enter Customer Full Name"
            form={cutomerForm.getInputProps("fullName")}
          />
          <CustomerFillField label="NRC" placeholder="Enter Customer NRC"  form={cutomerForm.getInputProps("nrc")}/>
          <CustomerFillField
            label="Phone Number"
            placeholder="Enter Customer Phone Number"
            form={cutomerForm.getInputProps("phoneNo")}
          />
          <CustomerFillField label="Email" placeholder="Enter Customer Email" form={cutomerForm.getInputProps("email")} />
          <CustomerFillField label="City" placeholder="Enter Customer City"  form={cutomerForm.getInputProps("city")}/>
          <CustomerFillField
            label="Township"
            placeholder="Enter Customer Township"
            form={cutomerForm.getInputProps("township")}
          />
          <CustomerFillField
            label="Address"
            placeholder="Enter Customer Address"
            form={cutomerForm.getInputProps("address")}
          />
          <CustomerFillField
            label="Job Title"
            placeholder="Enter Customer Job Title"
            form={cutomerForm.getInputProps("jobTitle")}
          />
           <DateInput
            label={<span className="font-medium">Date of Birth</span>}
            placeholder="Enter your date of birth"
            radius={"md"}
            size="md"
            required
            valueFormat="DD/MM/YYYY"
            {...cutomerForm.getInputProps("dob")}
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
