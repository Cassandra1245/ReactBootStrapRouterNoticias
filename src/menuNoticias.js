import NoticiasContext from './NoticiasContext';
import { Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
import { useContext } from 'react'

function MenuNoticias() {
    const { noticias } = useContext(NoticiasContext);

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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MenuNoticias;
