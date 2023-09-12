import React, { PropsWithChildren } from 'react'
import style from './style.module.css'

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
    ></Hero>
  )
}

export default HeroVigui
