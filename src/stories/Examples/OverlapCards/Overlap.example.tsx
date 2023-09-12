import { ThemeRegistry } from "@/providers/theme"
import { Box, SxProps } from "@mui/material"

const sxAnimationProps: SxProps = {
  '&:hover': {
    sm:{
      zIndex: 2,
      transform: 'scale(1.1) translateY(4rem)',
      transformOrigin: 'bottom right',
      '& + .second': {
        transform: 'scale(0.9) translateY(-1.6rem)',
        transformOrigin: 'top left'
      },
    },
    transition: 'all 1s ease-out'
  }
}


const sxCards: SxProps = {
  gridTemplateRows: {xs:'1fr 1fr', sm: '2rem 7rem'},
  gridTemplateColumns: {sm: '1.3fr 5rem 1fr'}
}


export const Overlap = ()=>{
  return(
    <ThemeRegistry>
      <Box
        padding={{sm: 5}}
        width={1}
        minHeight={{xs:'85vh', sm: 400}} 
        display={'grid'} 
        sx={sxCards}
        >
        <Box  
          sx={{
            background: 'black',
            gridArea: {
              xs:'2' , 
              sm: '1 / 2 / 4 / 4'
            },
            ...sxAnimationProps
          }}
        />
        <Box 
          className={'second'} 
          sx={{
            transition: 'all 1s ease-out',
            gridArea: {
              xs : '1',
              sm: '2 / 1 / 5 / 3'
            }, 
            background: 'red'
          }} />
      </Box>

    </ThemeRegistry>

  ) 
}
