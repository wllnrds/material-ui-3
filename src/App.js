import { Container } from "@mui/material";
import Header from "./components/header";
import { Products } from "./components/products";
import Footer from "./components/footer";

function App() {
  const data = [
    {
      title: "Produto 1",
      price: "R$ 100,00",
      image: "https://placehold.co/300x300",
    },
    {
      title: "Produto 2",
      price: "R$ 200,00",
      image: "https://placehold.co/300x300",
    },
    {
      title: "Produto 3",
      price: "R$ 300,00",
      image: "https://placehold.co/300x300",
    },
    {
      title: "Produto 4",
      price: "R$ 400,00",
      image: "https://placehold.co/300x300",
    },
  ];

  return (
    <Container>
      <Header title="Loja Exemplo" />
      <Products title="Promoção" data={data} />
      <Footer>Todos os direitos reservados.</Footer>
    </Container>
  );
}

export default App;
