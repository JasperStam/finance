import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import { Button, Header, Input } from "../components/ui";
import viewStore from "../store/View";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Body = styled.div`
  h3 {
    margin: 0 0 1rem 0;
  }
  padding: 1rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Block = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 4px;
`;

const Label = styled.label`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Login: React.FC = observer(() => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    viewStore.performLogin(username, password);
  };
  return (
    <Container>
      <Header>Green sofa</Header>
      <Body>
        <Block>
          <form onSubmit={submit}>
            <h3>Login</h3>
            <Label>
              Username
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Label>
            <Label>
              Password
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Label>
            <Button type="submit">Submit</Button>
          </form>
        </Block>
      </Body>
    </Container>
  );
});
