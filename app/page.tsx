"use client";
import { useState, useEffect } from "react";

import ShowView from "@/components/ShowView";
import SvgIcon from "@/components/SvgIcon";
import Image from "next/image";

import { useForm, SubmitHandler } from "react-hook-form";

interface IUserDetails {
  countryName: string;
  companyName: string;
  workers: string;
}

export default function Home() {
  const [isScreenLarge, setIsScreenLarge] = useState(false);
  const [active, setIsActive] = useState("country");
  const [isValid, setIsValid] = useState(false);

  console.log(active);

  const defaultValues = {
    countryName: "",
    companyName: "",
    workers: "",
  };

  const {
    watch,
    handleSubmit,
    formState: { errors },
    register,
    trigger,
  } = useForm<IUserDetails>({
    defaultValues,
  });

  useEffect(() => {
    const checkScreenSize = () => setIsScreenLarge(window.innerWidth >= 800);

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const values = watch();

  useEffect(() => {
    const checkValidity = () => {
      if (active === "country" && values.countryName) {
        setIsValid(true);
      } else if (active === "name" && values.companyName) {
        setIsValid(true);
      } else if (active === "workers" && values.workers) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    };

    checkValidity();
  }, [active, values]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isStepValid = await trigger(
      active === "country"
        ? "countryName"
        : active === "name"
        ? "companyName"
        : "workers"
    );

    if (isStepValid) {
      if (active === "country") setIsActive("name");
      else if (active === "name") setIsActive("workers");
      else setIsActive("country");
    }
  };

  const onSubmit: SubmitHandler<IUserDetails> = (data) => {
    console.log(data);
  };

  return (
    <div className="relative w-screen">
      <div className="px-6 md:flex md:px-0 md:h-screen">
        {/* left */}
        <div className="relative basis-2/5 xl:basis-[30%] md:bg-[#EBF6FF] md:px-[23px]">
          <div>
            <div className="mt-[42px] md:mt-[23px] flex items-center gap-2">
              <div className="flex items-center justify-center relative h-[30px] w-[30px] border rounded-1/2 border-black cursor-pointer">
                <SvgIcon name="left-arrow" className="h-4 w-5" />
              </div>
              <p className="font-bold text-[13px]">Back to home</p>
            </div>

            <ShowView when={isScreenLarge}>
              <div className="mt-9 xl:mt-12 flex items-center">
                <div className="relative w-[42px] h-[45px] ">
                  <Image
                    className="absolute h-full w-full"
                    src="/bootspro-logo.png"
                    alt="logo"
                    sizes="100%"
                    fill
                  />
                </div>
                <div className="relative w-[134px] h-5">
                  <Image
                    className="absolute h-full w-full"
                    src="/boostpro.png"
                    alt="boostpro"
                    sizes="100%"
                    fill
                  />
                </div>
              </div>
            </ShowView>
          </div>

          <div className="relative flex mt-9 mb-16 flex-col mx-auto w-56 justify-center md:mx-0 md:w-full">
            <span className="absolute w-56 h-1 z-0 bg-grey md:w-1 md:h-[65%] md:ml-[19px] l:h-[70%] l:top-0"></span>

            <div className="flex justify-between z-2 md:block">
              <div className="md:flex md:mb-8">
                <div className="bg-app-black h-10 w-10 flex items-center justify-center rounded-10">
                  <SvgIcon
                    name="map"
                    className={`${
                      active === "country" ? "text-white" : ""
                    } h-6 w-6`}
                  />
                </div>
                <ShowView when={isScreenLarge}>
                  <div className="ml-[7px]">
                    <p className="font-bold l:text-lg">Your country</p>
                    <p className="l:text-lg">Provide where you reside</p>
                  </div>
                </ShowView>
              </div>

              <div className="md:flex md:mb-8">
                <div className="bg-app-black h-10 w-10 flex items-center justify-center rounded-10">
                  <SvgIcon
                    name="home"
                    className={`${
                      active === "name" ? "text-white" : ""
                    } h-6 w-6`}
                  />
                </div>
                <ShowView when={isScreenLarge}>
                  <div className="ml-[7px]">
                    <p className="font-bold l:text-lg">Your company name</p>
                    <p className="l:text-lg">Provide the registered name</p>
                  </div>
                </ShowView>
              </div>

              <div className="md:flex md:mb-8">
                <div className="bg-app-black h-10 w-10 flex items-center justify-center rounded-10">
                  <SvgIcon
                    name="briefcase"
                    className={`${
                      active === "workers" ? "text-white" : ""
                    } h-6 w-6`}
                  />
                </div>
                <ShowView when={isScreenLarge}>
                  <div className="ml-[7px]">
                    <p className="font-bold l:text-lg">Total workers</p>
                    <p className="l:text-lg">Number of workers</p>
                  </div>
                </ShowView>
              </div>
            </div>
          </div>

          <ShowView when={isScreenLarge}>
            <div className="absolute h-40 w-44 right-[-2.3rem] bottom-10">
              <Image
                className="h-full w-full object-contain"
                src="/bg-2.png"
                alt="bg"
                sizes="100%"
                fill
              />
            </div>
          </ShowView>
        </div>

        {/* right  */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative mx-auto text-center max-w-[320px] xl:max-w-[400px] basis-3/5 xl:basis:[70%] md:mt-[60px] xl:mt-20"
        >
          <div className="relative w-14 h-[60px] xl:w-16 xl:h-[70px] mx-auto mb-7">
            <Image
              className="absolute h-full w-full"
              src="/bootspro-logo.png"
              alt="logo"
              sizes="100%"
              fill
            />
          </div>

          <ShowView when={active === "country"}>
            <h1 className="capitalize font-bold text-[26px] xl:text-[30px]">
              Your country
            </h1>
            <p className="xl:text-lg">Provide where you reside</p>

            <div className="mt-7 xl:mt-8 text-left flex flex-col ">
              <label
                htmlFor="countryName"
                className="text-app-black-800 font-semibold capitalize mb-1"
              >
                Enter country name
              </label>
              <input
                type="text"
                id="countryName"
                className="border-app-black-800 border rounded-10 outline-app-black-800 h-10 indent-4"
                {...register("countryName", {
                  required: "Please enter your country name",
                })}
              />
              {errors.countryName && (
                <p className="text-red-500 text-sm">
                  {errors.countryName.message}
                </p>
              )}
            </div>
          </ShowView>

          <ShowView when={active === "name"}>
            <h1 className="capitalize font-bold text-[26px] xl:text-[30px]">
              Your company name
            </h1>
            <p className="xl:text-lg">Provide the registered name</p>

            <div className="mt-7 xl:mt-8 text-left flex flex-col ">
              <label
                htmlFor={"name"}
                className="text-app-black-800 font-semibold capitalize mb-1"
              >
                Enter company name
              </label>
              <input
                type="text"
                id={"name"}
                className="border-app-black-800 border rounded-10 outline-app-black-800 h-10 indent-4"
                {...register("companyName", {
                  required: "Please enter your company name",
                })}
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm">
                  {errors.companyName.message}
                </p>
              )}
            </div>
          </ShowView>

          <ShowView when={active === "workers"}>
            <h1 className="capitalize font-bold text-[26px] xl:text-[30px]">
              Total workers
            </h1>
            <p className="xl:text-lg">Number of workers</p>

            <div className="mt-7 xl:mt-8 text-left flex flex-col ">
              <label
                htmlFor="workers"
                className="text-app-black-800 font-semibold capitalize mb-1"
              >
                Enter total number of workers
              </label>
              <input
                type="text"
                id="workers"
                className="border-app-black-800 border rounded-10 outline-app-black-800 h-10 indent-4"
                {...register("workers")}
              />
              {errors.workers && (
                <p className="text-red-500 text-sm">{errors.workers.message}</p>
              )}
            </div>
          </ShowView>

          <button
            className="mt-7 font-medium text-white bg-[#28323E] rounded-30 w-full py-2.5 pointer"
            onClick={active === "workers" ? undefined : handleClick}
          >
            Continue
          </button>

          <ShowView when={isScreenLarge}>
            <div className="absolute bottom-5 flex justify-between h-[5px] w-60 left-1/2 translate-x-[-50%] ">
              <div
                className={`${
                  active === "country" ? "red" : "bg-light-blue-gray "
                }w-[74px] h-full rounded-20`}
              ></div>
              <div
                className={`${
                  active === "name"
                    ? "bg-dark-blue-gray"
                    : "bg-light-blue-gray "
                }w-[74px] h-full rounded-20`}
              ></div>
              <div
                className={`${
                  active === "workers"
                    ? "bg-dark-blue-gray"
                    : "bg-light-blue-gray "
                }w-[74px] h-full rounded-20`}
              ></div>
            </div>
          </ShowView>
        </form>
      </div>

      <div className="absolute w-14 h-14 bottom-[2rem] right-5 pointer s:right-8 md:left-6 md:h-[70px] md:w-[70px]">
        <Image
          className="h-full w-full"
          src="/chat-icon.png"
          alt="chat-icon"
          sizes="100%"
          fill
        />
      </div>

      <ShowView when={!isScreenLarge}>
        <div className="absolute bottom-[-2rem] flex justify-between h-[5px] w-60 left-1/2 translate-x-[-50%] ">
          <div
            className={`${
              active === "country" ? "bg-dark-blue-gray" : "bg-light-blue-gray "
            } w-[74px] h-full rounded-20`}
          ></div>
          <div
            className={`${
              active === "name" ? "bg-dark-blue-gray" : "bg-light-blue-gray "
            } w-[74px] h-full rounded-20`}
          ></div>
          <div
            className={`${
              active === "workers" ? "bg-dark-blue-gray" : "bg-light-blue-gray "
            } w-[74px] h-full rounded-20`}
          ></div>
        </div>
      </ShowView>

      <ShowView when={!isScreenLarge}>
        <div className="relative w-[184px] h-[200px] left-[-2.65rem] top-[-1rem] z-[-1]">
          <Image
            className="h-full w-full object-contain"
            src="/bg-1.png"
            alt="background-image"
            sizes="100%"
            fill
          />
        </div>
      </ShowView>
    </div>
  );
}
