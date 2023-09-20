import { Link, List, ListItem, Typography } from '@mui/material';
import { links } from './data';
import { dataSingleton } from '@/modules';
import { KnowUsLinks } from '@/types';

async function fetchKnowUs(): Promise<KnowUsLinks['links']> {
  try {
    return await dataSingleton.getKnowUs();
  } catch (_error) {
    return links;
  }
}

async function KnowUs() {
  const links = await fetchKnowUs();

  return (
    <>
      <Typography variant='h6' component='h2' fontWeight='bold'>
        Conócenos
      </Typography>
      <List>
        {links.map((link, index) => (
          <ListItem key={index}>
            <Link href={link.url} underline="none">
              {link.text}
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default KnowUs;
