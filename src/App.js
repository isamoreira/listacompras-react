import React, { Component } from "react";
import Lista from "./components/lista";
import { ContainerLista } from "./components/lista-style";
import { createGlobalStyle } from "styled-components";

const GlobalSyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image:url("https://foodtank.com/wp-content/uploads/2019/03/cookbook.jpg");
  font-family: 'JetBrains Mono', monospace;
  color: white;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalSyle />
        <ContainerLista>
          <h1>Lista de compras de mercado</h1>
          <Lista />
        </ContainerLista>
      </div>
    );
  }
}
