import { Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/button/Button';
import { LoginRoutesEnum } from '../../login/routes';
import { ContainerPageNotFound } from '../styles/PageNotFound.styles';

const PageNotFound = () => {
  const navite = useNavigate();

  const handleNavigateToLogin = () => {
    navite(LoginRoutesEnum.LOGIN);
  };

  return (
    <ContainerPageNotFound>
      <Result
        status="404"
        title="404"
        subTitle="Desculpe, a página que você está visitando não exite."
        extra={
          <Button type={'primary'} onClick={handleNavigateToLogin}>
            Página de Login
          </Button>
        }
      />
    </ContainerPageNotFound>
  );
};

export default PageNotFound;
