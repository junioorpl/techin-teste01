import React, { useCallback, useState } from 'react';
import logo from "./logo.svg";

import { Container, Header } from './styles';

const App = () => {
  const [show, setShow] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = useCallback(() => {
    setNome(email.split('@')[0]);
    if (!!password)
      setShow(true);
  }, [email, password])


  return (
    <Container>
      {show ? (
        <Header>
          <img src={logo} alt="logo" />
          <h1>Bem vindo {nome}</h1>
        </Header>
      ) : (
          <Header >
            <img src={logo} alt="logo" />
            <input
              name="email"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type={"password"}
              onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>
              Logar
          </button>
          </Header>
        )}
    </Container>
  );;
}

export default App;