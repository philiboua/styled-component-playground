import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {
  ButtonStyles,
  mediaContainerStyles,
  Section,
  Paragraph
} from "./atoms/styles.jsx";

const Button = styled.button`
  ${ButtonStyles};
`;

function App() {
  return (
    <div className="App">
      <Section>
        <Paragraph>Look at my buttons, they are amazing buttons !</Paragraph>
        <Button primary>A Primary Button</Button>
        <Button secondary>A Primary Button</Button>
      </Section>
      <mediaContainer syles={{ mediaContainerStyles }}>
        {" "}
        <p>lemonde</p>
      </mediaContainer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
