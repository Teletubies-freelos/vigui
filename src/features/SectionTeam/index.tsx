import { Box, Typography } from '@mui/material';
import CardUser from '../CardUser';
import { TEAM } from '@/data/team';

const SectionTeam = () => {
  return (
    <Box
      component={'section'}
      display={'flex'}
      flexDirection={'column'}
      gap={4}
      mb={8}
    >
      <Typography
        fontSize={{ xs: 30, lg: 40 }}
        fontWeight={'bold'}
        color='common.black'
        align='center'
        p={{ xs: 1, lg: 4 }}
      >
        Nuestro equipo
      </Typography>
      <Box
        component={'section'}
        display={'flex'}
        flexWrap={'wrap'}
        justifyContent={'center'}
        gap={6}
      >
        {TEAM.map((t) => (
          <CardUser
            key={t.name}
            img={t.image}
            title={t.name}
            subtitle={t.location}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SectionTeam;
