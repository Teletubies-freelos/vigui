import Image from 'next/image'
import { NavBar } from '@/components/navbar'
import logSvg from '../../public/logo.svg'

export default function Home() {
  return (
    <NavBar 
      logo={<Image src={logSvg} alt='vigui logo'/>}
      pages={[{href: '/asdsad', label: 'prueba'}]}
    />
  )
}
