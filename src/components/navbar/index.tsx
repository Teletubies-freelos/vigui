'use client'
import { Box, Drawer, IconButton, Link, MenuItem, SxProps, Toolbar, Typography } from "@mui/material"
import { Burger as BurgerIcon} from "../icons/burger";
import { MouseEvent, useState } from "react";
import { Close as CloseIcon } from "../icons/close";
import { Page } from "@/types";
interface NavBarProps{
  logo?:JSX.Element;
  pages: Page[];
  sxMenuButton? : SxProps;
  ctaElement?: JSX.Element;
}


export const NavBar = ({ logo, pages, sxMenuButton, ctaElement }: NavBarProps)=>{
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>)=>{
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (<Toolbar sx={{background: ({palette})=> palette.secondary.main}}>
    {
      logo && <Box>
        {logo}
      </Box>
    }
    <Box sx={{ flexGrow:1, justifyContent: 'flex-end', display: { xs: 'flex', sm: 'none' }, ...sxMenuButton }}>
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
        PaperProps={{sx:{
            background: ({palette})=> palette.background.default,
            width: 'min(20rem, 70vw)'
          }
        }}
        anchor='right'
        open={!!anchorElNav}
      >
      <Box sx={{
        width: 1, 
        background: ({palette})=> palette.info.main,
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <IconButton onClick={handleCloseNavMenu}>
          <CloseIcon />
        </IconButton>
      </Box>
        {pages.map(({label, href}) => (
          <MenuItem key={label} onClick={handleCloseNavMenu}>
            <Link underline={'none'} href={href}>
              <Typography variant="body1">
                {label}
              </Typography>
            </Link>
          </MenuItem> 
        ))}
      </Drawer>
    </Box>

    <Box sx={{
      flexGrow: 1, 
      gap: 2, 
      justifyContent: 'flex-end',  
      display: { xs: 'none', sm: 'flex' } 
    }}>
      {
        pages.map(({href, label})=> 
          <Link underline={'none'} key={label} href={href}>
            <Typography>
            {label}
            </Typography>
          </Link>
        )
      }
      {ctaElement}
    </Box>
  </Toolbar>) 
}
