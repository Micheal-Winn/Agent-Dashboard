import React from "react";
import { FileInput, Modal } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";

const ProfileUploadModal: React.FC<ModalProps> = ({
  open,
  close,
  title,
  placeholder,
  handler,
  form,
  imageUrl,
  alt,
  prop
}) => {
  return (
    <Modal opened={open} onClose={close} title={title} centered size={"xs"}>
      <FileInput
        placeholder={placeholder}
        onChange={handler}
        accept="image/*"
        icon={<IconUpload size={"0.8rem"} />}
      />
    </Modal>
  );
};

export default ProfileUploadModal;

type ModalProps = {
  open: boolean;
  close: () => void;
  title?: string;
  placeholder: string;
  handler: (data: File) => void;
  imageUrl?: string;
  alt?: string;
  form?: any;
  prop?:string
};
