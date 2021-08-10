import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import HomeComponents from "./components/pagesScreens/Home/HomeComponents";
import { GlobalStyle } from "./globalStyle";
import AuthComponents from "./components/pagesScreens/auth/authTab";
import LoaderComponent from "./components/Loader";
import CreateProductComponent from "./components/pagesScreens/products/createProduct";
import ProductAndCompanyComponent from "./components/pagesScreens/productsAndCompany/tabs";
import EditProductScreen from "./components/pagesScreens/EditProductsAndCompany/editProductScreen";
import EditProductAndCompanyComponent from "./components/pagesScreens/EditProductsAndCompany/tabs";
import CartComponent from "./components/pagesScreens/cart/cart";
import ShippingComponenet from "./components/pagesScreens/checkout/shipping";
import ThankComponenet from "./components/pagesScreens/checkout/thankPage";
import RegisterComponenet from "./components/pagesScreens/auth/RegisterPage";
import PayementStep from "./components/pagesScreens/checkout/completePayement";
import CompanyListComponent from "./components/pagesScreens/CompanyList/index";
import EcommerceHomeComponent from "./components/pagesScreens/e-commerce/homeECommerce";
import PaymentCompopnent from "./components/pagesScreens/checkout/payment";
import ListOrderScreen from "./components/pagesScreens/orders/ordersScreen"
import CompleteOrder from "./components/pagesScreens/orders/placeOrder"
import pageNotFound from "./components/pagesScreens/pageNotFund"
import Loading from "./components/Loader";
import Strip from "./components/pagesScreens/checkout/stripe/stripeContainer"
import MapScreen from "./components/pagesScreens/checkout/googleMap/mapScreen";

import OrderListComponent from "./components/pagesScreens/orders/orderList"
import UserListComponent from "./components/pagesScreens/user/userList"
import ProductListComponent from "./components/pagesScreens/products/productsList"
import ProfileComponent from "./components/pagesScreens/user/profile/tabs"

function App() {
  return (
    <Router className="App">
      <GlobalStyle />
      <NavBar />
        <Switch>
          <Route exact path="/" component={HomeComponents} />
          <Route path="/auth" component={AuthComponents} />
          <Route path="/add-product" component={CreateProductComponent} />
          <Route path="/products/page/:pageNumber" component={ProductAndCompanyComponent} />
          <Route path="/products" component={ProductAndCompanyComponent} />
          <Route path="/product/:id" component={EditProductScreen} />
          <Route path="/myproducts" component={EditProductAndCompanyComponent} />
          <Route path="/e-commerce" component={EcommerceHomeComponent} />
          <Route path="/companies" component={CompanyListComponent} />
          <Route path="/cart" component={CartComponent} />
          <Route path="/shipping" component={ShippingComponenet} />
          <Route path="/profile/:id" component={ProfileComponent} />
          <Route path="/thank" component={ThankComponenet} />
          <Route path="/register" component={RegisterComponenet} />
          <Route path="/completepayment" component={PayementStep} />
          <Route path="/payment" component={PaymentCompopnent} />
          <Route path="/order/:id" component={CompleteOrder} />
          <Route path="/myorder" component={ListOrderScreen} />
          <Route path="/loader" component={Loading} />
          <Route path="/map" component={MapScreen} />
          <Route path="/stripe" component={Strip} />


          {/*////////////////  ADMIN ROUTER  ///////////// */}
          <Route path="/admin/orderlist" component={OrderListComponent} exact/>
          <Route path="/admin/userlist" component={UserListComponent} exact/>
          <Route path="/admin/productlist" component={ProductListComponent} exact/>



          <Route component={pageNotFound} />
        </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
