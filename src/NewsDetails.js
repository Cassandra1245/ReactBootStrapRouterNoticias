import React, { useContext } from "react";
import { Row, Col, Container, Card, ListGroup } from "react-bootstrap";
import NoticiasContext from './NewsContext';
import MenuNoticias from './NewsMenu';  // Asegúrate de que el nombre del archivo sea correcto
import { useParams } from "react-router-dom";

function NewsDetails() {
    const { noticias } = useContext(NoticiasContext);
    const { filtro } = useParams();  

    const noticiasFiltradas = noticias.filter(noticia => 
        noticia.titulo === filtro || noticia.categoria === filtro
    );


    return (
        <div className="App">
            <MenuNoticias />
            <Row>
                {noticiasFiltradas.map((noticia) => (
                    <Col xs={12} md={3} xl={3} key={noticia.titulo}>
                        <Card className="m-3">
                            <Card.Header>
                                <Card.Title>{noticia.titulo}</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item><strong>Contenido:</strong> {noticia.contenido}</ListGroup.Item>
                                    <ListGroup.Item><strong>Categoría:</strong> {noticia.categoria}</ListGroup.Item>
                                    <ListGroup.Item><strong>Autor:</strong> {noticia.autor}</ListGroup.Item>
                                    <ListGroup.Item><strong>Fecha:</strong> {noticia.fecha}</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default NewsDetails;
