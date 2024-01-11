import Image from "next/image";
import Link from "next/link";
import Logo from "../public/Logo.svg";

import data from "../data/config.json";

function NavBar() {
  return (
    <div className="navBar flex w-full flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-2 ">
      <Image className="logo" alt="Logo" width={40} src={Logo} />
      <div className="justify-center flex w-full">
        <div className="navMenu flex gap-2 overflow-scroll items-center">
          {Object.entries(data.navBarData).map(([key, value]) => (
            <Link href={value.link} key={key}>
              <p className="link"> {value.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
