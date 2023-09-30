import { Logo } from '@/components/icons/logo';
import { Container } from '@/stories/Examples/Card/Container';
import { ContactInfo } from '@/stories/Organisms/ContactInfo/ContactInfo.example';
import { Horary } from '@/stories/Organisms/Horary/Horary.example';
import { KnowUs } from '@/stories/Organisms/KnowUs/KnowUs.example';
import { Box, Grid } from '@mui/material';

export const FooterExample = () => {
  return (
    <Box component='footer' id='section-footer' sx={{width: '80vw'}} py={{ xs: 4, md: 6, lg: 8 }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 0, md: 4, lg: 6 }}
          columns={{ xs: 1, sm: 2, md: 10 }}
        >
          <Grid item xs={3}>
            <Grid
              container
              columns={{ xs: 2, md: 1 }}
              pb={3}
              justifyContent={{ xs: 'space-between', md: 'flex-start' }}
              alignItems={{ xs: 'center', md: 'flex-start' }}
            >
              <Grid item md={1}>
                <Box>
                  <Logo />
                </Box>
              </Grid>
            </Grid>
            <ContactInfo />
          </Grid>

          <Grid item xs={2} pt={{ xs: 3, md: 0 }}>
            <KnowUs />
          </Grid>

          <Grid item xs={2} pt={{ xs: 3, md: 0 }}>
            <Horary />
          </Grid>
          <Grid item xs={3} pt={{ xs: 3, md: 0 }}>
            {/* Map */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
};
