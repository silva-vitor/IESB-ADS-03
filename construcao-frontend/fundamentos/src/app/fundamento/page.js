import { Alert, Container } from "react-bootstrap";
import Cabecalho from "@/app/components/Cabecalho";
import Link from "next/link";
import Pagina from "@/app/components/Pagina";

export default function Fundamentos() {
  return (
    <Pagina>
      <Cabecalho titulo="Fundamentos" />

      <Container>
        <Alert variant="warning">
          Atenção! Preste muita atenção.
        </Alert>

        <Link href="/">Página Inicial</Link><br />

        <h1>Fundamentos</h1>

        <p>Sucesso</p>

        <Cabecalho titulo="Vitor" sub="Olha" />
      </Container>
    </Pagina>
  );
}
