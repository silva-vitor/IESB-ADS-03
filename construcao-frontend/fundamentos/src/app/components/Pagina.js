import { Container, Dropdown, DropdownButton, Nav, Navbar } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/array">Array</Nav.Link>
                        <Nav.Link href="/clientes">Clinetes</Nav.Link>
                        <Nav.Link href="/fundamento">fundamentos</Nav.Link>
                        <Nav.Link href="/nomes">nomes</Nav.Link>
                        <Nav.Link href="/numeros">Numeros</Nav.Link>
                        <Nav.Link href="/objetos">Carros</Nav.Link>

                        <DropdownButton  title="Disney">
                            <Dropdown.Item href="/disney">Disney</Dropdown.Item>

                            <Dropdown.Item href="/disney/cards">Cards</Dropdown.Item>

                            <Dropdown.Item href="/disney/carrossel">Carrossel</Dropdown.Item>

                            <Dropdown.Item href="/disney/tabela">tabela</Dropdown.Item>

                        </DropdownButton>



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