import { PropsWithChildren } from 'react'
import { Benefit } from '@/types'
import { Typography } from '@mui/material'
import style from './style.module.css'
import Title from '@/atoms/Titlte'

interface ISection {
  title: string
  items: Benefit[]
}

const Section = ({ children, items, title }: PropsWithChildren<ISection>) => (
  <section className={style.section}>
    <Title color='#0E58EA'>{title}</Title>
    <div className={style.container}>
      {items.map((item) => (
        <article key={item.description} className={style.card}>
          <img
            src={item.icon}
            alt='icono de color azul'
            className={style.icon}
          />
          {item.title && (
            <Typography variant='h6' color={'black'}>
              {item.title}
            </Typography>
          )}
          <Typography color={'black'}>{item.description}</Typography>
          {children}
        </article>
      ))}
    </div>
  </section>
)

export default Section
