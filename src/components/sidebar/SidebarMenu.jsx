import menulogo from "../../assets/logos/menulogo.png";
import umbrella from "../../assets/logos/umbrellalogo.png";
import videologo from "../../assets/logos/videologo.png";
import handlogo from "../../assets/logos/handlogo.png";
import biometric from "../../assets/logos/biometriclogo.png";
export const SidebarMenu = () => {
  const menus = [
    {
      id: 1,
      logo: menulogo,
    },
    {
      id: 2,
      logo: umbrella,
    },
    {
      id: 3,
      logo: videologo,
    },
    {
      id: 4,
      logo: handlogo,
    },
    {
      id: 5,
      logo: biometric,
    },
  ];
  return (
    <div className="flex flex-col px-1 rounded-md overflow-x-hidden   ">
      {menus.map((item) => (
        <div
          key={item.id}
          className=" hover:bg-gray-200 hover:translate-x-3 transition-all ease-linear flex justify-center items-center p-3"
        >
          <img src={item.logo} alt={item.logo} className="" />
        </div>
      ))}
    </div>
  );
};
