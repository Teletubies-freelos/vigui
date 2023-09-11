import { NavBar } from "@/components/navbar"
import Image from "next/image"
import logo from '../../assets/logo.svg'
import { Box } from "@mui/material"

const fakePages = Array.from({length: 3}).map((_, index)=>({
  href: '/fakeRef' + index,
  label: 'Page ' + index
}))

export const NavBarExample = ()=>{
  return (
    <Box sx={{width: '80vw'}}>
      <NavBar logo={<Image src={logo} alt={'vigui logo'}/>} pages={fakePages}/>
    </Box>
  )
}
