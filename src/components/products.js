import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Switch,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export function Products({ title = "Produtos", data = [] }) {
  const [active, setActive] = useState(false);

  function handleToggle() {
    setActive(!active);
  }

  return (
    <Stack spacing={2} direction="column" sx={{ flex: 1 }}>
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography sx={{ fontSize: "1rem" }} variant="h2">
          {title}
        </Typography>

        <Box>
          <Switch checked={active} onChange={handleToggle} />
          <Typography component="span">
            {active ? "Modo Lista" : "Modo Grid"}
          </Typography>
        </Box>
      </Stack>
      {active ? <ProductList data={data} /> : <ProductGrid data={data} />}
    </Stack>
  );
}

export function ProductList({ data = [] }) {
  return (
    <List>
      {data.map((item, index) => {
        return (
          <ProductItem
            key={index}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        );
      })}
    </List>
  );
}

export function ProductItem({
  title = "Produto Exemplo",
  price = "R$ 100,00",
  image = "https://placehold.co/300x300",
}) {
  return (
    <ListItem secondaryAction={<Button>Comprar</Button>}>
      <ListItemAvatar>
        <Avatar alt={title} src={image} />
      </ListItemAvatar>
      <ListItemText>
        <Stack>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2">{price}</Typography>
        </Stack>
      </ListItemText>
    </ListItem>
  );
}

export function ProductGrid({ data = [] }) {
  return (
    <Grid container spacing={4}>
      {data.map((item, index) => {
        return (
          <ProductCard
            key={index}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        );
      })}
    </Grid>
  );
}

export function ProductCard({
  title = "Produto Exemplo",
  price = "R$ 100,00",
  image = "https://placehold.co/300x300",
}) {
  return (
    <Grid
      item
      size={{
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
      }}
    >
      <Card>
        <CardMedia
          component="img"
          height={{
            xs: 300,
            md: 200,
            lg: 150,
          }}
          sx={{
            maxHeight: {
              xs: 300,
              md: 200,
              lg: 150,
            },
          }}
          alt={title}
          image={image}
        />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2">{price}</Typography>
        </CardContent>
        <CardActions>
          <Button>Comprar</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
