import Card from 'react-bootstrap/Card';
function Mycard({el}) {
    console.log(el.title)
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {el.img} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>
            {el.text}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default Mycard;