import styled from 'styled-components';
import {Button, ButtonProps} from "@material-ui/core";
import {ITheme} from "../Theme/interfaces";
import React from 'react';

interface Props extends ButtonProps {
    theme: ITheme
}

const MuiButton = styled(Button)`
  .MuiButtonBase-root {
    background-color: ${({color, theme}: Props) => color === "primary" ? theme.primary : theme.secondary};
    ${({disabled}) => disabled ? `
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

  span.MuiButton-label {
    color: ${({color, theme}: Props) => color === "primary" ? theme.primary : theme.secondary};
  }
`;

interface MButtonProps {
    primary?: boolean,
    children: any
}

const MButton: React.FC<MButtonProps> = ({children, primary}): JSX.Element =>
    <MuiButton {...{
        color: primary ? "primary" : "secondary",
        variant: "contained"
    }}>{children}</MuiButton>

export default MButton;
