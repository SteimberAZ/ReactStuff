function Titulo() {
  const nombre = "Mundo";
  if (nombre) {
    return <h1 className="bg-white w-fit text-6xl "><img className="w-[150px] animate-bounce" src="/vite.svg"></img></h1>;
  }
  return <h1 className="bg-red-500 text-7xl">Hola desconocido</h1>;
}

export default Titulo;
