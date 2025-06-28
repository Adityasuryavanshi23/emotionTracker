import { useNavigate } from "react-router-dom";
import { SideBar } from "./components/sidebar/SideBar";
import { Allroutes } from "./routes/Allroutes";

function App() {
  const nav = useNavigate();
  return (
    <div className="bg-[url('../public/Bg.png')] bg-cover bg-center bg-no-repeat h-screen w-full flex max-sm:px-4 ">
      <SideBar />
      <div className="flex-1 overflow-y-auto flex flex-col justify-center items-center">
        <div
          onClick={() => nav(-1)}
          className="absolute top-5 left-32 max-sm:left-8 flex items-center gap-3 cursor-pointer "
        >
          <i className="bi bi-arrow-left-short border text-2xl text-[#F6996C] bg-white w-7 h-7 flex justify-center items-center   rounded-full"></i>
          <h1 className="font-montserrat font-semibold text-[18px] text-[#C94A0D] hover:underline ">
            Back
          </h1>
        </div>
        <Allroutes />
      </div>
    </div>
  );
}

export default App;
