import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Button, CardImg, Container, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import listadoCar from "../listaCarrito.json";
import './FichaProducto.css';

const {listadoCarrito} = listadoCar;

class FichaProducto extends React.Component{
    constructor(props){
        super();
        //para darle accion mediante el boton
        this.state = {
            Modal:false,
            listadoCarrito,
            stock:props.props.stock
        };
        //interconectar la informacion para poder utilizar las props(del argumento en el metodo toggle)
        this.toggle = this.toggle.bind(this);
        //utilizamos las props que recibe el constructor y compartirlas en nuestro metodo agregarCarrito()
        this.agregarCarrito = this.agregarCarrito.bind(this);
        //bind hace que los argumentos recibidos por la clase FichaProducto puedan ser compartidos a los demas metodos de la clase
    }
    //llamaremos al objeto de nuestra clase
    toggle(){
        //definir el estado del modal
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    agregarCarrito(){
        listadoCarrito.push({
        "titulo": this.props.props.titulo,
        "precio": this.props.props.precio
        });
        this.setState(prevState =>({
            modal: !prevState.modal,
        }));
        //validamos que el stock no quede en un numero negativo
        if (this.state.stock!==0) {
            //se agrega el producto al carrito y el stock le quita -1
            this.setState(prevState=> ({
                stock: prevState.stock -1
            }))
        }
        else{
            //si no quedan productos mostrara una alert de producto agotado
            alert('Stock agotado!')

        }
        //de esta manera actuliza el badge usando el valor de length
        const badge = document.getElementById("BadgeCarrito");
        badge.innerText = listadoCarrito.length;
    }
    render(){
        return(
            //para comprobar creamos la funcionalidad o el accionador de boton
            <Container>
            <Button onClick={this.toggle}>Ver Ficha</Button>
            <Modal isOpen={this.state.modal}>
            <ModalHeader>{this.props.props.titulo}</ModalHeader>
            <ModalBody>
            <CardImg src={this.props.props.imagen}/>
            <p>El Detalle del producto seleccionado es el siguiente: </p>
            {this.props.props.descripcion}
            <p>Este producto tiene un valor de <b>{this.props.props.precio}</b> pesos.</p>
            <p>Existen <b>{this.state.stock}</b> unidades de este productos disponibles.</p>
            </ModalBody>
            <ModalFooter className="modalFooter">
            <Button color="primary" onClick={this.agregarCarrito}>Agregar al carrito</Button>
            <Button color="secondary" onClick={this.toggle}>Volver atras</Button>
            </ModalFooter>
            </Modal>
            </Container>
        );
    }
}
//Los Modals de bootstrap son unas capas ocultas DIV
//que en el codigo de la web contiene la informacion a mostrar cuando hacemos visibles mediante un enlace o boton
export default FichaProducto;

