
import './App.css';
import Mycard from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Data from './Data.json'
import Mynavbar from './components/Mynavbar';

function App() {
  const cards = Data.map((props, index)=>{
    return <Col><Mycard el={props} key= {index} /></Col>
  })
  return (
    <div className="App">
      <Mynavbar/>
      
      <Container>
        <Row>
          {cards}
        </Row>
      </Container>
    </div>
  );
}

export default App;
