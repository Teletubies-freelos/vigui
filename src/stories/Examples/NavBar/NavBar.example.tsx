import { NavBar } from "@/components/navbar"
import { Box } from "@mui/material"
import { Logo } from "@/components/icons/logo"

const fakePages = Array.from({length: 3}).map((_, index)=>({
  href: '/fakeRef' + index,
  label: 'Page ' + index
}))

export const NavBarExample = ()=>{
  return (
    <Box sx={{width: '80vw'}}>
      <NavBar logo={<Logo />} pages={fakePages}/>
    </Box>
  )
}
