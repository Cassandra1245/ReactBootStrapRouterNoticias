import NoticiasContext from './NoticiasContext';
import MenuNoticias from './menuNoticias';
import { Navbar, Nav, NavDropdown, Container, Col, Row, Card, CardBody, ListGroup, CardFooter, Button } from "react-bootstrap";
import { useContext } from 'react'
import React from 'react';

function ListaNoticias() {
    const { noticias } = useContext(NoticiasContext);


    return (


        <div className="App">
            <MenuNoticias />


            {noticias.map((data) => (
                <div key={data.titulo}>
                    <p>{data.titulo}</p>
                    <p>{data.contenido}</p>
                </div>
            ))}

            <Row>
                {noticias.map((dato) => (
                    <Col xs={12} md={3} xl={3}>
                        <Card key={dato.titulo} className="m-3">
                            <Card.Header>
                                <Card.Title>{dato.titulo}</Card.Title>
                            </Card.Header>
                            <CardBody>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Contenido: {dato.contenido}</ListGroup.Item>
                                    <ListGroup.Item>Categoria: {dato.categoria}</ListGroup.Item>
                                    <ListGroup.Item>Autor: {dato.autor}</ListGroup.Item>
                                    <ListGroup.Item>Fecha: {dato.fecha}</ListGroup.Item>
                                </ListGroup>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>



    )
}

export default ListaNoticias;