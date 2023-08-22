import React from "react";
import { ButtonInput, DefaultInput } from "./components/forms";

function App() {
  return (
    <div className="App">
      <ButtonInput
        formLabel="Titulo"
        formInputType="text"
        buttonText="Buscar no documento"
        formHelp="Insira o título do seu documento"
      ></ButtonInput>
      <DefaultInput
        formLabel="Titulo"
        formInputType="text"
        formHelp="Insira o título do seu documento"
      ></DefaultInput>
    </div>
  );
}

export default App;
