"use client";
import React from "react";
import { mobileLists } from "../utils/DummyData/data";
import Link from "next/link";
import { IconBellRinging, IconMessage, IconLogout } from "@tabler/icons-react";
import {
  Burger,
  Drawer,
  Group,
  Indicator,
  MediaQuery,
  NavLink,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Searchbar from "./Searchbar";
import Noti from "./Noti";

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  return (
    <section className="flex p-3 justify-between items-center sticky backdrop-blur-lg top-0 z-30">
      <h2 className="sm:text-3xl font-bold">Dashboard</h2>
      <Searchbar />
      <Noti />
      <MediaQuery largerThan={"xs"} styles={{ display: "none" }}>
        <Burger opened={opened} onClick={toggle} aria-label={label} />
      </MediaQuery>

      {/** Mobile NavLists */}
      <Drawer
        opened={opened}
        onClose={toggle}
        title={<Text className="font-semibold uppercase">Pages</Text>}
        size={"xs"}
        overlayProps={{ opacity: 0.5, blur: 4 }}
        styles={{
          body: {
            padding: 0,
          },
        }}
      >
        <div className="flex flex-col justify-between h-[90vh]">
          <div>
            {mobileLists.map((list) => (
              <>
                <NavLink
                  key={list.id}
                  label={list.name}
                  rightSection={list.icon}
                  className="pl-5 pr-10 font-semibold active:bg-black"
                >
                  {list.nested !== undefined &&
                    list.nested.map((nestLink) => (
                      <div
                        key={nestLink.id}
                        className="border-l-[1px] border-gray-300 "
                      >
                        <Link href={nestLink.path}>
                          <NavLink
                            label={nestLink.name}
                            className="font-semibold text-gray-600"
                          />
                        </Link>
                      </div>
                    ))}
                </NavLink>
                {/** */}
              </>
            ))}

            <div className="flex items-center pr-8 hover:bg-slate-50">
              <NavLink
                label="Notification"
                rightSection={<IconBellRinging size={"1.2rem"} />}
                className="px-5 font-semibold"
              />
              <p className="bg-[#228BE6] rounded-full px-2 pt-[0.28rem] pb-[0.2rem] text-white text-[0.56rem]">
                2
              </p>
            </div>
            <div className="flex items-center justify-center pr-8  hover:bg-slate-50">
              <NavLink
                label="Message"
                rightSection={<IconMessage size={"1.2rem"} />}
                className="px-5 font-semibold"
              />
              <p className="box-border bg-[#228BE6] rounded-full px-2 pt-[0.28rem] pb-[0.2rem] text-white text-[0.56rem]">
                24
              </p>
            </div>
          </div>
          <div className="">
            <NavLink
              label={<Text className="text-lg">Log Out</Text>}
              rightSection={<IconLogout size={"1.5rem"} />}
              className="pl-5 pr-9 font-semibold"
            />
          </div>
        </div>
      </Drawer>
    </section>
  );
};

export default Header;
