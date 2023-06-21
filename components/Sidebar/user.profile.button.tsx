import { Avatar, Box, Button, Group, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

interface status{
  setActiveStatus:(str:string)=> void
}

const UserProfileButton:React.FC<status> = ({setActiveStatus}) => {
  const largeScreen = useMediaQuery('(min-width:62em)')
  const smallScreen = useMediaQuery('(max-width:48em)')

  return (
    <Link href={"/profile"} onClick={()=>setActiveStatus("profile")}>
      <Group position="apart" className="hover:bg-gray-100 py-1 xl:px-1 rounded-md">
        <Box className="flex items-center gap-1">
          <Avatar
            alt="profile"
            radius={"xl"}
            src={
              "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <div>
            <Text  className="text-[0.6rem] xl:text-xs 2xl:text-sm" weight={500}>
              Thant Zin Win
            </Text>

            <Text color="dimmed"  className="text-[0.55rem] xl:text-[0.65rem]">
              thantzinwin@gamil.com
            </Text>
          </div>
        </Box>
        {}
        <IconChevronRight size={largeScreen ? "1rem" : smallScreen ? "0.8rem" : "0.6rem"} stroke={1.5}/>
      </Group>
    </Link>
  );
};

export default UserProfileButton;