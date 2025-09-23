import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function Card(props: Props) {
  const { children } = props;
  return (
    <a
      href="#"
      className="flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-black dark:border-gray-200  "
      style={{
        width: "auto",
      }}
    >
      {children}
    </a>
  );
}
interface CardBodyProps {
  title: String;
  text?: String;
}
export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
        {title}
      </h5>
      <p className="font-normal text-gray-700 ">{text}</p>
    </>
  );
}
export default Card;
