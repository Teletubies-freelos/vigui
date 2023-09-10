import { Button as ButtonMUI } from "@mui/material";
import { MouseEventHandler, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren{
  variant?: 'rounded' | 'roundless';
  color?: 'primary' | 'secondary';
  onClick?: MouseEventHandler<HTMLButtonElement>
}
export const Button = ({color='primary', variant = 'rounded', children, onClick}: ButtonProps)=>{
  return <ButtonMUI sx={{
    borderRadius: variant === 'rounded' ? '1rem' : 0
  }} variant="contained" color={color} onClick={onClick}>
    {children}
  </ButtonMUI>
}
