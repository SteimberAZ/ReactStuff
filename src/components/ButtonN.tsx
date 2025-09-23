import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onclick: () => void;
};

function ButtonN({ children, isLoading, onclick }: Props) {
  return (
    <button
      onClick={onclick}
      disabled={isLoading}
      type="button"
      className={`flex flex-row items-center justify-center p-2 hover:bg-blue-700 text-white bg-blue-500 rounded-sm m-1 cursor-pointer w-[120px] ${
        isLoading ? "hover:bg-gray-600  bg-gray-400 cursor-progress " : ""
      }`}
    >
    

      {isLoading ? "Cargando..." : children}
    </button>
  );
}

export default ButtonN;
