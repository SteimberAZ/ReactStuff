import { useState } from "react";

type Props = {};

function Contar({}: Props) {
  const [index, setIndex] = useState(0);
  return (
    <div className="bg-white w-[150px] p-3 m-1 justify-center items-center border-1 rounded-[10px] grid hover:bg-gray-100">
      <div>Contar</div>
      <div>{index}</div>
      <div
        className="bg-blue-500 text-white w-[100px] p-1 m-0 justify-center items-center rounded-lg animate-pulse"
        onClick={() => setIndex(index + 1)}
      >
        Aumentar
      </div>
    </div>
  );
}

export default Contar;
