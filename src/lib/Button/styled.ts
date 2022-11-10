import styled from 'styled-components';

import { ButtonProps } from './Button';
import { lightTheme } from '../../styles/theme';

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => (
    props.disabled 
            ? props.theme.palette.disabled
            : props.color
                    ? props.theme.palette[props.color]
                    : props.theme.palette.primary
  )};
  border-radius: 6px;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  color: ${(props) => props.theme.utils.white};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-weight: 600;
  letter-spacing: 1px;
  opacity: ${(props) => (props.disabled ? "0.6" : "1")};
  outline: none;
  padding: 12px;
  transition: 0.4s;

  &:not([disabled]):hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: none;
  }
`

StyledButton.defaultProps = {
  theme: lightTheme,
}

export default StyledButton;