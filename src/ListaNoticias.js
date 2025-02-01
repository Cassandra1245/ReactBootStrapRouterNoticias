import React, { useContext } from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import NoticiasContext from './NoticiasContext';
import MenuNoticias from './menuNoticias';

function ListaNoticias() {
    const {noticiasFiltradas} = useContext(NoticiasContext); // Consumimos las noticias filtradas

    return (
        <div className="App">
            <MenuNoticias/>

            <Row>
                {noticiasFiltradas.map((dato) => (
                    <Col key={dato.titulo} xs={12} md={3} xl={3}>
                        <Card className="m-3">
                            <Card.Header>
                                <Card.Title>{dato.titulo}</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item><strong>Contenido:</strong> {dato.contenido}</ListGroup.Item>
                                    <ListGroup.Item><strong>Categoría:</strong> {dato.categoria}</ListGroup.Item>
                                    <ListGroup.Item><strong>Autor:</strong> {dato.autor}</ListGroup.Item>
                                    <ListGroup.Item><strong>Fecha:</strong> {dato.fecha}</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ListaNoticias;
