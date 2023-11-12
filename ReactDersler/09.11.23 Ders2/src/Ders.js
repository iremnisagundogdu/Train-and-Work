import React, { useState } from "react";

function Ders() {
  const [dersKodu, setdersKodu] = useState();
  const [dersAdi, setdersAdi] = useState("");
  const [count, setcount] = useState(0);
  const [ders, setders] = useState([
    {
      count: 0,
      dersKodu: "BIL3452",
      dersAdi: "Bilgisayar Teknolojileri",
    },
  ]);

  const Ekle = () => {
    if (dersKodu && dersAdi) {
      setcount(count + 1);
      setders([
        ...ders,
        {
          id: count,
          dersKodu: dersKodu,
          dersAdi: dersAdi,
        },
      ]);

      setdersKodu("");
      setdersAdi("");
    }
  };

  return (
    <div>
      <div>
        <div>
          <span>Ders Kodu</span>
          <input
            type="text"
            value={dersKodu}
            onChange={(e) => setdersKodu(e.target.value)}
          />
        </div>

        <div>
          <span>Ders Adı</span>
          <input
            type="text"
            value={dersAdi}
            onChange={(e) => setdersAdi(e.target.value)}
          />
        </div>
        <button className="btn-outline-aqua ekle" onClick={Ekle}>
          Ekle
        </button>
      </div>

      <div>
        <table>
          <tr>
            <th>Ders Kodu</th>
            <th>Ders Adı</th>
            <th>Sil</th>
          </tr>
          {ders.map((e, index) => {
            return (
              <tr key={index}>
                <td>{e.dersKodu}</td>
                <td>{e.dersAdi}</td>
                <td>
                  <button
                    onClick={() => setders(ders.filter((a) => a.id != e.id))}
                  >
                    Sil
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
