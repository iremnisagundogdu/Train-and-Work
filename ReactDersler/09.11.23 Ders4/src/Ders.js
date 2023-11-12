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
    },
  ]);
  const [dersBolumu, setdersBolumu] = useState("");
  const [dersDonemi, setdersDonemi] = useState("");
  const [dersAdi, setdersAdi] = useState("");
  const [count, setcount] = useState(0);
  const [editCount, seteditCount] = useState(0);
  const [mode, setMode] = useState("add");

  const Ekle = () => {
    if (
      dersKodu &&
      dersBolumu &&
      dersDonemi &&
      dersAdi
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
          editCount: editCount,
        },
      ]);
      console.log(count);
      setdersKodu("");
      setdersBolumu("");
      setdersDonemi("");
      setdersAdi("");
    }
  };

  const Düzenle = (i) => {
    setdersKodu(i.dersKodu);
    setdersBolumu(i.dersBolumu);
    setdersDonemi(i.dersDonemi);
    setdersAdi(i.dersAdi);
    setcount(i.count);
    seteditCount(i.count);
    setMode("edit");
  };
  const Güncelle = () => {
    const yeniDers = ders.map((i) => {
      return i.count === editCount
        ? { 
            ...i,
            id: count,
            dersKodu: dersKodu,
            dersBolumu: dersBolumu,
            dersDonemi: dersDonemi,
            dersAdi: dersAdi,
          }
        : i;
    });
    setders(yeniDers);
    setdersKodu("");
    setdersBolumu("");
    setdersDonemi("");
    setdersAdi("");
    seteditCount("");
    setMode("add");
  };
  return (
    <div>
      <div>
        <div>
          <span>
            Ders Kodu
          </span>
          <input
            type="text"
            value={dersKodu}
            onChange={(e) => setdersKodu(e.target.value)}
          />
        </div>
        <div>
          <span>
            Ders Bölümü
          </span>
          <input
            type="text"
            value={dersBolumu}
            onChange={(e) => setdersBolumu(e.target.value)}
          />
        </div>

        <div>
          <span>
            Ders Dönemi
          </span>
          <input
            type="text"
            value={dersDonemi}
            onChange={(e) => setdersDonemi(e.target.value)}
          />
        </div>

        <div>
          <span>
            Ders Adı
          </span>
          <input
            type="text"
            value={dersAdi}
            onChange={(e) => setdersAdi(e.target.value)}
          />
        </div>
        {mode === "add" ? (
          <button onClick={Ekle}>
            Ekle
          </button>
        ) : (
          <button onClick={Güncelle}>
            Güncelle
          </button>
        )}
      </div>

      <div>
        <table>
          <tr>
            <th>Ders Kodu</th>
            <th>Ders Bölümü</th>
            <th>Ders Dönemi</th>
            <th>Ders Adı</th>
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
                <td>
                  <button
                    onClick={() => setders(ders.filter((a) => a.id != e.id))}
                  >
                    Sil
                  </button>{" "}
                </td>
                <td>
                  <button
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
