import Nav from './Nav.js';
import Kategori from './Kategori.js';
import Urun from './Urun.js';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
        <Nav/>
        </Row> <br /> <br/>
        <Row>
          <Col xs="3"> <Kategori/></Col>
          <Col xs="9"> <Urun/></Col>
       
       
        </Row>
      </Container>
      
      
    </div>
  );
}

export default App;
