'use client'

import { useEffect, useState } from "react"
import apiMovie from "../service/apiMovies"
import Pagina from "../componetes/Pagina"
import { Card, Col, Row } from "react-bootstrap"
import Link from "next/link"

export default function Page() {
    const [seres, setSeres] = useState([])
    useEffect(() => {
        apiMovie.get('tv/popular').then(result => {
            setSeres(result.data.results)
        },[])
    })
    return (
        <Pagina titulo="Seres">
            <Row md={3}>
                {seres.map(item => (
                    <Col key={item.id} className="md-3" >
                    <Card>
                    <Card.Img height={150} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
                        <Card.Body>

                            <Card.Title>{item.name}</Card.Title>
                           <Card.Text>{item.original_name}</Card.Text>
                                <Card.Text>Popularidade: {item.popularity}</Card.Text>
                                <Link className="btn btn-danger" href={`/seres/${item.id}`}>Detalhes</Link>
                        </Card.Body>
                        
                                
                    </Card>
                    </Col>
                ))}</Row>
        </Pagina>
    )

}