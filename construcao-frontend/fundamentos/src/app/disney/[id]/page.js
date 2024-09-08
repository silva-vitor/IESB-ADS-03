


'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";

export default function Page({ params }) {
    const [personagem, setPersonagem] = useState({})
    useEffect(() => {
        apiDisney.get(`character/${params.id}`).then(resultado => {
            setPersonagem(resultado.data.data)
        })
    }, [])
    return (
        <Pagina titulo="Disney Detalhes">
            {
                personagem._id &&
                <div>
                    <Row className="mt-3">
                        <Col md={4}>
                            <img src={personagem.imageUrl} />
                        </Col>

                        <Col>
                            <p><b>Nome: </b>{personagem.name}</p>
                            <p><b>Data de Criação: </b>{personagem.createdAt}</p>
                            <p><a target="_blank" href={personagem.sourceUrl}>Ver Pagina Original</a></p>
                        </Col>
                        <Col md={8} className="mt-3">
                            <Card border="success" >
                                <Card.Header className="bg-primary text-white">Filmes</Card.Header>
                                <Card.Body>
                                    {personagem.films.map(item => (
                                        <ListGroup>
                                            <ListGroup.Item>{item}</ListGroup.Item>

                                        </ListGroup>
                                    ))}

                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={6} className="mt-3">
                            <Card border="black" >
                                <Card.Header className="bg-primary text-white">Seres</Card.Header>
                                <Card.Body>
                                    {personagem.tvShows.map(item => (
                                        <ListGroup>
                                            <ListGroup.Item>{item}</ListGroup.Item>

                                        </ListGroup>
                                    ))}

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>

                    
                </div>
            }

        </Pagina>

    )
}