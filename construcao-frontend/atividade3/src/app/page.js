
import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho"; //importando o cabecalho
import Link from "next/link";


export default function Home() {


  return (

    <main >
      <Button variant="primary">Primary</Button>{' '}

      <Cabecalho titulo="vitor" sub="olha" />
      <Cabecalho titulo="frontend" sub="vitor Pereira" />
      <Cabecalho titulo="construcao" sub="vitor Pereira" />
      <Cabecalho titulo="fundamentos" sub="vitor Pereira" />

      <Link href="/fundamentos">Pagina Fundamentos</Link><br />
    </main>
  );
}