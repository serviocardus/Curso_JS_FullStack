import React from "react";
import Citacoes from "./components/Citacoes";
export default function App() {
  return (
    <div>
      <Citacoes
        citacao="Creio no riso e nas lágrimas como
antídotos contra o ódio e o terror."
        autor="Charles Chaplin"
      />
      <Citacoes
        citacao="Seja como for o que penses, creio que
é melhor dizê-lo com boas palavras."
        autor="William Shakespeare"
      />
      <Citacoes
        citacao="Creio que tenho prova suficiente de
que falo a verdade: a pobreza."
        autor="Sócrates"
      />
      <Citacoes
        citacao="Creio que quase sempre é preciso um
golpe de loucura para se construir um destino."
        autor="Marguerite Yourcenar"
      />
      <Citacoes
        citacao="Eu creio haver corações que
poderiam cortar diamantes."
        autor="Emanuel Wertheimer"
      />
    </div>
  );
}
