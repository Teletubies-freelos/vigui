import { NavBar } from "@/components/navbar"
import { Page } from "@/types"
import { Box } from "@mui/material"
import { dataSingleton } from "@/modules"
import { Logo } from "@/components/icons/logo"

const fakePages = Array.from({length: 3}).map((_, index)=>({
  href: '/fakeRef' + index,
  label: 'Page ' + index
}))


const fetchPages = async (): Promise<Page[]> =>{
  try{
    return await dataSingleton.getPages()
    
  }catch(_error){
    return fakePages
  }
}

export const Nav = async ()=>{
  const pages = await fetchPages()

  return (<Box component='nav'>
    <NavBar 
      logo={<Logo />}
      pages={pages}
    />
  </Box>)
}
