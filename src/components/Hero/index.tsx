import React, { PropsWithChildren } from 'react'
import style from './style.module.css'
import { Typography } from '@mui/material'
import { Button } from '../buttons'

interface Img {
  src: string
  alt: string
}

type IHero = {
  background: Img
  image: Img
}

const Hero = ({ background, image, children }: PropsWithChildren<IHero>) => {
  return (
    <section className={style.hero}>
      <img
        src={background.src}
        className={style.bg}
        alt={background.alt}
        loading='lazy'
      />
      <div>
        <img
          src={image.src}
          alt={image.alt}
          className={style.img}
          loading='lazy'
        />
      </div>
      <div className={style.container}>{children}</div>
    </section>
  )
}

const HeroVigui = () => {
  return (
    <Hero
      background={{
        src: './banner-desktop.webp',
        alt: 'Fondo azul a blanco con figuras cuadradas',
      }}
      image={{
        src: './person.png',
        alt: 'Persona sentado en un sillon sujetadno una laptop',
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '1.4rem', md: '2rem', lg: '2.5rem' },
          color: { xs: 'black', sm: 'white' },
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
      <Button>¡Contrata ahora!</Button>
    </Hero>
  )
}

export default HeroVigui
