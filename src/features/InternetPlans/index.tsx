import { Box, Stack, Typography } from "@mui/material";
import { PlansCarosuel } from "./carousel";
import { INTERNET_PLANS } from "@/data/plans";
import { dataSingleton } from "@/modules";

async function fetchInternetPlans(){
  try {
    return await dataSingleton.getInternetPlans() ?? INTERNET_PLANS ;
  } catch (error) {
    return INTERNET_PLANS;
  }
}

export default async function InternetPlans() {
  const internetPlans = await fetchInternetPlans()
  return (
    <Stack
      className={'internet_plans-section'}
      sx={{
        backgroundColor: 'info.main',
        alignItems: 'center',
        width: '100%',
        gap: '2rem',
        padding: { xs: '0 1rem', md: '0 3rem' },
      }}
    >
      <Typography
        variant='h3'
        fontWeight='bold'
        fontSize={{ xs: '2rem', md: '2.8rem' }}
        sx={{ color: 'white', paddingBlockStart: '2rem' }}
      >
        Servicios
      </Typography>
      <Typography
        variant='h4'
        sx={{ alignSelf: 'start', fontSize: '1.6rem' }}
        color='common.white'
      >
        Internet hogar
      </Typography>
      <Box width='100%'>
        <PlansCarosuel data={internetPlans}/>
      </Box>
    </Stack>
  );
}
