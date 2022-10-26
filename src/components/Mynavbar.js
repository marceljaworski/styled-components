import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function Mynavbar() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Rado's Blog</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#management">MANAGEMENT</Nav.Link>
                <Nav.Link href="#graphql">GRAPHQL</Nav.Link>
                <Nav.Link href="#react">REACT</Nav.Link>
                <Nav.Link href="#ruby">RUBY ON RAILS</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                Signed in as: <a href="#login">Marcel</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Mynavbar;