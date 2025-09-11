import Card, { CardBody } from "./components/Card";
import Titulo from "./components/Titulo";
import List from "./components/List";
import Contar from "./components/Contar";
import Aside from "./components/Aside";
import userIcon from "./assets/user.png";
import homeIcon from "./assets/home.png";
import settingsIcon from "./assets/settings.png";

function App() {
  const list = ["Doraemon", "Nobita", "Sisuka", "Gigante", "Zuneo"];
  const itemsAside = [
    { name: "Inicio", icon: homeIcon, link: "/" },
    { name: "Usuario", icon: userIcon, link: "/usuario" },
    { name: "Ajustes", icon: settingsIcon, link: "/ajustes" },
  ];
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo: ", elemento);
  };
  return (
    <div className=" flex  justify-center items-center h-screen text-center bg-white">
      <Aside items={itemsAside}></Aside>
      <Card>
        <Titulo></Titulo>
        <CardBody
          title={"Hola Mundo"}
          text={"Hola a todos en este mundo"}
        ></CardBody>
        <List data={list} onSelect={handleSelect}></List>
        <Contar></Contar>
      </Card>
    </div>
  );
}

export default App;
