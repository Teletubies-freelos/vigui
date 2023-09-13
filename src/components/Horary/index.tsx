import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { horary } from './data';
import { dataSingleton } from '@/modules';

async function fetchHorary() {
  try {
    return await dataSingleton.getHorary();
  } catch (_error) {
    return horary;
  }
}

async function Horary() {
  const horary = await fetchHorary();

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

export default Horary;
