'use client'

import { Button, Typography, useTheme } from '@mui/material'

export const Content = () => {
  const { palette } = useTheme()

  return (
    <>
      <Typography
        sx={{
          textAlign: { xs: 'center', md: 'right' },
          fontSize: { xs: '1.4rem', md: '2rem', lg: '2.5rem' },
          color: { xs: palette.common.black, md: palette.common.white },
        }}
      >
        Disfruta de la mejor velocidad con nuestro plan de
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: '2rem',
            md: '3rem',
            lg: '3.5rem',
          },
        }}
        fontWeight='bold'
        color={palette.secondary.lighter}
      >
        20 Mb a 250 Mb
      </Typography>
      <Button
        variant='contained'
        color='primary'
        sx={{
          px: 3,
          py: 2,
          fontSize: { md: '1.2rem' },
          fontWeight: '700',
        }}
        href='section-plans'
      >
        ¡Contrata ahora!
      </Button>
    </>
  )
}
