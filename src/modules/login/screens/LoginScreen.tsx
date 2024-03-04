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
        </LimitedContainer>
      </ContainerLogin>
    </CointainerLoginScreen>
  );
};

export default LoginScreen;
