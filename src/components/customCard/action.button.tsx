import { Button } from "../buttons";
import { classInnerButton } from "./tokens";

export const BuyButton = ()=>(<Button
  variant='roundless'
  className={classInnerButton}
  sx={{
    transform: {
      xs: 'translate(4.8rem, 1rem)',
      md: 'translate(4.8rem, 1rem)',
      lg: 'translate(5rem, 1rem)',
    },
    padding: '.5rem ',
    minWidth: '10rem',
    fontSize: '1.2rem',
    fontWeight: '600',
    textTransform: 'capitalize',
  }}
  >
  Comprar
</Button>)
