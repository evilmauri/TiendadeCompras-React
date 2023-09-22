import React from "react";
import { Container, Row } from "reactstrap";
import './App.css';
import Navegacion from './Componentes/Navegacion';
import Producto from "./Componentes/Producto";
import listadoProductos from './listadoProductos.json';

class App extends React.Component {
  constructor(){
    super();
    
    this.state = {
    listadoProductos
  };
  }
  render(){
    const arregloComponentes = this.state.listadoProductos.listadoProductos.map(
      (listadoProductos, i) =>{
        return(
          <Producto
          key={i}
          titulo={listadoProductos.titulo}
          imagen={listadoProductos.imagen}
          descripcion={listadoProductos.descripcion}
          precio={listadoProductos.precio}
          stock={listadoProductos.stock}
          />
        )
      }
    );
  return (
    <Container>
      <Navegacion titulo="Sitio de Compras de Mauri React"/>
      <Row>
      {arregloComponentes};
      </Row>
    </Container>
  );
  }
}

export default App;
