import NoticiasContext from './NoticiasContext';
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { useContext, useState } from "react";

function MenuNoticias() {
    const { noticias, filtrarNoticias } = useContext(NoticiasContext); 
    const [busqueda, setBusqueda] = useState("");

    const handleBusqueda = (e) => {
        setBusqueda(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        filtrarNoticias(busqueda); 
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Noticias</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Autores" id="basic-nav-dropdown">
                            {noticias.map((dato) => (
                                <div key={dato.titulo}>
                                    <NavDropdown.Item href="#action/3.1">{dato.autor}</NavDropdown.Item>
                                </div>
                            ))}
                        </NavDropdown>
                        <NavDropdown title="Noticias" id="basic-nav-dropdown">
                            {noticias.map((dato) => (
                                <div key={dato.titulo}>
                                    <NavDropdown.Item href="#action/3.1">{dato.titulo}</NavDropdown.Item>
                                </div>
                            ))}
                        </NavDropdown>
                    </Nav>
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Buscar noticia"
                            className="form-control me-2"
                            value={busqueda}
                            onChange={handleBusqueda}
                        />
                        <Button variant="outline-primary" type="submit">Buscar</Button>
                    </form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MenuNoticias;
