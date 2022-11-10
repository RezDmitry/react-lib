import React, { FC, PropsWithChildren } from 'react';

import StyledButton from './styled';
import { Palette } from '../../styles/theme';

export interface ButtonProps {
  color?: keyof Palette,
  big?: boolean,
  disabled?: boolean,
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  color = 'primary',
  big,
  disabled,
}) => {
  return (
    <StyledButton disabled={disabled} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;