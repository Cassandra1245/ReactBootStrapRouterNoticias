import NoticiasContext from './NewsContext';
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { Link } from 'react-router';

function MenuNoticias() {
    const { noticias, filtrarNoticias } = useContext(NoticiasContext);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Noticias</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Titulares" id="basic-nav-dropdown">
                            {noticias.map((dato) => (
                                <div key={dato.titulo}>
                                    <NavDropdown.Item href="#action" as={Link} to={`/NewsDetails/${dato.titulo}`}>{dato.autor}</NavDropdown.Item>
                                </div>
                            ))}
                        </NavDropdown>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            {noticias.map((dato) => (
                                <div key={dato.titulo}>
                                    <NavDropdown.Item href="#action/3.1" as={Link} to={`/NewsDetails/${dato.categoria}`}>{dato.categoria}</NavDropdown.Item>
                                </div>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MenuNoticias;
