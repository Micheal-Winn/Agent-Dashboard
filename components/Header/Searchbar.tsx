import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
  Input,
} from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
export default function Searchbar(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <div className="w-[45%] sm:w-[30%]">
      <Input
        icon={<IconSearch size={16} stroke={1.5} />}
        radius="xl"
        placeholder="Search here"
      />
    </div>
  );
}
