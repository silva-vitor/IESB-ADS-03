import { Alert, Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";
import Link from "next/link";



export default function Fundamentos() {
  return (


    <>
      <Cabecalho titulo=" fundamentos" />

      <Container>

        <Alert>
          Atenção! Preste muita tenção.
        </Alert>


        <Link href="/">Pagina Inicial</Link><br />

        <h1>Fundamentos</h1>

        <p>Sucesso</p>

        <Cabecalho titulo="vitor" sub="olha" />
      </Container>
    </>

  )
}
