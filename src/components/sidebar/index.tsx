import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative  ">
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-md transition"
      >
        <img className="h-[45px]" src="images/menu3.png" alt="Toggle Sidebar" />
      </button>

      <div
        className={`fixed bg-slate-100  top-0 left-0 h-full w-[360px] transform transition-all duration-300 ease-in-out z-40 ${
          isOpen
            ? "translate-x-0 opacity-100 visible"
            : "-translate-x-full opacity-0 invisible"
        }`}
        style={{
          transitionProperty: "transform, opacity, visibility",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <div className="p-6 pt-14">
          <div className="mt-9">
            <img src="images/logo.png" alt="Logo" />
          </div>
          <hr className="mt-10 bg-[#EEEEEE]" />
          <h2 className="font-semibold mt-8">Фильтр</h2>

          <div className="flex mt-5 gap-4">
            <select className="w-[96px] h-[45px] hover:bg-[#FCA311] bg-zinc-200 rounded-md">
              <option value="en">Продажа</option>
            </select>
            <select className="w-[96px] h-[45px] hover:bg-[#FCA311] bg-zinc-200 rounded-md">
              <option value="en">Аренда</option>
            </select>
            <select className="w-[96px] h-[45px] hover:bg-[#FCA311] bg-zinc-200 rounded-md">
              <option value="en">Сожит.</option>
            </select>
          </div>

          <div className="mt-7">
            <select className="w-[330px] h-[45px] hover:bg-[#FCA311] bg-zinc-200 rounded-md">
              <option value="en">Продажа</option>
            </select>
            <select className="w-[330px] h-[45px] hover:bg-[#FCA311] bg-zinc-200 rounded-md mt-6">
              <option value="en">Продажа</option>
            </select>
            <select className="w-[330px] h-[45px] hover:bg-[#FCA311] bg-zinc-200 rounded-md mt-6">
              <option value="en">Продажа</option>
            </select>
            <select className="w-[330px] h-[45px] hover:bg-[#FCA311] bg-zinc-200 rounded-md mt-6">
              <option value="en">Продажа</option>
            </select>
          </div>

          <div>
            <h2 className="font-semibold mt-8">Комнат</h2>
            <h2 className="font-semibold mt-8">Площадь</h2>
          </div>

          <div>
            <select className="w-[330px] h-[45px] hover:bg-[#FCA311] bg-zinc-200 rounded-md mt-6">
              <option value="en">Рядом</option>
            </select>
          </div>

          <div>
            <h2 className="font-semibold mt-8">Комиссионные</h2>
          </div>

          <div className="flex items-center gap-11">
            <div className="flex items-center gap-2">
              {" "}
              <h2>DA</h2>
              <input type="checkbox" className=" hover:bg-[#FCA311] w-5 h-5" />
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <h2>Net</h2>
              <input type="checkbox" className="hover:bg-[#FCA311] w-5 h-5" />
            </div>
            <button className="w-[118px] h-[45px] bg-[#FCA311] rounded-md mt-4">
              Применить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
