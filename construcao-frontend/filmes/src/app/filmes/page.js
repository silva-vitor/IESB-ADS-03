'use client'

import { useEffect, useState } from "react";
import Pagina from "../components/Pagina";
import apiMovie from "@/services/apiMovies";
import { Button, Card, Col, Row } from "react-bootstrap";

export default function Page() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        apiMovie.get('movie/popular').then(resultado => {
            setFilmes(resultado.data.results);
        });
    }, []);

    return (
        <Pagina titulo='Filmes'> {/* Corrigido de 'tutulo' para 'titulo' */}
            <Row md={3}>
                {filmes.map(item => (
                    <Col className="mt-3" key={item.id}> {/* Adicionando a propriedade key */}
                        <Card>
                            <Card.Img 
                                height={150} 
                                variant="top" 
                                src={'https://image.tmdb.org/t/p/w500/' + (item.backdrop_path || 'default.jpg')} 
                                alt={item.title} // Adicionando atributo alt para acessibilidade
                            />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <p><b>Título Original:</b> {item.original_title}</p> {/* Adicionado espaço entre ":" e o texto */}
                                </Card.Text>
                                <Button variant="primary" href={`filmes/${item.id}`}>Detalhes</Button> {/* Usando variant="primary" */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    );
}
