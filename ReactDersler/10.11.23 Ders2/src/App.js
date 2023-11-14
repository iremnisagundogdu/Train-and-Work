import Nav from './Nav.js';
import Kategori from './Kategori.js';
import Urun from './Urun.js';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
function App() {
  let titleKategori="Kategori";
  let titleUrun="Urun";
  return (
    <div className="App">
      <Container>
        <Row>
        <Nav/>
        </Row> <br /> <br/>
        <Row>
          <Col xs="3"> <Kategori title={titleKategori} /></Col>
          <Col xs="9"> <Urun title= {titleUrun} /></Col>
       
       
        </Row>
      </Container>
      
      
    </div>
  );
}

export default App;
