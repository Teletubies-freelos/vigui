import { Box, Container, Typography } from '@mui/material';

const Text = ({
  text,
  reverse = false,
}: {
  text: string;
  reverse?: boolean;
}) => (
  <Box
    component='div'
    display='flex'
    gap={2}
    flexDirection={reverse ? 'row-reverse' : 'row'}
    alignItems={'center'}
    maxWidth={600}
    textAlign={reverse ? 'end' : 'start'}
    alignSelf={reverse ? 'end' : 'start'}
  >
    <img src='./check.png' alt='icono de vigui' width={50} height={50} />
    <Typography
      color='common.white'
      fontSize={{ xs: 20, md: 25, lg: 30 }}
      fontWeight={{ lg: 'bold' }}
    >
      {text}
    </Typography>
  </Box>
);

const Banner = () => {
  return (
    <Box
      component='section'
      p={{ xs: 5, sm: 8, md: 12, lg: 24 }}
      display='flex'
      flexDirection='column'
      gap={4}
      position={'relative'}
    >
      <img
        src='./background-features.webp'
        alt='fondo naranja'
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <Text text='Ofrecemos al 100% de megas' />
      <Text text='Cortos tiempos de espera de instalación' reverse />
      <Text text='Disponemos de muchas lineas de atención' />
    </Box>
  );
};

export default Banner;
