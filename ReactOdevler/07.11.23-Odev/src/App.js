import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="header">
        <div class="logo">
          <img src={logo} className="logo"/>
        </div>
        <div class="menu">
          <ul>
            <li>
              <a href="#">Anasayfa</a>
            </li>
            <li>
              <a href="#">Hakkımızda</a>
            </li>
            <li>
              <a href="#">Şubelerimiz</a>
            </li>
            <li>
              <a href="#">E-İşlem</a>
            </li>
            <li>
              <a href="#">İletişim</a>
            </li>
          </ul>
        </div>
      </header>

   
        
     <div className="kategoriler">
        <ul>
          <li><a href="#">Etkinlik/Hobi</a></li>
          <li><a href="#">Elektronik</a></li>
          <li><a href="#">Giyim</a></li>
          <li><a href="#">Züccaciye</a></li>
          <li><a href="#">Ev Tekstili</a></li>
          <li><a href="#">Aydınlatma</a></li>
          <li><a href="#">Bahçe</a></li>
          
         
        </ul>
     </div>

        <div className="urunler">

        <div className="etkinlikler">
        <a href="#" >
          <div className="etknlk" style={{backgroundColor: "lightseagreen"}}>
            <div className="etknlk-image etk-1"></div>
            <h2>KİTAP</h2>
          </div>
        </a>

        <a href="#">
          <div className="etknlk" style={{backgroundColor: "lightgreen"}}>
            <div className="etknlk-image etk-3"></div>
            <h2>OYUN KONSOLU</h2>
          </div>
        </a>

        <a href="#">
          <div className="etknlk" style={{backgroundColor: "plum"}}>
            <div className="etknlk-image etk-2"></div>
            <h2>DANS KIYAFETİ</h2>
          </div>
        </a>
      </div>

      <div className="etkinlikler">
        <a href="#">
          <div className="etknlk" style={{backgroundColor: "coral"}}>
            <div className="etknlk-image etk-5"></div>
            <h2>TUVAL</h2>
          </div>
        </a>

        <a href="#">
          <div className="etknlk" style={{backgroundColor: "lightskyblue"}}>
            <div className="etknlk-image etk-4"></div>
            <h2>KULAKLIK</h2>
          </div>
        </a>

        <a href="#">
          <div className="etknlk" style={{backgroundColor: "khaki"}}>
            <div className="etknlk-image etk-6"></div>
            <h2>BULMACA</h2>
          </div>
        </a>
      </div>
            
        </div>
    </div>
  );
}

export default App;
