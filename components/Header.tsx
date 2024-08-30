import Image from "next/image";
import SvgIcon from "./SvgIcon";

function Header() {
  return (
    <header className="md:hidden flex items-center justify-between pl-6 pr-14 py-3 shadow-header-shadow sticky top-0 left-0 z-10 bg-white">
      <div className="relative w-14 h-[60px]">
        <Image
          className="absolute h-full w-full"
          src="/bootspro-logo.png"
          alt="logo"
          sizes="100%"
          fill
        />
      </div>
      <div className="relative h-[35px] w-[35px] cursor-pointer">
        <SvgIcon name="menu" className="h-full w-full" />
      </div>
    </header>
  );
}

export default Header;
