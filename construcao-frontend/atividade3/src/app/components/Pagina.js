import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/fundamentos">Fundamentos</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/array">Carros</Nav.Link>
                        <Nav.Link href="/nomes">Nomes</Nav.Link>
                        <Nav.Link href="/clientes">Clinetes</Nav.Link>

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