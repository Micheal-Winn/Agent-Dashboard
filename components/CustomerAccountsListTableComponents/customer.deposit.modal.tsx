import React, { useState } from "react";
import {
  Group,
  Modal,
  Select,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import Button from "../ButtonComponents/customer.list.button";

const CustomerDepositModal: React.FC<StatusProps> = ({
  buttonText,
  accountNo,
}) => {
  const theme = useMantineTheme();
  const [open, setOpen] = useState(false);
  const openModalHandler = () => setOpen(!open);
  const closeModalHandler = () => setOpen(!open);

  return (
    <>
      <Modal
        opened={open}
        onClose={closeModalHandler}
        title={
          <Text className="font-semibold text-lg tracking-wide text-blue-800">
            Deposite Form
          </Text>
        }
        size="xl"
        padding="xl"
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        classNames={{
          overlay: "bg-[#00000080]",
        }}
        centered
        radius={"md"}
      >
        <div className="grid grid-cols-2 gap-x-8 gap-y-5">
          <TextInput label="Account No" value={accountNo} disabled />
          <TextInput label="Account Type" placeholder="Saving" />
          <TextInput label="Amount" placeholder="0.00" />
        </div>
        <Group position="right" className="mt-6">
          <Button
            text="Deposite"
            bg="bg-blue-700"
            textColor="text-white"
            padding="px-8 py-3 rounded-md"
          />
        </Group>
      </Modal>
      <button
        className="bg-blue-700 text-white rounded-2xl text-xs px-4 py-2 hover:bg-blue-600"
        onClick={openModalHandler}
      >
        {buttonText}
      </button>
    </>
  );
};

export default CustomerDepositModal;
type StatusProps = {
  accountNo: string | undefined;
  buttonText: string;
};
