import { Card } from "@/components/card";
import ResponsiveCarousel from "@/components/carousel";
import { ThemeRegistry } from "@/providers/theme";
import { Box } from "@mui/material";
import ContentCard from "./ContentCard";
import HeaderCard from "./HeaderCard";

export default function CustomCarousel() {
  const data = [
    {
      price: "$ 100",
      velocity: "20",
      moreTitle: "De 20Mb a 500Mb",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur odio error provident saepe id asperiores eius doloremque labore deleniti?",
    },
    {
      price: "$ 200",
      velocity: "40",
      moreTitle: "De 20Mb a 500Mb",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur odio error provident saepe id asperiores eius doloremque labore deleniti?",
    },
    {
      price: "$ 300",
      velocity: "60",
      moreTitle: "De 20Mb a 500Mb",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat aspernatur odio error provident saepe id asperiores eius doloremque labore deleniti?",
    },
  ];

  const itemRender = (item: any) => (
    <Card
      sxCard={{
        width: "16rem",
        margin: "0 auto",
      }}
      header={<HeaderCard item={item} />}
      content={<ContentCard item={item} />}
    />
  );

  return (
    <ThemeRegistry>
      <Box width="100%">
        <ResponsiveCarousel data={data} itemRender={itemRender} groupSize={2} />
      </Box>
    </ThemeRegistry>
  );
}
