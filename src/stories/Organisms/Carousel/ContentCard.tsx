import { Button, Stack, Typography } from "@mui/material";

export interface ItemProp {
  item: {
    description: string;
    price: string;
    velocity: string;
    moreTitle: string;
  };
}

export default function ContentCard({ item }: ItemProp) {
  return (
    <Stack>
      <Typography
        sx={{
          color: ({ palette }) => palette.secondary.main,
        }}
      >
        {item.description}
      </Typography>
      <Button
        sx={{
          backgroundColor: ({ palette }) => palette.primary.main,
          color: "#fff",
          alignSelf: "end",
          transform: "translate(2rem 1rem)",
          zIndex: 9,
        }}
      >
        Comprar
      </Button>
    </Stack>
  );
}
