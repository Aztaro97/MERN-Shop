import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import HomeComponents from "./components/pagesScreens/Home/HomeComponents";
import { GlobalStyle } from "./globalStyle";
import AuthComponents from "./components/pagesScreens/auth/authTab";
import LoaderComponent from "./components/loader";
import AddProductComponent from "./components/pagesScreens/products/AddProducts";
import CompanyComponent from "./components/pagesScreens/productsAndCompany/tabs";
import CartComponent from "./components/pagesScreens/cart/cart";
import CheckOutComponenet from "./components/pagesScreens/checkout/checkout";
import ThankComponenet from "./components/pagesScreens/checkout/thankPage";
import RegisterComponenet from "./components/pagesScreens/auth/RegisterPage";
import PayementStep from "./components/pagesScreens/checkout/completePayement";
import CompanyListComponent from "./components/pagesScreens/CompanyList/index";
import EcommerceHomeComponent from "./components/pagesScreens/e-commerce/homeECommerce"


function App() {
  return (
    <Router className="App">
      <GlobalStyle />
      <NavBar />
        <Switch>
          <Route exact path="/" component={HomeComponents} />
          <Route path="/auth" component={AuthComponents} />
          <Route path="/add-product" component={AddProductComponent} />
          <Route path="/products" component={CompanyComponent} />
          <Route path="/e-commerce" component={EcommerceHomeComponent} />
          <Route path="/companies" component={CompanyListComponent} />
          <Route path="/cart" component={CartComponent} />
          <Route path="/checkout" component={CheckOutComponenet} />
          <Route path="/thank" component={ThankComponenet} />
          <Route path="/register" component={RegisterComponenet} />
          <Route path="/payement" component={PayementStep} />
        </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
