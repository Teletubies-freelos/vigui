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
    <Box sx={{paddinBlock: 8}}>
      <Typography variant='h3' align="center" sx={{paddingBlockEnd: 8}}>Beneficios</Typography>
      <Box component='section' sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: {xs: 'center', md: 'space-around'},
        alignItems: 'center',
        width: {xs: '100%', sm: 'unset'}
      }}>
        {
          benefits.map(({icon, description})=>(
            <Box key={description} sx={
              {display: 'flex', 
              height: '10rem',
              gap: 3,
              alignItems: 'center',
              flexDirection: 'column', 
              justifyContent: 'flex-start'}}> 
              {icon}  
              <Typography variant='body2' sx={{width: '7rem'}} align="center" >
                {description}
              </Typography>
          </Box>
          ))
        }
      </Box>
    </Box>
  )
}
