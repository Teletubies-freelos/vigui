import { Box, Button, Container, Grid, Typography } from '@mui/material';
import style from './style.module.css';
import { VIGUI } from '@/data/vigui';

const SectionContact = () => {
  const MESSAGE = `Hola Vigui telecomunicaciones, mi nombre es ... , tengo dudas sobre el servicio de internet.`;

  return (
    <Box component='section' className={style.section} id='section-frecuentes'>
      <Container className={style.container}>
        <img
          src='./background-faqs.webp'
          className={style.imgbg}
          alt='fondo azul degradado'
        />
        <Grid container>
          <Grid ml={{ md: 10 }}>
            <Typography
              className={style.title}
              mb={2}
              sx={{ fontSize: { xs: '1.2rem', md: '1.8rem' } }}
            >
              Haznos conocer tus dudas y comunicate con nosotros
            </Typography>
            <a
              href={`https://api.whatsapp.com/send?phone=${VIGUI.phone}&text=${MESSAGE}`}
              target='_blank'
            >
              <Button variant='contained'>
                <Typography variant='h6'>¡Contáctanos!</Typography>
              </Button>
            </a>
          </Grid>
        </Grid>
        <img
          src='./person-faqs.png'
          className={style.img}
          height={'130%'}
          alt='Joven señalando con los dedos a la izquierda'
        />
      </Container>
    </Box>
  );
};
export default SectionContact;
