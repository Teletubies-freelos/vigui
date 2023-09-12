import { dataSingleton } from "@/modules";
import { defaultData } from "./data";
import { AboutUsContainer } from "./container";
import { Box, Typography } from "@mui/material";

async function fetchAboutUs(){
  try {
    return await dataSingleton.getAboutUs()
  } catch (_error) {
    return defaultData
  }
}

export async function AboutUS(){
  const aboutUsData = await fetchAboutUs()

  return (
    <Box>
      <Typography variant="h3" align="center">Quienes somos</Typography>
      <AboutUsContainer 
        title={<Typography>{aboutUsData.first.title}</Typography>}  
      >
        <Typography>
          {aboutUsData.first.description}
        </Typography>
      </AboutUsContainer>
      <AboutUsContainer 
        variant="bottom" 
        title={<Typography>{aboutUsData.first.title}</Typography>}
      >
        <Typography sx={{textAlign: {xs: 'right', md: 'unset'}}} >
          {aboutUsData.second.description}
        </Typography>
      </AboutUsContainer>
    </Box>
  )
}
