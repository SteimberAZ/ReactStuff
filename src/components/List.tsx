import { useState } from "react";


type Props = {
  data: string[];
  onSelect?: (elemento:string) => void;
};

function List({ data ,onSelect}: Props) {
  const [index, setIndex] = useState(-1);
  const handleClick = (i: number ,elemento:string) => {
    setIndex(i);
    onSelect?.(elemento);
  };
  return (
    <>
      <div>Lista</div>
      <ul className="border-base-content/25 divide-base-content/25 w-96 divide-y rounded-md border *:p-3 *:first:rounded-t-md *:last:rounded-b-md">
        {data.map((elemento,i) => (
          <li className={` ${index == i ? 'bg-blue-500 text-white animate-pulse' : '' } `} onClick={() =>handleClick(i, elemento)} key={elemento}>
            {elemento}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
