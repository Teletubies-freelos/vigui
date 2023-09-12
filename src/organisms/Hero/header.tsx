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
      sx={{ fontSize: { xs: '2.6rem', lg: '3.5rem' } }}
      fontWeight='bold'
      color='#00B3FF'
    >
      20 Mb a 250 Mb
    </Typography>
    <Button sx={{ borderRadius: '.25rem', paddingBlock: 2.5, paddingInline: 3.5, marginBlockStart:{md: 8, lg: '15vh'}}} >
      <Typography sx={{fontSize: {md:'2em', xs: '1.5em'}, fontWeight: 'bolder'}}>¡Contrata ahora!</Typography>
    </Button>
  </>
)
