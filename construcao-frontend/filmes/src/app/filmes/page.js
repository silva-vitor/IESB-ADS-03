'use client'

import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import apiMovie from "@/app/services/apiMovies";
import { Button, Card, Col, Row } from "react-bootstrap";

export default function Page() {
    const [filmes, setfilmes] = useState([]);

    useEffect(() => {
        apiMovie.get('movie/popular').then(resultado => {
            setfilmes(resultado.data.results);
        });
    }, []);

    return (
        <Pagina titulo="filmes">
            <Row md={3}>
                {filmes.map(item => (
                    <Col key={item.id} className="mt-3">
                        <Card>
                            <a href={``} target="_blank" rel="noopener noreferrer">
                                <Card.Img
                                    style={{ height: 150 }}
                                    variant="top"
                                    src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path}
                                    alt={item.title}
                                />
                            </a>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    );
}
