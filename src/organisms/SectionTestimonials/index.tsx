import { TESTIMONIALS } from '@/data/testimonials';
import { Box, Typography } from '@mui/material';
import CardUser from '../CardUser';

const SectionTestimonials = () => {
  return (
    <Box
      component={'section'}
      display={'flex'}
      flexDirection={'column'}
      p={{ xs: 2, sm: 6 }}
      gap={{ xs: 1, sm: 3 }}
    >
      <Typography
        fontSize={{ xs: 30, lg: 40 }}
        fontWeight={'bold'}
        color='common.black'
        align='center'
        mb={3}
      >
        Testimonios
      </Typography>
      <Box
        component={'section'}
        display={'flex'}
        flexWrap={'wrap'}
        justifyContent={'center'}
        gap={{ xs: 1, sm: 8 }}
      >
        {TESTIMONIALS.map((t) => (
          <CardUser
            key={t.name}
            img={t.image}
            title={t.name}
            subtitle={t.location}
            description={t.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SectionTestimonials;
