import React, { useContext } from "react";
import { Row, Col, Container} from "react-bootstrap";
import NoticiasContext from './NewsContext';
import { Outlet, Link} from 'react-router';

function ListaNoticias() {
    const { noticias } = useContext(NoticiasContext);

    return (
        <div className="app-container">
            <header>
                {noticias.map((dato) => (
                    <ul key={dato.titulo}>
                        <li><Link to={`/NewsDetails/${dato.titulo}`}><strong>{dato.titulo}</strong></Link></li>
                    </ul>
                ))}
            </header>

            <section className="hero">
                <Container>
                    <Row>
                        <Col>
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    );
}

export default ListaNoticias;
