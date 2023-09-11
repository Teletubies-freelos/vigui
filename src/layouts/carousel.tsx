'use client';

import { SxProps, useTheme } from "@mui/material";
import Carousel from "react-material-ui-carousel";

interface CarouselHeroProps {
  children: JSX.Element[];
  sx: SxProps;
}

const CarouselHero = ({ children, sx }: CarouselHeroProps) => {
  return (
    <Carousel
      sx={{
        "& .navButtonsClassName": {
          background: "none !important",
          color: ({palette})=>`${palette.primary.main} !important`,
          border: "none",
          opacity: 1,
          "&:hover": {
            background: ({palette})=>`${palette.primary.main} !important`,
            color: `#fff !important`,
            opacity: 1,
          },
        },
        "& .activeIndicatorClassName": {
          color: ({palette})=>`${palette.primary.main} !important`,
          border: "none",
        },
        "& .indicatorClassName": {
          color: ({palette})=> palette.background.paper,
          "&:hover": {
            color: ({palette})=>`${palette.primary.main} !important`,
          },
        },
        "& .wraperBtns": {
          top: "40%",
          transform: "translateY(-50%)",
          "& .navButtonsClassName": {
            color: ({palette})=>palette.text.primary,
          },
        },
        ...sx,
      }}
      navButtonsProps={{ className: "navButtonsClassName" }}
      navButtonsWrapperProps={{ className: "wraperBtns" }}
      activeIndicatorIconButtonProps={{
        className: "activeIndicatorClassName",
      }}
      indicatorIconButtonProps={{ className: "indicatorClassName" }}
    >
      {children}
    </Carousel>
  );
};

export default CarouselHero;
