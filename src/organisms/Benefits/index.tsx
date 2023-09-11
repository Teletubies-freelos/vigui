import { Box, Typography } from "@mui/material"
import { dataSingleton } from "@/modules"
import { benefits } from "./data"

async function fetchBenefits(){
  try {
    return await dataSingleton.getBenefits()
  } catch (_error) {
    return benefits
  }
}

export const Benefits = async ()=>{
  const benefits = await fetchBenefits()

  return(
    <Box component='section' sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      justifyContent: 'center',
      alignItems: 'center',
      width: {xs: '100%', sm: 'unset'}
    }}>
      {
        benefits.map(({icon, description})=>(
          <Box key={description} sx={{display: 'grid', placeItems: 'center'}}> 
            {icon}  
            <Typography variant='body2' sx={{width: '6rem'}} align="center" >
              {description}
            </Typography>
        </Box>
        ))
      }
    </Box>)
}
