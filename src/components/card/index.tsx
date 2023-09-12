import { Box, CardContent, Card as CardMUI, SxProps, Theme} from '@mui/material'
import { ReactNode } from 'react';

export interface CardProps {
  sxCard?: SxProps;
  content?: ReactNode;
  header?: ReactNode;
  variant?: 'primary' | 'secondary';
  classNameCard?: string;
  classNameHeader?: string;
  classNameContent?: string;
  sxContentProps?: SxProps;
  sxHeader?: SxProps<Theme>;
}

export const Card = ({ 
  sxCard, 
  content, 
  header, 
  variant = 'primary',
  classNameCard,
  classNameContent,
  classNameHeader,
  sxContentProps,
  sxHeader
}: CardProps)=>{

  return(
    <CardMUI 
      className={classNameCard} 
      sx={{
        backgroundColor: 'unset',
        minHeight: 'min(16rem, 100vh)',
        borderRadius: 'unset',
        boxShadow: 'unset',
        display: 'grid',
        ...(
          header? {
            gridTemplateColumns: '.25fr 2fr 2fr 1fr',
            gridTemplateRows: '.25fr 2fr 2fr 2fr'
            } : {}
          ),
        ...sxCard
        }}
    >
      <CardContent className={classNameContent} sx={{
        display: 'grid',
        gridArea: '2 / 2 / 5 / 5',
        boxShadow: 1,
        borderRadius: 1,
        backgroundColor: 'white',
        ...(header? { gridTemplateRows: '2fr 2fr 1fr'}:{}),
        ...sxContentProps
      }}>
        <Box sx={{
          gridRowStart: 2
        }}>
          {content}
        </Box>
      </CardContent>
      {
        header && 
          <Box className={classNameHeader} sx={{
            gridArea: '1 / 1 / 3/ 4',
            backgroundColor: `${variant}.main`,
            ...(sxHeader as any)
          }}>
            {header}
          </Box>
      }
      
    </CardMUI>
  )
}
