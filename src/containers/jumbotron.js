import React from "react";
import Jumbodata from "../fixtures/jumbo";
import { Jumbotron } from "../components";

export default function JumbotronContainer({ index, setIndex }) {
  return (
    <Jumbotron.Container>
      {Jumbodata.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane name={`jumbo-item-${item.id}`}>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
