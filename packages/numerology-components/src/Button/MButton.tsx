import styled from 'styled-components';
import {Button, ButtonProps} from "@material-ui/core";
import {ITheme} from "../Theme/interfaces";

interface Props extends ButtonProps{
    theme: ITheme
}

const MButton = styled(Button)`
    && {
      background-color: ${({ color, theme }: Props) => color==="primary" ? theme.primary : theme.secondary};
      ${({ disabled }) => disabled ? `
        color: purple;
        border: 2px solid ${(props: Props) => props.theme.warning};
        opacity: 0.4;
        cursor: default;
    ` : `
        color: ${(props: { theme: ITheme }) => props.theme.info};
        border: 2px solid white;
        cursor:pointer;
    `};
      text-transform: uppercase;
      padding: 10px 20px;
      font-size: 22px;
      font-weight: bold;
      border-radius: 6px;
      outline: none;
    }
    span.MuiButton-label{
        color: red;
    }
`;
export default MButton;
