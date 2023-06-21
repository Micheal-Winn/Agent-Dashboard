import { Indicator, Avatar, Group, ActionIcon, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { IconBellRinging, IconMessage } from "@tabler/icons-react";

export default function Noti() {
  const xlScreen = useMediaQuery("(min-width:75em)");
  const xl2Screen = useMediaQuery("(min-width:88em)");
  return (
    <Group position="apart" className="mr-10 lg:gap-6 xl:gap-10 hidden sm:flex">
      <Indicator
        label={<Text className="text-[0.6rem] xl:text-base">4</Text>}
        size={xlScreen ? 16 : 14}
      >
        <ActionIcon variant="subtle">
          <IconBellRinging size={xlScreen ? "2rem" : "1.2rem"} />
        </ActionIcon>
      </Indicator>
      <Indicator
        label={<Text className="text-[0.6rem] xl:text-base">4</Text>}
        size={xlScreen ? 16 : 14}
      >
        <ActionIcon variant="subtle">
          <IconMessage size={xlScreen ? "2rem" : "1.2rem"} />
        </ActionIcon>
      </Indicator>
    </Group>
  );
}
