'use client'

import { useEffect, useState } from "react"
import { Card, Col, Row } from "react-bootstrap"
import Pagina from "../componetes/Pagina"
import apiMovie from "../service/apiMovies"
import Link from "next/link"

export default function Page() {
    const [atores, setAtores] = useState([])

    useEffect(() => {
        apiMovie.get('person/popular').then(resultado => {
            setAtores(resultado.data.results)
        })
    }, [])

    return (
        <Pagina titulo="Atores">
            <Row md={6}>
                {atores.map(item => (
                    <Col key={item.id} className="mt-3">
                        <Card title={item.name}>
                            <Link href={`/atores/${item.id}`}>
                                <Card.Img height={150} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}
