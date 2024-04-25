import React from "react";
import { Badge, Button, Popover, PopoverBody, PopoverHeader, Table } from "reactstrap";
import listadoCar from '../listaCarrito.json';

class Carro extends React.Component{
    constructor(){
        const {listadoCarrito} = listadoCar;
        super();
        //para darle accion mediante el boton
        this.state = {
            popoverOpen:false,
            listadoCarrito
        };
        //interconectar la informacion para poder utilizar las props(del argumento en el metodo toggle)
        this.toggle = this.toggle.bind(this);
        //bind hace que los argumentos recibidos por la clase FichaProducto puedan ser compartidos a los demas metodos de la clase
    }
    //llamaremos al objeto de nuestra clase
    toggle(){
        //definir el estado del popover
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }))
    }
    totalCarrito(){
        const totalCarrito = () => {
            return this.state.carrito.reduce((acc, item) => acc + item.precio, 0);
          };
          
          return (
            <div>
              Total: ${Intl.NumberFormat('es-CL').format(totalCarrito())}
            </div>
          );
        /*let TotalPago =0;
        this.state.listadoCarrito.map((listadoCarrito, i) => {
            TotalPago += listadoCarrito.precio;
            return TotalPago;
        }
        );
        return TotalPago;*/


        /*let total = 0;
        
        this.state.listadoCarrito.forEach((listadoCarrito) => {
    total += parseInt(listadoCarrito.precio);
});console.log(total);
return total;*/


        /*let total = 0;
        // eslint-disable-next-line no-unused-vars
        let suma= this.state.listadoCarrito.map(
            (listadoCarrito) => (
                total = (total += parseInt(listadoCarrito.precio))
                )
        )
        return total;*/
    }
    render(){
        //nuestro mapeo quedria de est form solo utilizando titulo y precio
        const arregloCarrito = this.state.listadoCarrito.map(
            (listadoCarrito, i)  => {
                return (
                    <tr key={i}>
                        <td>{(i += 1)}</td>
                        <td>{listadoCarrito.titulo}</td>
                        <td>{listadoCarrito.precio}</td>
                    </tr>
                );
            }
        )
        return(
            <div>
                <Button id="Popover1" color="info">
                <span class="material-icons"> shopping_cart</span>
                <Badge color="secondary" id="BadgeCarrito">{arregloCarrito.length}</Badge>
                </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
        <PopoverHeader>Listado de Compras</PopoverHeader>
            <PopoverBody>
            <Table>
                <thead>
                <tr>
                    <th>~</th>
                    <th>Producto</th>
                    <th>Precio</th>
                </tr>
                </thead>
                <tbody>
                    {arregloCarrito}
                </tbody>
                <tfoot>
                    <td>
                    <b>Total: {this.totalCarrito}</b>
                    </td>
                </tfoot>
            </Table>
            </PopoverBody>
        </Popover>
            </div>
        );
    }
}
//{Intl.NumberFormat("de-DE").format(this.totalCarrito())}s
export default Carro;