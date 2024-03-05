import { useState } from 'react';

import Button from '../../../shared/button/Button';
import Input from '../../../shared/Inputs/Input';
import {
  BackgroundImage,
  CointainerLoginScreen,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log({ userName, password });
  };

  return (
    <CointainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="logo.png" />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="USUÁRIO" margin="32px 0px 0px" value={userName} onChange={handleUserName} />
          <Input
            title="SENHA"
            margin="32px 0px 0px"
            type="password"
            value={password}
            onChange={handlePassword}
          />
          <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </CointainerLoginScreen>
  );
};

export default LoginScreen;
