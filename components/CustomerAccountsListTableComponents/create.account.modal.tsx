import React from "react";
import {
  Modal,
  Text,
  useMantineTheme,
  Select,
  TextInput,
  Group,
} from "@mantine/core";
import Button from "../ButtonComponents/customer.list.button";

const CreateBankAccountModal: React.FC<ModalProps> = ({ open, close }) => {
  const theme = useMantineTheme();

  return (
    <Modal
      opened={open}
      onClose={close}
      title={
        <Text className="font-semibold text-lg tracking-wide text-blue-800">
          Create Bank Account
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
        <Select
          data={["Saving Account", "Deposite Account"]}
          placeholder="Select Account Type"
          label="Select Account"
        />
        <TextInput label="Name" placeholder="Name" />
        <TextInput label="Name" placeholder="Name" />
      </div>
      <Group position="right" className="mt-6">
        <Button
          text="Create Account"
          bg="bg-blue-700"
          textColor="text-white"
          padding="px-8 py-3 rounded-md"
        />
      </Group>
    </Modal>
  );
};

export default CreateBankAccountModal;

type ModalProps = {
  open: boolean;
  close: () => void;
};
