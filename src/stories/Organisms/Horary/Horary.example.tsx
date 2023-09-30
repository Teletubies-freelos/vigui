import { horary } from "@/components/Horary/data"
import { List, ListItem, ListItemText, Typography } from "@mui/material"

export const Horary = ()=>{
  return (
    <>
      <Typography variant='h6' component='h2' fontWeight='bold'>
        Horario de atención
      </Typography>
      <List>
        {horary.map((text, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${text}`} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
