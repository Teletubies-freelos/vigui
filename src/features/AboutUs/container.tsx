import { ScaleIcon } from '@/components/icons';
import { Box, SxProps } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';

const borderVariants = {
  top: '1rem 1rem 0 0',
  bottom: '0 0 1rem 1rem',
};

const bgVariants = {
  top: 'linear-gradient(291.57deg, #0E58EA 14.06%, #0583F2 90.44%)',
  bottom: 'linear-gradient(181.22deg, #0039A4 0.88%, #023087 99.42%)',
};

interface AboutUsProps extends PropsWithChildren {
  variant?: 'top' | 'bottom';
  title?: ReactNode;
  sx?: SxProps;
}

export const AboutUsContainer = ({
  variant = 'top',
  title,
  sx,
  children,
}: AboutUsProps) => {
  return (
    <Box
      className={'about-container'}
      color='common.white'
      sx={{
        display: 'flex',
        background: bgVariants[variant],
        borderRadius: { xs: borderVariants[variant], sm: '1rem' },
        padding: 2,
        flexDirection: {
          xs: variant === 'top' ? 'row-reverse' : 'unset',
          sm: 'unset',
        },
        transition: 'all 0.4s ease-out',
        ...sx,
      }}
    >
      <ScaleIcon
        sx={{
          width: { xs: '4rem', sm: '6rem' },
          transform: variant === 'top' ? 'unset' : 'rotate(180deg)',
          margin: 'auto',
          fontSize: '6em',
        }}
      />
      <Box>
        {title}
        {children}
      </Box>
    </Box>
  );
};
