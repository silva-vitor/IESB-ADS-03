'use client'

import { Button, Card, Row, Col } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";
import Pagina from "../components/Pagina";

const carros = [
  { id: 1, marca: 'GM', modelo: 'Opala', ano: 1982, foto: 'https://www.picellileiloes.com.br/arquivos/leiloes/lotes/imagens/06441a1a399e50.jpeg' },
  { id: 2, marca: 'GM', modelo: 'Monza', ano: 1985, foto: 'https://www.picellileiloes.com.br/arquivos/leiloes/lotes/imagens/5fbf92385900d.peg' },
  { id: 3, marca: 'VW', modelo: 'Gol', ano: 2020, foto: 'https://s2-autoesporte.glbimg.com/ZTzKav3WLG2zLURhAMDiucGkiG4=/0x0:1900x1267/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/w/7/6amEd4QhurR2kymkZsxg/vw-gol-automatico-q98a9798-credito-marcelo-brandt-g1.jpg' },
  { id: 4, marca: 'Toyota', modelo: 'Supra', ano: 2016, foto: 'https://www.motortrend.com/uploads/sites/5/2019/05/2020-Toyota-GR-Supra-144.jpg?fit=around%7C875:492' },
  { id: 5, marca: 'Tesla', modelo: 'Model S', ano: 2018, foto: 'https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/uploads/2018/05/07155808/Tesla-Model_S-2017-1280-07.jpg' },
  { id: 6, marca: 'Fiat', modelo: 'Marea', ano: 1995, foto: 'https://mundofixa.com/wp-content/uploads/2018/02/carro1.jpg' }
];

export default function Home(props) {
  return (
    <>
      <Cabecalho /> 

      <Pagina titulo="Carros">
        <Row className="row-cols-xl-4 row-cols-md-2 row-cols-sm-2 row-cols-1">
          {carros.map(car => (
            <Col key={car.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={car.foto} />
                <Card.Body>
                  <Card.Title>{car.marca} {car.modelo}</Card.Title>
                  <Card.Text>
                    Ano: {car.ano}
                  </Card.Text>
                  <Button variant="primary">Ver mais</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Pagina>
    </>
  );
}
