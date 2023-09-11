import { Typography } from '@mui/material'
import React, { PropsWithChildren } from 'react'

interface ITitle {
  children: string
  color: string
}

const Title = ({ children, color }: PropsWithChildren<ITitle>) => {
  return (
    <Typography
      sx={{
        fontSize: { xs: '1.6rem', md: '2rem', lg: '2.5rem' },
      }}
      color={color}
      fontWeight={'bold'}
    >
      {children}
    </Typography>
  )
}

export default Title
