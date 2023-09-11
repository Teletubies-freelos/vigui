import React from 'react';
import { Card, CardProps } from "../../../components/card";
import { ThemeRegistry } from '../../..//providers/theme';
import { Typography } from '@mui/material';


export default function CardExample({variant}: CardProps){
  return (
    <ThemeRegistry>
      <Card sxCard={{width: '12rem'}} variant={variant} header={<Typography>Holis</Typography>} content={
        <Typography sx={{color: ({palette})=> palette.secondary.main}}>My content</Typography>
      }/>
    </ThemeRegistry>
  )
}

