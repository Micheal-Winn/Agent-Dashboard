"use client"
import React from 'react'
import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";

const TransactionDateRangePicker = () => {
    const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <DatePickerInput
    icon={<IconCalendar size="1.1rem" stroke={1.5} />}
    radius="md"
      type="range"
      placeholder="Select Dates"
      value={value}
      onChange={setValue}
      mx="auto"
      maw={400}
      clearable
      dropdownType="modal"
    />
  );
}

export default TransactionDateRangePicker