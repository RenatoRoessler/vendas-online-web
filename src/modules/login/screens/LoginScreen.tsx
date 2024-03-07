import { useState } from 'react';

import Button from '../../../shared/components/button/Button';
import SVGLogo from '../../../shared/components/button/icons/SVGLogo';
import { useGlobalContext } from '../../../shared/components/hooks/useGlobalContext';
import { useRequests } from '../../../shared/components/hooks/useRequests';
import Input from '../../../shared/components/Inputs/Input';
import {
  BackgroundImage,
  CointainerLoginScreen,
  ContainerLogin,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.styles';
import { UserType } from '../types/UserType';

const LoginScreen = () => {
  const { accessToken, setAccessToken } = useGlobalContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { postRequest, loading } = useRequests();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    setAccessToken('123');
    const user = await postRequest<UserType>('http://localhost:8080/auth', { email, password });

    setAccessToken(user?.accessToken || '');
  };

  return (
    <CointainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo />
          <TitleLogin level={2} type="secondary">
            LOGIN {accessToken}
          </TitleLogin>
          <Input title="USUÁRIO" margin="32px 0px 0px" value={email} onChange={handleEmail} />
          <Input
            title="SENHA"
            margin="32px 0px 0px"
            type="password"
            value={password}
            onChange={handlePassword}
          />
          <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin} loading={loading}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </CointainerLoginScreen>
  );
};

export default LoginScreen;
