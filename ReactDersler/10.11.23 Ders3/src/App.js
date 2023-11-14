import Nav from './Nav.js';
import Kategori from './Kategori.js';
import Urun from './Urun.js';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
function App() {
  // let titleKategori="Kategori";
  // let titleUrun="Urun";
  let kategoriObject = { title:"Kategori", list:"Kategori Lİstesi"}
  let urunObject={title:"Ürün" , list:"Ürün Listesi"};
  let navObject = {title: "Navbar"};
  
  return (
    <div className="App">
      <Container>
        <Row>
        {/* <Nav title="Navbar"/> */}
        <Nav nObject = {navObject}/>
        </Row> <br /> <br/>
        <Row>
          {/* <Col xs="3"> <Kategori title={titleKategori} /></Col>
          <Col xs="9"> <Urun title= {titleUrun} /></Col> */}
          <Col xs="3"> <Kategori kObject ={kategoriObject} /></Col>
          <Col xs="9"> <Urun uObject = {urunObject} /></Col> 
        </Row>
      </Container>
      
      
    </div>
  );
}

export default App;
