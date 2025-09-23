import Card, { CardBody } from "./components/Card";
import Titulo from "./components/Titulo";
import TextoFor from "./components/TextoFor";
import LoadingB from "./components/LoadingB";
import LoadingBS from "./components/LoadingBS";
import ButtonN from "./components/ButtonN";
import DaisyBT from "./components/DaisyBT";
//import List from "./components/List";
import Lisst from "./components/Lisst";
import Contar from "./components/Contar";
import Aside from "./components/Aside";
import userIcon from "./assets/user.png";
import homeIcon from "./assets/home.png";
import settingsIcon from "./assets/settings.png";
import {useState } from "react";
//import List from "./components/List";
function App() {
  const frase = `
Le digo hola, ella me dice goodbye Le digo: "nena, 
como tú ya no hay" Dice que tiene novio, pero yo  
no le creo Y es que se complica cada vez que la      
veo-eo Suena la música y lo que yo quiero Es 
bailarcontigo, nena, pero yo no puedo No 
puedo, me     dice: "yo no quiero" Pero se complica,
 yo no           entiendo por qué es tan Picky, picky, picky,
 picky,   picky Demasiado picky, picky, picky, picky,
picky Si  yo le salgo por la izquierda, se va pa'
la derecha No sé lo que le pasa, conmigo ella no 
quiere bailar      Picky, picky, picky, picky, picky
 Demasiado picky,    picky, picky, picky, picky
 Si yo le salgo por la            izquierda, se va pa' la
derecha No sé lo que le pasa, conmigo ella no 
quiere bailar`; 
//  const list : string[] = ["Tanjiro", "Doraemon", "Jotaro"];
  const itemsAside = [
    { name: "Inicio", icon: homeIcon, link: "/" },
    { name: "Usuario", icon: userIcon, link: "/usuario" },
    { name: "Ajustes", icon: settingsIcon, link: "/ajustes" },
  ];
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo: ", elemento);
  };
  const [isLoading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(!isLoading);
  };
  const [Data, setData] = useState(["Tanjiro", "Doraemon", "Jotaro"]);
  const addMinion = () =>{
    setData([...Data,"minion"])
  }
  const delMinion = () =>{
    setData(Data.slice(0,-1))
  }
  const contenido = Data.length !==0 && (
    <Lisst data={Data} onSelect={handleSelect}></Lisst>
  );
  return (
    <div className=" flex  justify-center items-center h-screen text-center bg-white text-black">
      <Aside items={itemsAside}></Aside>
      <div className="w-[400px] h-[auto] bg-white border flex border-gray-300 rounded p-4 overflow-hidden m-5">
        <TextoFor texto={frase.split("")} />
      </div>
      <LoadingB>
        <span className=" text-white m-0.5">Iniciar</span>
      </LoadingB>
      <LoadingBS isLoading={isLoading} onclick={handleClick}>
        <span className=" text-white m-0.5">Iniciar</span>
      </LoadingBS>
      <Card>
        <Titulo></Titulo>
        <CardBody
          title={"Hola Mundo"}
          text={"Hola a todos en este mundo"}
        ></CardBody>
        <ButtonN onclick={addMinion}>Agregar</ButtonN>
        <ButtonN onclick={delMinion}>Borrar</ButtonN>
        {contenido}
        <Contar></Contar>
        <DaisyBT></DaisyBT>
      </Card>
    </div>
  );
}

export default App;
