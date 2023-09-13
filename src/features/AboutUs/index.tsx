import { dataSingleton } from '@/modules';
import { defaultData } from './data';
import { AboutUsContainer } from './container';
import { Box, SxProps, Typography } from '@mui/material';

const sxSubtitle: SxProps = {
  fontSize: '1.6rem',
  fontWeight: 'bold',
};

const COLOR_SUBTITLE = '#FFC85F';

async function fetchAboutUs() {
  try {
    return await dataSingleton.getAboutUs();
  } catch (_error) {
    return defaultData;
  }
}

const sxCards: SxProps = {
  gridTemplateRows: { xs: '1fr 1fr', sm: '2rem 7rem' },
  gridTemplateColumns: { sm: '1.3fr 5rem 1fr' },
};

const sxAnimationProps: SxProps = {
  '&:hover': {
    sm: {
      zIndex: 2,
      transform: 'scale(1.1) translateY(4rem)',
      transformOrigin: 'bottom right',
      filter: 'blur(0)',
      '& + .about-container': {
        transform: 'scale(0.9) translateX(2vw) translateY(-1.6rem) ',
        transformOrigin: 'top left',
      }
    },
  },
};

export async function AboutUS() {
  const aboutUsData = await fetchAboutUs();

  return (
    <Box component='section'>
      <Typography padding={4} variant='h3' align='center'>
        Quienes somos
      </Typography>
      <Box
        padding={{ sm: 5 }}
        minHeight={{ xs: '85vh', sm: 400 }}
        display={'grid'}
        sx={sxCards}
      >
        <AboutUsContainer
          sx={{
            gridArea: {
              xs: '2',
              sm: '1 / 2 / 4 / 4',
            },
            '& svg': {
              sm: { zIndex: -1 },
            },
            padding: '2rem',
            ...sxAnimationProps,
          }}
          variant='bottom'
          title={
            <Typography sx={{ ...sxSubtitle }}>
              {aboutUsData.second.title}
            </Typography>
          }
        >
          <Typography
            sx={{
              textAlign: { xs: 'right', md: 'unset' },
              marginTop: '1rem',
              sm: {
                filter: 'blur(.15rem)',
              }
            }}
          >
            {aboutUsData.second.description}
          </Typography>
        </AboutUsContainer>
        <AboutUsContainer
          sx={{
            gridArea: { xs: '1', sm: '2 / 1 / 5 / 3' },
            flexDirection: { xs: 'row-reverse' },
            padding: '2rem',
          }}
          title={
            <Typography sx={{ ...sxSubtitle, color: COLOR_SUBTITLE }}>
              {aboutUsData.first.title}
            </Typography>
          }
        >
          <Typography sx={{ marginTop: '1rem' }}>
            {aboutUsData.first.description}
          </Typography>
        </AboutUsContainer>
      </Box>
    </Box>
  );
}
