import React from "react";
//import Contact from "./components/Contact";
import Citacoes from "./components/Citacoes";
import citacoesData from "./citacoesData";

export default function App() {

  const elementData = citacoesData.map(elemento => {
    return <Citacoes 
            citacao = {elemento.citacao} 
            autor ={elemento.autor}  />
  });

  return (
    <div className="contacts">
   
   {elementData}

    </div>
  );
}