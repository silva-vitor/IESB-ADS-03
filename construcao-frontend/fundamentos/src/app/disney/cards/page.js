

'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function Page() {

    const [personagens, setPersonages] = useState([])
    useEffect(() => {
        apiDisney.get('character').then(resultado => {
            setPersonages(resultado.data.data)
        })
    }, [])
    return (
        <Pagina titulo=" Disney cards">
            <Row md={3}>

                {personagens.map(item => (
                    <Col key={item.id}>
                        <Card >
                            <Card.Img style={{ height: 300 }} variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>


                            </Card.Body>
                        </Card>

                    </Col>
                ))}

            </Row>

        </Pagina>

    )
}