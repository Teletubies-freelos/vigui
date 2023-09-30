import { links } from '@/components/ContactInfo/data';
import { Link, List, ListItem, Typography } from '@mui/material';

export const ContactInfo = () => (
  <List>
    {links.map((link, index) => (
      <ListItem key={'contactinfo-link-'+index}>
        <Link
          href={link.url}
          underline='none'
          display={'flex'}
          gap={'.25rem'}
          alignItems={'center'}
        >
          {link.icon}
          <Typography color='body1'>{link.text}</Typography>
        </Link>
      </ListItem>
    ))}
  </List>
);
