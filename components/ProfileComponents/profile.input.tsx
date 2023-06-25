import React from "react";
import { Text, TextInput } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const ProfileInput: React.FC<LabelProps> = ({
  label,
  prop,
  form,
  placeholder,
}) => {
  const xsScreen = useMediaQuery("(min-width:36em)");
  const smScreen = useMediaQuery("(min-width:40em)");
  const mdScreen = useMediaQuery("(min-width:48em)");
  const lgScreen = useMediaQuery("(min-width:64em)");
  const xlScreen = useMediaQuery("(min-width:75em)");
  const xl2Screen = useMediaQuery("(min-width:88em)");

  return (
    <TextInput
      label={
        <Text
          color="dimmed"
          className="font-semibold sm:text-[0.6rem] md:text-[0.7rem] xl:text-[0.8rem] tracking-wide"
        >
          {label}
        </Text>
      }
      placeholder={placeholder}
      {...form}
      radius={"sm"}
      variant="filled"
      size={lgScreen ? "sm" : mdScreen ? "xs" : smScreen ? "xs" : "xs"}
    />
  );
};

export default ProfileInput;

interface LabelProps {
  label: string;
  prop: string;
  form: any;
  placeholder: string;
}
