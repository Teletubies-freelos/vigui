import { Stack, Typography } from "@mui/material";
import { ItemProp } from "./ContentCard";

export default function HeaderCard({ item }: ItemProp) {
  return (
    <Stack height="8rem" alignItems="center" justifyContent="center" gap="1rem">
      <Typography
        sx={{
          color: ({ palette }) => palette.secondary.contrastText,
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      >
        {item.price}
      </Typography>
      <Typography fontWeight="bold">{item.velocity}Mb</Typography>{" "}
      <Typography fontSize=".8rem">{item.moreTitle}</Typography>
    </Stack>
  );
}
