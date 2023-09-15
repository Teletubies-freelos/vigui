import { Box, Typography } from '@mui/material';
import style from './style.module.css';

type ICardUser = {
  img: string;
  title: string;
  subtitle: string;
  description?: string;
};

const CardUser = (props: ICardUser) => {
  return (
    <article className={style.card}>
      <Box component={'header'} className={style.header} height={100}>
        <img src={props.img} alt={`Foto de perfil de ${props.title}`} />
        <div>
          <Typography fontSize={20} fontWeight={'bold'} color={'primary.light'}>
            {props.title}
          </Typography>
          <Typography fontSize={18} color={'common.white'}>
            {props.subtitle}
          </Typography>
        </div>
      </Box>
      {props.description && (
        <Box component={'footer'} p={2} pl={6}>
          <h3>{props.description}</h3>
        </Box>
      )}
    </article>
  );
};

export default CardUser;
