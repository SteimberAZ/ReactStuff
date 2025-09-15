import { useState } from "react";
type SidebarItem = {
  name: string;
  icon: string;
  link?: string;
};
type Props = {
  items: SidebarItem[];
};

const Aside = ({ items }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-[100px] h-screen  justify-center items-center">
      <button
        onClick={() => setOpen(!open)}
        id="toggleButton"
        className="w-[44px] h-[50px] bg-white fixed top-[7%] left-0 z-40 rounded-r-xl items-center justify-center border border-gray-200 shadow-sm  hover:bg-gray-100  hover:border-blue-500 "
      >
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>
      <aside
        id="sidebar"
        className={`fixed top-[7%] left-0 w-40 z-55 h-[calc(100vh-100px)] duration-400 bg-white transition-transform rounded-r-2xl  border border-gray-200 shadow-sm  hover:border-blue-500   ${
          open ? "translate-x-0" : "translate-x-[-400px]"
        }`}
      >
        <h2 className="p-4 font-bold">Menu Principal</h2>

        <div className="p-4 flex flex-col h-full justify-start">
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.link || "#"}
              className="flex items-center p-2 mb-2 rounded hover:bg-gray-200"
            >
              <img src={item.icon} alt={item.name} className="w-6 h-6 mr-2" />
              <span>{item.name}</span>
            </a>
          ))}
          <a
            onClick={() => setOpen(!open)}
            className="flex items-center p-2 mb-2 rounded bg-red-500 hover:bg-red-800 text-white font-bold cursor-pointer"
          >
            <svg
              className="w-6 h-6 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M14 7.63636L14 4.5C14 4.22386 13.7761 4 13.5 4L4.5 4C4.22386 4 4 4.22386 4 4.5L4 19.5C4 19.7761 4.22386 20 4.5 20L13.5 20C13.7761 20 14 19.7761 14 19.5L14 16.3636"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M10 12L21 12M21 12L18.0004 8.5M21 12L18 15.5"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <span>Salir</span>
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
