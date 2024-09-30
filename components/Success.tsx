import Image from "next/image";

function Success() {
  return (
    <div className="bg-white text-center h-[334px] rounded-20 absolute top-2/4 left-2/4 w-9/12 max-w-[465px] translate-x-[-50%] translate-y-[-50%] px-3.5 py-7 z-2 shadow-box-shadow">
        <div className="relative h-[103px] w-[103px] rounded-1/2 mx-auto">
          <Image
            className="h-full w-full"
            src="/success-hero.png"
            alt="success-hero"
            sizes="100%"
            fill
          />
        </div>
        <p className="font-bold xs:text-xl mt-[14px] mb-[13px]">
          You Have Completed The Form !
        </p>
        <p className="text-sm leading-6 xs:leading-7">
          We are calculating the aid you are eligible for. you will soon be
          directed to the search result page.
        </p>
      </div>
  );
}

export default Success;
