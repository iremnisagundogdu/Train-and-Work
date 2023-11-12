import React, { useState } from "react";

function Ders() {
  const [dersKodu, setdersKodu] = useState();
  const [ders, setders] = useState([
    {
      count: 0,
      editCount: 0,
      dersKodu: "BIL3452",
      dersBolumu: "Bil.Müh",
      dersDonemi: "Güz",
      dersAdi: "Bilgisayar Teknolojileri",
      dersKredisi: "4",
      dersGorevlisi: "Ahmet Çakır",
      dersGunu: "Salı",
      dersSaati: "11.00-12.00",
    },
  ]);
  const [dersBolumu, setdersBolumu] = useState("");
  const [dersDonemi, setdersDonemi] = useState("");
  const [dersAdi, setdersAdi] = useState("");
  const [dersKredisi, setdersKredisi] = useState();
  const [dersGorevlisi, setdersGorevlisi] = useState("");
  const [dersGunu, setdersGunu] = useState("");
  const [dersSaati, setdersSaati] = useState("");
  const [count, setcount] = useState(0);
  const [editCount, seteditCount] = useState(0);
  const [mode, setMode] = useState("add");

  const Ekle = () => {
    if (
      dersKodu &&
      dersBolumu &&
      dersDonemi &&
      dersAdi &&
      dersKredisi &&
      dersGorevlisi &&
      dersGunu &&
      dersSaati
    ) {
      setcount(count + 1);
      setders([
        ...ders,
        {
          id: count,
          dersKodu: dersKodu,
          dersBolumu: dersBolumu,
          dersDonemi: dersDonemi,
          dersAdi: dersAdi,
          dersKredisi: dersKredisi,
          dersGorevlisi: dersGorevlisi,
          dersGunu: dersGunu,
          dersSaati: dersSaati,
          editCount: editCount,
        },
      ]);
      console.log(count);
      setdersKodu("");
      setdersBolumu("");
      setdersDonemi("");
      setdersAdi("");
      setdersKredisi("");
      setdersGorevlisi("");
      setdersGunu("");
      setdersSaati("");
    }
  };

  const Düzenle = (i) => {
    setdersKodu(i.dersKodu);
    setdersBolumu(i.dersBolumu);
    setdersDonemi(i.dersDonemi);
    setdersAdi(i.dersAdi);
    setdersKredisi(i.dersKredisi);
    setdersGorevlisi(i.dersGorevlisi);
    setdersGunu(i.dersGunu);
    setdersSaati(i.dersSaati);
    setcount(i.count);
    seteditCount(i.count);
    setMode("edit");
    console.log(editCount);
  };
  const Güncelle = () => {
    const yeniDers = ders.map((i) => {
      return i.count === editCount
        ? { 
            ...i, // Mevcut değerleri kopyalamak.
            id: count,
            dersKodu: dersKodu,
            dersBolumu: dersBolumu,
            dersDonemi: dersDonemi,
            dersAdi: dersAdi,
            dersKredisi: dersKredisi,
            dersGorevlisi: dersGorevlisi,
            dersGunu: dersGunu,
            dersSaati: dersSaati,
          }
        : i;
    });
    setders(yeniDers);
    setdersKodu("");
    setdersBolumu("");
    setdersDonemi("");
    setdersAdi("");
    setdersKredisi("");
    setdersGorevlisi("");
    setdersGunu("");
    setdersSaati("");
    seteditCount("");
    setMode("add");
  };
  return (
    <div className="main">
      <div className="content">
        <h1 className="baslik">DERS EKLE-SİL</h1>

        <div class="input-group mb-3 xyz">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Ders Kodu
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={dersKodu}
            onChange={(e) => setdersKodu(e.target.value)}
          />
        </div>
        <div class="input-group mb-3 xyz">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Ders Bölümü
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={dersBolumu}
            onChange={(e) => setdersBolumu(e.target.value)}
          />
        </div>

        <div class="input-group mb-3 xyz">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Ders Dönemi
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={dersDonemi}
            onChange={(e) => setdersDonemi(e.target.value)}
          />
        </div>

        <div class="input-group mb-3 xyz ">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Ders Adı
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={dersAdi}
            onChange={(e) => setdersAdi(e.target.value)}
          />
        </div>

        <div class="input-group mb-3 xyz ">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Ders Kredisi
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={dersKredisi}
            onChange={(e) => setdersKredisi(e.target.value)}
          />
        </div>

        <div class="input-group mb-3 xyz">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Ders Görevlisi
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={dersGorevlisi}
            onChange={(e) => setdersGorevlisi(e.target.value)}
          />
        </div>
        <div class="input-group mb-3 xyz">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Ders Günü
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={dersGunu}
            onChange={(e) => setdersGunu(e.target.value)}
          />
        </div>
        <div class="input-group mb-3 xyz">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Ders Saati
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={dersSaati}
            onChange={(e) => setdersSaati(e.target.value)}
          />
        </div>
        {mode === "add" ? (
          <button className="btn-outline-aqua ekle" onClick={Ekle}>
            Ekle
          </button>
        ) : (
          <button className="btn-outline-aqua ekle" onClick={Güncelle}>
            Güncelle
          </button>
        )}
      </div>

      <div className="list">
        <h1 className="baslik tablobaslik">DERS TABLOSU</h1>
        <table class="table-striped">
          <tr>
            <th>Ders Kodu</th>
            <th>Ders Bölümü</th>
            <th>Ders Dönemi</th>
            <th>Ders Adı</th>
            <th>Ders Kredisi</th>
            <th>Ders Görevlisi</th>
            <th>Ders Günü </th>
            <th>Ders Saati</th>
            <th>Sil</th>
            <th>Güncelle</th>
          </tr>
          {ders.map((e, index) => {
            return (
              <tr key={index}>
                <td>{e.dersKodu}</td>
                <td>{e.dersBolumu}</td>
                <td>{e.dersDonemi}</td>
                <td>{e.dersAdi}</td>
                <td>{e.dersKredisi}</td>
                <td>{e.dersGorevlisi}</td>
                <td>{e.dersGunu}</td>
                <td>{e.dersSaati}</td>
                <td>
                  <button
                    className="btn-outline-aqua silbuton"
                    onClick={() => setders(ders.filter((a) => a.id != e.id))}
                  >
                    Sil
                  </button>{" "}
                </td>
                <td>
                  <button
                    className="btn-outline-aqua silbuton"
                    onClick={() => Düzenle(e)}
                  >
                    Düzenle
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Ders;
