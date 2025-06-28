import { SidebarMenu } from "./SidebarMenu";
import logo from "../../assets/logos/mainlogo.png";
import bell from "../../assets/logos/bellicon.png";
import profile from "../../assets/logos/profile.png";
import avatar from "../../assets/images/Avatar.png";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <section className="max-sm:hidden">
      <div className="w-[76px] bg-white min-h-screen z-10 flex flex-col gap-[30px] ">
        {/* mainLogo */}
        <div className="mt-4 flex justify-center items-center ">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-[32px] h-[32px]" />
          </Link>
        </div>

        {/* menuList */}
        <SidebarMenu />

        {/* second menu list */}
        <div className="flex flex-col items-center overflow-x-hidden ">
          <img
            src={bell}
            alt="bell"
            className="object-cover  hover:translate-x-3 transition-all ease-linear  hover:bg-gray-200 p-4 rounded-md"
          />
          <img
            src={profile}
            alt="profile"
            className="object-cover hover:translate-x-3 transition-all ease-linear s hover:bg-gray-200 p-4 rounded-md"
          />
        </div>

        {/* avatar */}
        <div className="mt-auto mb-4">
          <div className="flex justify-center items-center  ">
            <img src={avatar} alt={avatar} className="hover:animate-spin " />
          </div>
        </div>
      </div>
    </section>
  );
};
