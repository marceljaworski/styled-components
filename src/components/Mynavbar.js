import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Mynavbar() {
    return (
      <Navbar bg="dark" variant="dark">
        <h1 bg="dark" variant="dark">Rado's Blog</h1>
        <Container>
            
          <Navbar.Brand href="#home">HOME</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Mynavbar;