'use client'
import { Box, Drawer, IconButton, Link, MenuItem, Toolbar, Typography } from "@mui/material"
import { Burger as BurgerIcon} from "../icons/burger";
import { MouseEvent, useState } from "react";
import { Close as CloseIcon } from "../icons/close";
import { Button } from "../buttons";

interface NavBarProps{
  logo:JSX.Element;
  pages: {label: string; href: string}[]
}


export const NavBar = ({ logo, pages }: NavBarProps)=>{
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>)=>{
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (<Toolbar>
    <Box>
      {logo}
    </Box>
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
      >
        <BurgerIcon />
      </IconButton>
      <Drawer
        sx={{width: 'calc(100vw -10rem)'}}
        anchor='right'
        open={!!anchorElNav}
      >
      <Box sx={{width: 1, background: ({palette})=> palette.info.main}}>
        <IconButton onClick={handleCloseNavMenu}>
          <CloseIcon />
        </IconButton>
      </Box>
        {pages.map(({label, href}) => (
          <MenuItem key={label} onClick={handleCloseNavMenu}>
            <Link href={href}>{label}</Link>
          </MenuItem> 
        ))}
      </Drawer>
    </Box>

    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {
        pages.map(({href, label})=> <Link key={label} href={href}>{label}</Link>)
      }
      <Button
        isAnchor 
        href={'/ponerAquiContratanos'}>
          <Typography variant="body1" >Contratar ahora</Typography>
      </Button>
    </Box>
  </Toolbar>) 
}
