import { Link, List, ListItem, Typography } from '@mui/material';
import { links } from './data';
import { dataSingleton } from '@/modules';

async function fetchContactInfo() {
  try {
    return await dataSingleton.getContactInfo();
  } catch (_error) {
    return links;
  }
}

async function ContactInfo() {
  const links = await fetchContactInfo();

  return (
    <List>
      {links.map((link, index) => (
        <ListItem key={index}>
          <Link href={link.url} underline="none">
            {link.icon} {link.text}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default ContactInfo;
