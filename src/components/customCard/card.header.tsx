import { Box, Typography } from "@mui/material";
import { classesInnerHeader } from "./tokens";

interface CardHeaderProps {
  price: string;
  speed: string;
  meta: string;
}

export const CardHeader = ({ price, meta, speed }: CardHeaderProps ) => (
  <Box display={'grid'} sx={{ height: '100%', placeItems: 'center' }} p={2}>
    <Typography
      variant='h3'
      sx={{ color: 'primary.light' }}
      className={classesInnerHeader.first}
    >
      {price}
    </Typography>
    <Typography
      className={classesInnerHeader.second}
      sx={{ fontSize: '1.2rem', fontWeight: '600' ,color: 'common.white' }}
    >
      {speed}Mb
    </Typography>
    <Typography
      className={classesInnerHeader.third}
      sx={{ fontSize: '.7rem', fontWeight: '300',color: 'common.white'  }}
    >
      {meta}
    </Typography>
  </Box>
);
