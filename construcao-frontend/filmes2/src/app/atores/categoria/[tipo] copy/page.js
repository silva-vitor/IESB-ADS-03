'use client'

import Pagina from "@/app/componetes/Pagina"
import apiMovie from "@/app/service/apiMovies"
import { useEffect } from "react"
import { Card, Col, Row } from "react-bootstrap"


export default function Page({params}) {

    const [atores, setAtores] = useState([])

    useEffect(() => {
        apiMovie.get(`person/${params.tipo}`).then(resultado => {
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

            {atores.map(item => (
                <p>{item.title}</p>
            ))}

        </Pagina>
    )
}