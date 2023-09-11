import { Button as ButtonMUI, SxProps } from "@mui/material";
import { MouseEventHandler, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  variant?: 'rounded' | 'roundless';
  color?: 'primary' | 'secondary';
  onClick?: MouseEventHandler<HTMLButtonElement>
  isAnchor?: boolean;
  href?: string;
  sx?: SxProps
}

export const Button = ({ 
  color = 'primary', 
  variant = 'rounded', 
  children, 
  onClick, 
  isAnchor, 
  href,
  sx
}: ButtonProps) => {
  if (isAnchor)
    return (
      <ButtonMUI
        component={'a'}
        sx={{
          borderRadius: variant === 'rounded' ? '1rem' : 0,
          ...sx
        }}
        variant="contained"
        color={color}
        href={href}
      >
        {children}
      </ButtonMUI>
    )

  return (
    <ButtonMUI
      sx={{
        borderRadius: variant === 'rounded' ? '1rem' : 0
      }}
      variant="contained"
      color={color}
      onClick={onClick}
    >
      {children}
    </ButtonMUI>
  )
}
