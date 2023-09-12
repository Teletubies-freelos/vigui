import { Box } from '@mui/material'
import Image from 'next/image'
import heroImg from '../../../public/personaconlaptop-banner-desktop1-1.webp'
import { Content } from './content'

import styles from './style.module.css'

export const Hero = () => {
  return (
    <Box
      component='header'
      sx={{
        overflow: 'hidden',
        display: { md: 'grid' },
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      <Image
        className={styles.heroImage}
        src={heroImg}
        alt={'Persona sentada con laptop'}
      />

      <Box
        sx={{
          paddingBlock: { xs: 3, md: 'unset' },
          paddingInlineEnd: { md: 8, lg: 12 },
          display: { xs: 'grid', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'flex-end !important',
          placeItems: 'center',
          height: { md: '60%' },
          margin: 'auto',
          gap: { xs: 2, md: 0.5 },
          gridColumnStart: 2,
          gridColumnEnd: 3,
          gridRowStart: 1,
        }}
      >
        <Content />
      </Box>
    </Box>
  )
}
