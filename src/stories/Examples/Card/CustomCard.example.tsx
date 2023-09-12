import { Card } from "@/components/card"
import { Box, SxProps, Typography } from "@mui/material"

const classesInnerHeader = {
  first: 'first',
  second: 'second',
  third: 'third'
}

const CardHeader = ()=> (<Box display={'grid'} sx={{placeItems: 'center'}} p={2} >
    <Typography variant='h3' sx={{color: 'primary.main'}} className={classesInnerHeader.first}>$ 44.00 </Typography>
    <Typography className={classesInnerHeader.second}>20 mb</Typography>
    <Typography className={classesInnerHeader.third}>De 20mb a 500mb</Typography>
  </Box>
)

const classInnerCardContent = 'inner'

const CardContent = ()=>{
  return (<Box className={classInnerCardContent}>
    Hola mundo
    </Box>)
}

const classNameHeader = 'card__header'
const classNameContent = 'card_content'

const sxCardAnimation : SxProps = {
  [`.${classNameHeader}`]:{
    transition: 'all .3s ease-out'
  },
  [`.${classNameContent}`]:{
    transition: 'all .3s ease-out'
  },
  '&:hover':{
    [`.${classNameHeader}`]: {
      background: 'white',
      transform: 'translate(.2rem, .5rem)',
      [`.${classesInnerHeader.second}, .${classesInnerHeader.third}`]:{
        color: 'black'
      }
    },
    [`.${classNameContent}`]:{
      backgroundColor: 'secondary.main',
      transform: 'scale(1.01, 1.005)',
      transformOrigin: 'bottom right'
    }
  }
}

export const CustomCard = () => {
  return (
    <Card
      variant="secondary"
      // Spread operator here is to add new sxProps, unnecessary if just one object
      sxCard={{...sxCardAnimation}} 
      classNameHeader={classNameHeader}
      classNameContent={classNameContent}
      header={<CardHeader />}
      content={<CardContent />}
    />
  )
}
