import { Total } from "@/components/Total";
import {
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { redirect } from "next/navigation";
import { CheckoutForm } from "./CheckoutForm";
import { CartServiceFactory } from "@/services/cart.service";
import { ProductService } from "@/services/product.service";

async function CreckoutPage() {
  const cart = CartServiceFactory.create().getCart();
  const productService = new ProductService();
  const products = await productService.getProductsByIds(
    cart.items.map((item) => item.product_id)
  );

  if (cart.items.length === 0) {
    return redirect("/my-cart");
  }

  return (
    <Box>
      <Typography variant="h3">Checkout</Typography>
      <Grid2 container spacing={3}>
        <Grid2 xs={12} md={6}>
          <CheckoutForm />
        </Grid2>
        <Grid2 xs={0} md={1}>
          <Divider orientation="vertical" />
        </Grid2>
        <Grid2 xs={12} md={5}>
          <Typography variant="h5">Resumo do pedido</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Produto</TableCell>
                <TableCell>Qtd.</TableCell>
                <TableCell>Preço</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.items.map((item, key) => {
                const product = products.find(
                  (product) => product.ID == item.product_id
                )!;
                console.log(product)
                return (
                  <TableRow key={key}>
                    <TableCell>{product.Name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(item.total)}
                    </TableCell>
                  </TableRow>
                );
              })}

              <TableRow>
                <TableCell colSpan={3}>
                  <Box sx={{ displąy: "flex", justifyContent: "end" }}>
                    <Total total={cart.total} />
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default CreckoutPage;