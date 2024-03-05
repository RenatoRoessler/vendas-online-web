import Input from '../../../shared/Inputs/Input';
import {
  BackgroundImage,
  CointainerLoginScreen,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <CointainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="logo.png" />
          <Input title="USUÁRIO" />
          <Input title="SENHA" />
        </LimitedContainer>
      </ContainerLogin>
    </CointainerLoginScreen>
  );
};

export default LoginScreen;
