import { NavBar } from "@/components/navbar"
import { Page } from "@/types"
import { Box } from "@mui/material"
import Image from "next/image"
import logSvg from '../../../public/logo.svg'

const fakePages = Array.from({length: 3}).map((_, index)=>({
  href: '/fakeRef' + index,
  label: 'Page ' + index
}))


const fetchPages = async (): Promise<Page[]> =>{
  try{
    const data = await fetch('pages')
  
    return await data.json()
    
  }catch(_error){
    return fakePages
  }
}

export const Nav = async ()=>{
  const pages = await fetchPages()

  return (<Box component='nav' width='100vw'>
    <NavBar 
      logo={<Image src={logSvg} alt='vigui logo'/>}
      pages={pages}
    />
  </Box>)
}
