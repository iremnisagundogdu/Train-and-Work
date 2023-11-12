import React, { useState } from "react";

function NoteList() {
  const [list, setList] = useState([
    {
      id: 0,
      description: "açıklama",
      title: "başlık",
    },
    {
      id: 1,
      description: "açıklama",
      title: "başlık",
    },
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [count, setCount] = useState(1);

  const Ekle = () => {
    setCount(count + 1);

    setList([...list, { id: count, title: newTitle, description: newDesc }]);
    setNewTitle("");
    setNewDesc("");
  };
  return (
    <div>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        value={newDesc}
        onChange={(e) => setNewDesc(e.target.value)}
      />
      <button onClick={Ekle}>Ekle</button>

      {list.map((e, index) => {
        return (
          <div key={index}>
            <ul>
              <li>{e.title}</li>
              <li>{e.description}</li>
            </ul>
          
          </div>
        );
      })}
    </div>
  );
}

export default NoteList;
