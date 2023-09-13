'use client';
import ResponsiveCarousel from '@/components/carousel';
import { Card } from '@/components/card';
import { Box, Stack, SxProps, Typography } from '@mui/material';
import { Button } from '@/components/buttons';

const data = [
  {
    price: '$ 100',
    velocity: '20',
    moreTitle: 'De 20Mb a 500Mb',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur odio error provident saepe id asperiores eius doloremque labore deleniti?',
  },
  {
    price: '$ 200',
    velocity: '40',
    moreTitle: 'De 20Mb a 500Mb',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur odio error provident saepe id asperiores eius doloremque labore deleniti?',
  },
  {
    price: '$ 300',
    velocity: '60',
    moreTitle: 'De 20Mb a 500Mb',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur odio error provident saepe id asperiores eius doloremque labore deleniti?',
  },
];

const classesInnerHeader = {
  first: 'first',
  second: 'second',
  third: 'third',
};

const CardHeader = ({ item }: any) => (
  <Box display={'grid'} sx={{ height: '100%', placeItems: 'center' }} p={2}>
    <Typography
      variant='h3'
      sx={{ color: 'primary.main' }}
      className={classesInnerHeader.first}
    >
      {item.price}
    </Typography>
    <Typography
      className={classesInnerHeader.second}
      sx={{ fontSize: '1.2rem', fontWeight: '600' }}
    >
      {item.velocity}Mb
    </Typography>
    <Typography
      className={classesInnerHeader.third}
      sx={{ fontSize: '.7rem', fontWeight: '300' }}
    >
      {item.moreTitle}
    </Typography>
  </Box>
);

const classInnerCardContent = 'inner';
const classInnerButton = 'inner-button';

const CardContent = ({ item }: any) => {
  return (
    <Box
      className={classInnerCardContent}
      sx={{
        paddingX: '1rem',
        width: 'auto',
        fontWeight: '600',
      }}
      margin='0 auto'
    >
      <Box>{item.description}</Box>
      <Button
        variant='roundless'
        className={classInnerButton}
        sx={{
          transform: {
            xs: 'translate(4.8rem, 2.4rem)',
            md: 'translate(3.6rem, 2.4rem)',
            lg: 'translate(5rem, 2.4rem)',
          },
          padding: '.5rem ',
          minWidth: '10rem',
          fontSize: '1.2rem',
          fontWeight: '600',
          textTransform: 'capitalize',
        }}
      >
        Comprar
      </Button>
    </Box>
  );
};

const classNameHeader = 'card__header';
const classNameContent = 'card_content';

const sxCardAnimation: SxProps = {
  [`.${classNameHeader}`]: {
    transition: 'all .3s ease-out',
    borderRadius: '.2rem',
  },
  [`.${classNameContent}`]: {
    transition: 'all .3s ease-out',
    color: 'secondary.main',
    paddingTop: '8rem',
    width: '95%',
  },
  '&:hover': {
    [`.${classNameHeader}`]: {
      background: 'white',
      transform: 'translate(.2rem, .5rem)',
      [`.${classesInnerHeader.second}, .${classesInnerHeader.third}`]: {
        color: 'black',
      },
    },
    [`.${classNameContent}`]: {
      backgroundColor: 'secondary.main',
      transform: 'scale(1.01, 1.005)',
      transformOrigin: 'bottom right',
      color: 'white',
    },
    [`.${classInnerButton}`]: {
      backgroundColor: 'secondary.main',
      color: 'white',
      transform: 'translate(5rem,2.4rem)',
      transition: 'all .3s ease-out',
    },
  },
};

const itemRender = (item: any) => (
  <Card
    variant='secondary'
    classNameHeader={classNameHeader}
    classNameContent={classNameContent}
    sxCard={{
      ...sxCardAnimation,
      height: '32.5rem',
      width: '18rem',
      margin: '0 auto',
    }}
    header={<CardHeader item={item} />}
    content={<CardContent item={item} />}
  />
);

export default function InternetPlans() {
  return (
    <Box
      component='div'
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'reverse-column',
        justifyContent: 'center',
        alignItems: 'center',
        height: { xs: '100%' },
      }}
    >
      <img
        style={{ width: '100%', height: '50rem' }}
        src='./background-cards-1.webp'
        alt='background image'
      />
      <Stack
        sx={{
          alignItems: 'center',
          position: 'absolute',
          width: '100%',
          gap: '2rem',
          padding: { xs: '0 1rem', md: '0 3rem' },
        }}
      >
        <Typography
          variant='h3'
          fontWeight='bold'
          fontSize={{ xs: '2rem', md: '2.8rem' }}
          sx={{ color: 'white' }}
        >
          Servicios
        </Typography>
        <Typography
          variant='h4'
          sx={{ alignSelf: 'start', fontSize: '1.6rem' }}
        >
          Internet hogar
        </Typography>
        <Box width='100%'>
          <ResponsiveCarousel
            data={data}
            itemRender={itemRender}
            groupSize={3}
          />
        </Box>
      </Stack>
    </Box>
  );
}
