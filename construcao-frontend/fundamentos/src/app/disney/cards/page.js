

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
            <Row md={4}>

                {personagens.map(item => (
                    <Col key={item.id} className="mt-3">
                        <Card >
                            <Card.Img style={{ height: 150 }} variant="top" src={item.imageUrl} />
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