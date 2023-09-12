import React from 'react';
import { Card, CardProps } from "../../../components/card";
import { Typography } from '@mui/material';


export default function CardExample({variant}: CardProps){
  return (
    <Card sxCard={{width: '12rem'}} variant={variant} header={<Typography>Holis</Typography>} content={
      <Typography sx={{color: 'secondary.main'}}>My content</Typography>
    }/>
  )
}

