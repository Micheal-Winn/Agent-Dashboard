import React, { useState } from "react";
import { ActionIcon, Box, Text, Modal } from "@mantine/core";
import * as Avatar from "@radix-ui/react-avatar";
import { IconPencilMinus } from "@tabler/icons-react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import ProfileUploadModal from "./profile.upload.modal";


const ProfilePhoto: React.FC<FormProps> = ({ 
    profileModal,backgroundModal,profileHandler,backgroundHandler,
     profileOpen,profileClose,backgroundOpen,backgroundClose,
     base64ProfileUrl,base64BackgroundUrl
   }) => {
  
  
    const smScreen = useMediaQuery("(min-width:40em)");
    // const [profileModal, { open: profileOpen, close: profileClose }] =
    //   useDisclosure(false);
    // const [backgroundModal, { open: openBackground, close: closeBackground }] =
    //   useDisclosure(false);
    // const [base64ProfileUrl, setBase64ProfileUrl] = useState<string>("");
    // const [base64BackgroundUrl, setBase64BackgroundUrl] = useState<string>("");
  
    // const profileHandler = (data: File) => {
    //   if (data) {
    //     console.log("file", data);
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //       setBase64ProfileUrl(reader.result as string);
    //     };
    //     reader.readAsDataURL(data);
    //     profileClose();
    //   }
    // };
  
    // const backgroundHandler = (data: File) => {
    //   if (data) {
    //     console.log("file", data);
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //       setBase64BackgroundUrl(reader.result as string);
    //     };
    //     reader.readAsDataURL(data);
    //     closeBackground();
    //   }
    // };
    return (
      <>
        <section className=" lg:pt-6 sm:pl-2 xl:pl-14 w-full xl:pr-1 2xl:pr-4">
          <Box className="flex  lg:flex-col gap-[2.5rem] sm:gap-16 md:gap-2 ">
            <Box className="">
              <Text className="text-xs sm:text-sm xl:text-lg mb-2 mt-7 lg:mt-0 font-semibold tracking-wide">
                Update Profile
              </Text>
              <Text
                color="dimmed"
                className="text-[0.55rem] sm:text-xs xl:text-sm mt-4 xl:mt-0 "
              >
                Profile of at least Size{" "}
                <span className="text-black">300x300</span>
              </Text>
              <Text
                color="dimmed"
                className="mt-2 xl:mt-1 text-[0.55rem] sm:text-xs xl:text-sm "
              >
                Gifs work too. <span className="text-black">Max 5mb</span>
              </Text>
            </Box>
  
            <div className="relative  cursor-pointer h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] md:h-[150px]  md:w-[150px] xl:h-[135px] xl:w-[135px]">
              <ActionIcon
                onClick={profileOpen}
                size={smScreen ? "md" : "xs"}
                className="absolute rounded-full top-[90%] left-[80%] sm:left-[90%] z-30  bg-blue-600  hover:bg-blue-700"
              >
                <IconPencilMinus
                  color="white"
                  size={smScreen ? "0.8rem" : "0.5rem"}
                />
              </ActionIcon>
  
              <Avatar.Root className=" sm:ml-8 my-4 bg-blackA3 inline-flex w-full h-full select-none items-center justify-center overflow-hidden rounded-full align-middle ">
                <Avatar.Image
                  className="h-full w-full rounded-[inherit] object-cover"
                  alt="Profile Photo"
                  src={
                    base64ProfileUrl === ""
                      ? "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      : base64ProfileUrl
                  }
                />
                <Avatar.Fallback
                  className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-slate-400 text-[15px] font-medium"
                  delayMs={600}
                >
                  PT
                </Avatar.Fallback>
              </Avatar.Root>
            </div>
          </Box>
  
          <Text className="text-xs sm:text-sm xl:text-lg mb-2 font-semibold tracking-wide mt-6 sm:mt-16 md:mt-6">
            Update Cover
          </Text>
          <Text color="dimmed" className="text-[0.65rem] sm:text-xs xl:text-sm">
            Cover of at least Size <span className="text-black">1170x920</span>
          </Text>
          <div className="relative  cursor-pointer">
            <ActionIcon
              onClick={backgroundOpen}
              size={smScreen ? "md" : "xs"}
              className="absolute rounded-full bottom-0 sm:top-[90%] -right-1 z-30  bg-blue-600  hover:bg-blue-700"
            >
              <IconPencilMinus
                color="white"
                size={smScreen ? "0.8rem" : "0.5rem"}
              />
            </ActionIcon>
            <Avatar.Root className="bg-blackA3 inline-flex h-[200px] w-full lg:w-full xl:w-full 2xl:w-full  select-none items-center justify-center overflow-hidden  align-middle mt-2 rounded-md">
              <Avatar.Image
                src={
                  base64BackgroundUrl === ""
                    ? "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                    : base64BackgroundUrl
                }
                className="h-full w-full rounded-[inherit] object-cover"
                alt="Cover Photo"
              />
              <Avatar.Fallback
                className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-slate-400 text-[15px] font-medium"
                delayMs={600}
              >
                BP
              </Avatar.Fallback>
            </Avatar.Root>
          </div>
        </section>
        {profileModal ? (
          <ProfileUploadModal
            open={profileModal}
            close={profileClose}
            placeholder="Click to upload photo"
            handler={profileHandler}
            title="Upload Profile Image"
            
          />
        ) : (
          <ProfileUploadModal
            open={backgroundModal}
            close={backgroundClose}
            placeholder="Click to upload photo"
            handler={backgroundHandler}
            title="Upload Cover Image"
            
          />
        )}
      </>
    );
  };
  
  export default ProfilePhoto;


type FormProps = {
    profileModal: boolean;
    backgroundModal: boolean;
    profileOpen: () => void;
    profileClose: () => void;
    backgroundOpen: () => void;
    backgroundClose: () => void;
    profileHandler: (data: File) => void;
    backgroundHandler: (data: File) => void;
    base64ProfileUrl: string;
     base64BackgroundUrl: string;
  };