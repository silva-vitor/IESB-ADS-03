import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina(props){

    return(
        <>
         <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/filmes">Filmes</Nav.Link>
                        <Nav.Link href="/seres">Series</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>

            <div className="bg-secondary text-white text-center p-3">
                <h1>{props.titulo}</h1>
            </div>
            <Container>
                {props.children}
            </Container>
        </>
    )
}