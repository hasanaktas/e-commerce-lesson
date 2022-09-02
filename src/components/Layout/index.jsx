import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";
import { ShoppingBasket as ShoppingBasketIcon } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Commerce App
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<ShoppingBasketIcon />}
          >
            Sepet
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
