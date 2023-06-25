"use client"
import React, { useState } from "react";
import { Box, Divider, Group, Text, TextInput, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconLogout } from "@tabler/icons-react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import ProfileInput from "@/components/ProfileComponents/profile.input";
import ProfilePhoto from "@/components/ProfileComponents/profile.photo";
import ProfileUploadModal from "@/components/ProfileComponents/profile.upload.modal";

const ProfilePage = () => {
  const xlScreen = useMediaQuery("(min-width:75em)");

  const [base64ProfileUrl, setBase64ProfileUrl] = useState<string>("");
  const [base64BackgroundUrl, setBase64BackgroundUrl] = useState<string>("");

  const [profileModal, { open: profileOpen, close: profileClose }] =
    useDisclosure(false);
  const [backgroundModal, { open: openBackground, close: closeBackground }] =
    useDisclosure(false);

  const ProfileForm = useForm({
    initialValues: {
      name: "",
      email: "",
      phoneNo: "",
      department: "",
      position: "",
      role: "",
      managerName: "",
      managerPhone: "",
      address: "",
      city: "",
      township: "",
      profileUrl: "",
      backgroundUrl: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) =>
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)
          ? null
          : "please provide a valid email",
      phoneNo: (value) =>
        value.length < 10 ? "Phone number must have at least 10 digits" : null,
      department: (value) =>
        value.length < 2 ? "Department must have at least 2 letters" : null,
      position: (value) =>
        value.length < 2 ? "Position must have at least 2 letters" : null,
      role: (value) =>
        value.length < 2 ? "Role must have at least 2 letters" : null,
      managerName: (value) =>
        value.length < 2 ? "Manager Name must have at least 2 letters" : null,
      managerPhone: (value) =>
        value.length < 10 ? "Manager Phone must have at least 10 digits" : null,
      address: (value) =>
        value.length < 2 ? "Address must have at least 2 letters" : null,
      city: (value) =>
        value.length < 2 ? "City must have at least 2 letters" : null,
      township: (value) =>
        value.length < 2 ? "Township must have at least 2 letters" : null,
    },
  });

  const profileHandler = (data: File) => {
    if (data) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64ProfileUrl(reader.result as string);
      };
      reader.readAsDataURL(data);
      profileClose();
    }
  };

  const backgroundHandler = (data: File) => {
    if (data) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64BackgroundUrl(reader.result as string);
      };
      reader.readAsDataURL(data);
      closeBackground();
    }
  };

  const formSubmitHandler = (data: any) => {
    const profileData = {
      ...data,
      profileUrl: base64ProfileUrl,
      backgroundUrl: base64BackgroundUrl,
    };
    console.log("profileData", profileData);
  };
  return (
    <main className="bg-slate-50 h-screen">
      <form
        onSubmit={ProfileForm.onSubmit(formSubmitHandler)}
        className="pt-6 pl-4 xl:pl-3 pr-2 sm:pr-5 pb-5 mb-4  xl:pb-10 mt-4 xl:mr-10 2xl:mr-20 shadow-slate-300 shadow-lg mx-3 bg-white rounded-lg"
      >
        <Text className="font-semibold sm:text-base md:text-lg xl:text-2xl">
          Profile Information
        </Text>
        <Box className="flex gap-4 flex-col lg:flex-row">
          <Box className="w-full lg:w-[70%]">
            <Divider size={"xs"} className="my-3" />
            <section className=" xl:ml-8">
              <Box className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-4">
                <ProfileInput
                  form={ProfileForm.getInputProps("name")}
                  label="FullName"
                  prop="name"
                  placeholder="Enter your Full Name"
                />
                <ProfileInput
                  form={ProfileForm.getInputProps("email")}
                  label="Email"
                  prop="email"
                  placeholder="Enter your Email Address"
                />
                <ProfileInput
                  form={ProfileForm.getInputProps("phoneNo")}
                  label="Phone Number"
                  prop="phoneNo"
                  placeholder="Enter your Phone Number"
                />
              </Box>
              <Text className="my-4 text-black font-semibold tracking-wide text-xs xl:text-base">
                Personal Work
              </Text>
              <Box className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-4">
                <ProfileInput
                  form={ProfileForm.getInputProps("department")}
                  label="Department"
                  prop="department"
                  placeholder="Enter your Department"
                />
                <ProfileInput
                  form={ProfileForm.getInputProps("position")}
                  label="Position"
                  prop="position"
                  placeholder="Enter your Position"
                />
                <ProfileInput
                  form={ProfileForm.getInputProps("role")}
                  label="Role"
                  prop="role"
                  placeholder="Enter your Role"
                />
                <ProfileInput
                  form={ProfileForm.getInputProps("managerName")}
                  label="Manager Name"
                  prop="managerName"
                  placeholder="Enter your Manager Name"
                />
                <ProfileInput
                  form={ProfileForm.getInputProps("managerPhone")}
                  label="Manager Phone Number"
                  prop="mangerPhone"
                  placeholder="Enter your Manager Phone Number"
                />
              </Box>
              <Text className="my-4 text-black font-semibold tracking-wide text-xs xl:text-base">
                Personal Address
              </Text>
              <Box className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-4">
                <ProfileInput
                  form={ProfileForm.getInputProps("address")}
                  label="Address"
                  prop="address"
                  placeholder="Enter your Address"
                />
                <ProfileInput
                  form={ProfileForm.getInputProps("city")}
                  label="City"
                  prop="city"
                  placeholder="Enter your City"
                />
                <ProfileInput
                  form={ProfileForm.getInputProps("township")}
                  label="Township"
                  prop="township"
                  placeholder="Enter your Township"
                />
              </Box>
            </section>
          </Box>
          <Box className=" w-full lg:w-[30%]">
            <ProfilePhoto
              profileModal={profileModal}
              backgroundModal={backgroundModal}
              profileOpen={profileOpen}
              profileClose={profileClose}
              backgroundOpen={openBackground}
              backgroundClose={closeBackground}
              profileHandler={profileHandler}
              backgroundHandler={backgroundHandler}
              base64ProfileUrl={base64ProfileUrl}
              base64BackgroundUrl={base64BackgroundUrl}
            />
          </Box>
        </Box>
        <Group position="right" className="mt-6">
          <Group spacing={"sm"}>
            <Button
              size={xlScreen ? "sm" : "xs"}
              leftIcon={<IconLogout size={"1rem"} />}
              className="bg-red-500  hover:bg-red-600"
            >
              Log Out
            </Button>
            <Button
              size={xlScreen ? "sm" : "xs"}
              className="bg-blue-700 hover:bg-blue-600"
              type="submit"
            >
              Save Profile
            </Button>
          </Group>
        </Group>
      </form>
    </main>
  );
};

export default ProfilePage;
