import { Input as InputAntd } from 'antd';

import { BoxInput, TitleInput } from '../input.styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

const Input = ({ title, ...props }: InputProps) => {
  return (
    <BoxInput>
      {title && <TitleInput {...props}>{title}</TitleInput>}
      <InputAntd />
    </BoxInput>
  );
};

export default Input;
