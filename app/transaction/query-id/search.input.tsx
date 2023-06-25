"use client";
import React from "react";
import Button from "@/components/ButtonComponents/customer.list.button";
import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const InputSearchId = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-[250px]">
        <Input
          icon={<IconSearch size={16} stroke={1.5} />}
          radius={"xl"}
          placeholder="Enter CustomerId"
        />
      </div>
      <Button
        text="Search"
        bg="bg-blue-700"
        textColor="text-white"
        padding="px-5 py-2 rounded-2xl"
      />
    </div>
  );
};

export default InputSearchId;
