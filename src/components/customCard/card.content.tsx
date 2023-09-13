import { Box, List, ListItem } from "@mui/material";
import { classInnerCardContent } from "./tokens";

interface CardContentProps {
  button?: JSX.Element;
  benefits: string[];
}

export const CardContent = ({ button, benefits }: CardContentProps) => {
  return (
    <Box
      className={classInnerCardContent}
      sx={{
        paddingX: '1rem',
        width: 'auto',
        fontWeight: '600',
      }}
      margin='0 auto'
    >
      <List sx={{pt: '6rem'}}>
        {
          benefits.map((benefit)=> <ListItem key={benefit} sx={{pt: 0}}>
            {benefit}
          </ListItem>)
        }
      </List>
    {button}
    </Box>
  );
};
