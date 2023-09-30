import { links } from "@/components/KnowUs/data"
import { Link, List, ListItem, Typography } from "@mui/material"

export const KnowUs = ()=>{
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
