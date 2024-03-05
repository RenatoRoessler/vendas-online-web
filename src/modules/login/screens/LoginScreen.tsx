import axios from 'axios';
import { useState } from 'react';

import Button from '../../../shared/button/Button';
import SVGLogo from '../../../shared/button/icons/SVGLogo';
import Input from '../../../shared/Inputs/Input';
import {
  BackgroundImage,
  CointainerLoginScreen,
  ContainerLogin,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const returnObject = await axios({
      method: 'post',
      url: 'http://localhost:8080/auth',
      data: {
        email,
        password,
      },
    })
      .catch(() => {
        alert('Usuário ou senha invalida');
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((result: any) => {
        alert(`'Login efetuado com sucesso' ${result.data.accessToken}`);
        return result;
      });
    console.log(returnObject);
  };

  return (
    <CointainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="USUÁRIO" margin="32px 0px 0px" value={email} onChange={handleEmail} />
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
