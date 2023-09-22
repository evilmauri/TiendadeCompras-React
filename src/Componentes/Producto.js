import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap';
import FichaProducto from './FichaProducto';
import './Producto.css';


//Todo componente de React tiene un metodo
//Render que es el que se encarga de renderizar en el navegador el HTML transformando el JSX a HTML
class Producto extends React.Component{
    render(){
    return(
        <Col sm="4">
        <Card className="Card" body outline color="primary">
            <CardImg src={this.props.imagen}/>
            <CardBody>
                <CardTitle>{this.props.titulo}</CardTitle>
                <CardSubtitle><b>Valor: </b>{this.props.precio}</CardSubtitle>
                <CardText>
                    {this.props.descripcion}
                    </CardText>
                    <FichaProducto props={this.props}/>
            </CardBody>
        </Card>
        </Col>
    );
    }
}
//THIS hace referencia a las propiedades que pertenecen al objeto Producto
export default Producto;