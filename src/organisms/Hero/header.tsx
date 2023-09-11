import { Button } from "@/components/buttons";
import { Typography } from "@mui/material";

export const Header = ()=>(
  <>
    <Typography
      sx={{
        textAlign:{xs: 'center', md: 'right'},
        fontSize: { xs: '1.4rem', md: '2rem', lg: '2.5rem' },
        color: { xs: 'black', md: 'white' },
      }}
    >
    Disfruta de la mejor velocidad con nuestro plan de
    </Typography>
    <Typography
      sx={{ fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' } }}
      fontWeight='bold'
      color='#00B3FF'
    >
      20 Mb a 250 Mb
    </Typography>
    <Button variant="roundless" >¡Contrata ahora!</Button>
  </>
)
