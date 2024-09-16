import Pagina from "@/app/componetes/Pagina"
import apiMovie from "@/app/service/apiMovies"
import Link from "next/link"
import { useEffect } from "react"
import { Card, Col, Row } from "react-bootstrap"

export default function Page({params}) {

    const [series, setSeries] = useState([])

    useEffect(() => {
        apiMovie.get(`tv/${params.tipo}`).then(resultado => {
            setSeries(resultado.data.results)
        })
    }, [])

    return (
        <Pagina titulo="Séries">

            <Row  md={3}>
                {series.map(item => (
                    <Col key={item.id} className="mt-3">
                        <Card>
                            <Card.Img height={150} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.original_name}</Card.Text>
                                <Card.Text>Popularidade: {item.popularity}</Card.Text>
                                <Link className="btn btn-danger" href={`/series/${item.id}`}>
                                    Detalhes
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {series.map(item => (
                <p>{item.title}</p>
            ))}

        </Pagina>
    )
}