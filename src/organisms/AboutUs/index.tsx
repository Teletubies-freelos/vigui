import { dataSingleton } from "@/modules";
import { defaultData } from "./data";
import { AboutUsContainer } from "./container";
import { Box, SxProps, Typography } from "@mui/material";

async function fetchAboutUs(){
  try {
    return await dataSingleton.getAboutUs()
  } catch (_error) {
    return defaultData
  }
}

const sxCards: SxProps = {
  gridTemplateRows: {xs:'1fr 1fr', sm: '2rem 7rem'},
  gridTemplateColumns: {sm: '1.3fr 5rem 1fr'}
}

const sxAnimationProps: SxProps = {
  '&:hover': {
    sm:{
      zIndex: 2,
      transform: 'scale(1.1) translateY(4rem)',
      transformOrigin: 'bottom right',
      '& + .about-container': {
        transform: 'scale(0.9) translateY(-1.6rem)',
        transformOrigin: 'top left'
      }
    }
  }
}

export async function AboutUS(){
  const aboutUsData = await fetchAboutUs()

  return (
    <Box 
      component="section" 
    >
      <Typography 
        padding={4}
        variant="h3" 
        align="center" 
      >
        Quienes somos
      </Typography>
      <Box 
        padding={{sm: 5}} 
        minHeight={{xs:'85vh', sm: 400}} 
        display={'grid'} 
        sx={sxCards}
      >
        <AboutUsContainer
          sx={{
            gridArea: {
              xs:'2' , 
              sm: '1 / 2 / 4 / 4'
            },
            '& svg':{
              sm:{zIndex: -1}
            },
            ...sxAnimationProps
          }} 
          variant="bottom" 
          title={<Typography>{aboutUsData.second.title}</Typography>}
        >
          <Typography sx={{textAlign: {xs: 'right', md: 'unset'}}} >
            {aboutUsData.second.description}
          </Typography>
        </AboutUsContainer>
        <AboutUsContainer
          sx={{gridArea: {xs : '1', sm: '2 / 1 / 5 / 3'}}} 
          title={<Typography>{aboutUsData.first.title}</Typography>}  
        >
          <Typography>
            {aboutUsData.first.description}
          </Typography>
        </AboutUsContainer>
      </Box>
    </Box>
  )
}
