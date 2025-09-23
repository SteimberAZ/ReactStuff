import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading: boolean;
  onclick: () => void;
};

function LoadingBS({ children, isLoading, onclick }: Props) {
  return (
    <button
      onClick={onclick}
      disabled={isLoading}
      type="button"
      className={`flex flex-row items-center justify-center p-2 hover:bg-blue-700 text-white bg-blue-500 rounded-sm m-1 cursor-pointer w-[120px] ${
        isLoading ? "hover:bg-gray-600  bg-gray-400 cursor-progress " : ""
      }`}
    >
      <svg
        className={`w-5 h-5 ${!isLoading ? "" : "hidden"} `}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
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
            d="m 4 2 c 0 -0.265625 0.105469 -0.519531 0.292969 -0.707031 c 0.390625 -0.390625 1.023437 -0.390625 1.414062 0 l 6 6 c 0.1875 0.1875 0.292969 0.441406 0.292969 0.707031 s -0.105469 0.519531 -0.292969 0.707031 l -6 6 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 s 0.105469 -0.519531 0.292969 -0.707031 l 5.292969 -5.292969 l -5.292969 -5.292969 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 z m 0 0"
            fill="#ffffff"
          ></path>{" "}
        </g>
      </svg>
      <svg
        className={`w-5 h-5 animate-spin ${isLoading ? "block" : "hidden"} `}
        viewBox="0 0 24 24"
        fill="#000000"
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
            d="M12 3V6M3 12H6M5.63607 5.63604L7.75739 7.75736M5.63604 18.3639L7.75736 16.2426M21 12.0005H18M18.364 5.63639L16.2427 7.75771M11.9998 21.0002V18.0002M18.3639 18.3642L16.2426 16.2429"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>

      {isLoading ? "Cargando..." : children}
    </button>
  );
}

export default LoadingBS;
