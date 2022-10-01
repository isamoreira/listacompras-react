import React, { Component } from "react";
import { Btn } from "./lista-style";

export default class App extends Component {
  state = {
    produto: "",
    listadecompras: []
  };

  handleChange = (event) => {
    this.setState({
      produto: event.target.value
    });
  };

  enviar = () => {
    if (this.state.produto !== "") {
      this.setState({
        listadecompras: this.state.listadecompras.concat({
          produto: this.state.produto,
          id: Date.now()
        }),
        produto: ""
      });
    }
  };

  remove = (id) => {
    this.setState({
      listadecompras: this.state.listadecompras.filter((item) => item.id !== id)
    });
  };

  removeall = (id) => {
    this.setState({
      listadecompras: this.state.listadecompras.filter(
        (item) => item.listadecompras
      )
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => event.preventDefault()}>
          <input onChange={this.handleChange} value={this.state.produto} />
          <Btn onClick={this.enviar}>Adicionar</Btn>
          <Btn onClick={() => this.removeall()}>Remover tudo</Btn>

          {this.state.listadecompras.map((item) => (
            <div>
              <ul>
                <li>{item.produto}</li>
              </ul>
              <button onClick={() => this.remove(item.id)}>X</button>
            </div>
          ))}
        </form>
      </div>
    );
  }
}
