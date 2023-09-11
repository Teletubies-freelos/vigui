import { benefits } from "@/organisms/Benefits/data"
import { Box, Typography } from "@mui/material"

export const Benefits = ()=>{
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
            <Typography sx={{width: '6rem'}} align="center" >
              {description}
            </Typography>
        </Box>
        ))
      }
    </Box>)
}
