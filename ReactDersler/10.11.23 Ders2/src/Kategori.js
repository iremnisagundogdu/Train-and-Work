import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

function Kategori(props) {
  return (
    <div>
      <h2>{props.title}</h2>

      <ListGroup>
        <ListGroupItem color="success">Cras justo odio</ListGroupItem>
        <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
        <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default Kategori;
