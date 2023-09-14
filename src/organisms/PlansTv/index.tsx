'use client';

import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import style from './style.module.css';
import { LiteYoutubeEmbed } from 'react-lite-yt-embed';

const TvPlans = () => {
  const { palette } = useTheme();

  return (
    <Box
      component='section'
      className={style.section}
      id={'section-planes'}
      bgcolor={palette.primary.light}
    >
      <div>
        <Typography
          fontSize={{ xs: 30, lg: 40 }}
          fontWeight={'bold'}
          color='common.white'
        >
          Televisión
        </Typography>
        <div>Card</div>
      </div>
      <div>
        <Typography fontSize={{ xs: 20, md: 25, lg: 30 }} color='common.white'>
          Conoce nuestro canal de youtube
        </Typography>
        <Container className={style.ytContainer}>
          <LiteYoutubeEmbed
            id='9JzmrdYx3c4'
            mobileResolution={'hqdefault'}
            desktopResolution={'sddefault'}
            lazyImage={true}
            imageAltText='La empresa Vigui Telecomunicaciones ofrece servicio de internet en El Santiario.'
            iframeTitle='La empresa Vigui Telecomunicaciones ofrece servicio de internet en El Santiario.'
          />
        </Container>
      </div>
      <Box
        component={'footer'}
        className={style.footer}
        display={'flex'}
        flexDirection={'column'}
        gap={2}
        sx={{
          width: '80%',
          margin: 'auto',
          mt: 4,
        }}
      >
        <Typography color='common.white' fontSize={{ xs: 15, md: 20, lg: 25 }}>
          Deseas hacer publicidad de tu negocio o evento en nuestros canales
          comunícate con nosotros
        </Typography>
        <Button
          variant='contained'
          sx={{ maxWidth: 'max-content' }}
          color='secondary'
        >
          <Typography fontSize={20}>¡Contactanos!</Typography>
        </Button>
      </Box>
    </Box>
  );
};
export default TvPlans;
