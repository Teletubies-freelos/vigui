import { SxProps } from "@mui/material";
import { classInnerButton, classNameContent, classNameHeader, classesInnerHeader } from "./tokens";

interface Options{
  transition?: string;
  bgHoverHeader?: string;
  bgHoverContent?: string;
  bgHoverActionButton?: string;
}

type AnimationHandler = (options?: Options)=> SxProps

export const sxCardAnimation: AnimationHandler = (options = {})=>{ 
  const { transition = 'all .3s ease-out' } = options

  return {
  [`.${classNameHeader}`]: {
    transition,
    borderRadius: '.2rem',
  },
  [`.${classNameContent}`]: {
    transition,
    color: 'secondary.main',
    paddingTop: '4rem',
    width: '95%',
  },
  [`.${classInnerButton}`]:{
    transition
  },
  '&:hover': {
    [`.${classNameHeader}`]: {
      background: options.bgHoverHeader ?? 'white',
      transform: 'translate(.2rem, .5rem)',
      [`.${classesInnerHeader.second}, .${classesInnerHeader.third}`]: {
        color: 'black',
      },
    },
    [`.${classNameContent}`]: {
      backgroundColor: options.bgHoverContent ?? 'secondary.main',
      transform: 'scale(1.01, 1.005)',
      transformOrigin: 'bottom right',
      color: 'white',
    },
    [`.${classInnerButton}`]: {
      backgroundColor: options.bgHoverActionButton ?? 'info.main',
      color: 'white'
    },
  },
}};
