"use client";
import React, { useState } from "react";

import {
  useForm,
  FieldError,
  UseFormHandleSubmit,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";
import * as Checkbox from "@radix-ui/react-checkbox";
import { IconCheck, IconEye, IconEyeOff } from "@tabler/icons-react";

import UserInput from "./UserInput";
import { setCookie } from "cookies-next";
import { useAdminAuthentication } from "../Hooks/admin.hook";
import { adminAuthApi } from "../api/axios";
import { Button } from "@mantine/core";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from 'next/navigation'

//toast
const notify = () =>
  toast.success("Sign Up Successful.Please Login your credentials", {
    icon: "👏",
  });

const Authenticate= () => {

  const router = useRouter()

  

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [isLogin, setIsLogin] = useState(true);
  const [isAccept, setIsAccept] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const passwordShowOrHideHandler = () => {
    setIsShow(!isShow);
  };

  const checkHandler = () => {
    setIsAccept(!isAccept);
  };

  const signUpFirstUserHandler = (data: any) => {
    console.log(data);
    //router.push("/auth");
    reset();
    notify;
  };

  const loginSuccessHandler = (data: any) => {
    console.log(data?.data?.Token);
    setCookie("token", data?.data?.Token);
    //router.push("/");
    reset();
  };

  const { isLoading: authenticating, mutate: authenticate } =
    useAdminAuthentication(
      isLogin ? adminAuthApi.login : adminAuthApi.signup,
      isLogin ? loginSuccessHandler : signUpFirstUserHandler
    );

  const submitFormHandler = (data: any) => {
    console.log("data", data);
    authenticate(data);
  };

  return (
    <main className="flex lg:bg-white">
      <section className="b h-screen  pt-3 flex flex-col justify-between w-full lg:w-1/2">
        <h1 className="pl-6 2xl:pl-12 text-transparent text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text">
          Smart Save
        </h1>
        <div className="2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:h-full 2xl:w-ful">
          <h2 className="text-center mt-0 2xl:mt-0 2xl:mb-10 text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-semibold mb-5 text-blue-700">
            Sign in to Smart Save
          </h2>
          <h3 className="text-center mb-6 text-xs md:text-sm lg:text-xs xl:text-sm font-medium text-gray-400">
            Send,spend and save smarter
          </h3>

          {/**form */}
          <form
            onSubmit={handleSubmit(submitFormHandler)}
            className="grid grid-cols-1 w-[70%] sm:w-[50%] lg:w-[75%] xl:w-[60%] 2xl:w-[45%] mx-auto gap-2 "
          >
            {!isLogin && (
              <UserInput
                label="Username"
                register={register("name", {
                  required: {
                    value: true,
                    message: "username must not be empty",
                  },
                  minLength: {
                    value: 2,
                    message: "Username must be at least two characters long",
                  },
                  // pattern: {
                  //   value: /^[A-Za-z0-9_]+$/g,
                  //   message: "username can be a-z,A-Z,0-9,_",
                  // },
                })}
                error={errors.name as FieldError}
                placeholder="Username"
                autoFocus
              />
            )}
            <UserInput
              label="Email"
              register={register("Email", {
                required: { value: true, message: "email must not be empty" },
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "please provide a valid email address.",
                },
              })}
              error={errors.email as FieldError}
              placeholder="Email"
            />
            <UserInput
              label="Password"
              register={register("Password", {
                required: {
                  value: true,
                  message: "password must not be empty",
                },
                minLength: {
                  value: 4,
                  message: "Password must be at least 4 characters long",
                },
                maxLength: {
                  value: 14,
                  message: "must be under 15 characters",
                },
              })}
              error={errors.password as FieldError}
              placeholder="Password"
              type={isShow ? "text" : "password"}
              icon={
                isShow ? (
                  <IconEyeOff size={18} color="gray" />
                ) : (
                  <IconEye size={18} color="gray" />
                )
              }
              pshandler={passwordShowOrHideHandler}
            />

            <div className="flex items-center mt-4">
              <Checkbox.Root
                onClick={checkHandler}
                className="shadow-blackA7 hover:bg-violet3 flex h-[18px] w-[18px] appearance-none items-center justify-center rounded-[4px] bg-white  outline-none border-[1px] my-3"
                id="c1"
              >
                <Checkbox.Indicator
                  className="text-violet11"
                  defaultChecked={isAccept}
                  onClick={checkHandler}
                >
                  <IconCheck size={10} />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label
                className="pl-[15px] text-[13px] leading-none text-black"
                htmlFor="c1"
              >
                Accept <span className="text-blue-700">terms</span> and{" "}
                <span className="text-blue-700">conditions.</span>
              </label>
            </div>
            {/* <button disabled={!isAccept} type="submit"  className="bg-blue-700 text-white px-4 py-2 md:py-4 lg:py-3 xl:py-4 rounded-3xl text-sm font-semibold mb-3 disabled:opacity-50 ">
          {isLogin ? "Sign In" : "Sign Up"}
          </button> */}
            <Button
              type="submit"
              size="lg"
              disabled={!isAccept}
              loading={authenticating}
              radius={"xl"}
              className="bg-blue-700"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </Button>

            {/**to show only in sing in */}
            <p className="text-xs underline hover:text-blue-700 cursor-pointer text-center mt-2  text-blue-500 mb-6">
              {isLogin && "Forgot Password?"}
            </p>
            <div className="flex w-[100%] mx-auto gap-1 justify-center">
              <p className="text-xs text-slate-400  hover:text-blue-500 cursor-pointer">
                Don&apos;t have an account?
              </p>
              <button
                onClick={() => setIsLogin(!isLogin)}
                type="submit"
                className="text-xs  hover:text-blue-500 cursor-pointer text-blue-700 font-medium"
              >
                {!isLogin ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
        <div>
          <p className="mb-4 text-center text-xs text-gray-400">
            {" "}
            © 2023 smart.save. All rights reserved.
          </p>
        </div>
      </section>
      <section
        className="hidden lg:flex w-1/2  h-screen
      "
      >
        <div
          className=" bg-[url('https://www.mobilize.net/hubfs/partners.jpg')]
        bg-center bg-contain bg-no-repeat object-cover w-full h-full"
        ></div>
      </section>
      <Toaster position="top-center" reverseOrder={true} />
    </main>
  );
};

export default Authenticate;
