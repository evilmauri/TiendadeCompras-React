import React from "react";
import { Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap';
import Carro from './Carro';

class Navegacion extends React.Component{
    //agregamos un metodo en el render con su return y no olvidar el export al final de la pagina
    render(){
        return(
            //creamos un navbar importandolo en el reactstrap, se agrega color,tamaño, etc..
            <Navbar color="light" light expand="xl">
                <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                <NavItem>
                <Carro/>
                </NavItem>
                </Nav>

            </Navbar>
        );
    }
}
export default Navegacion;