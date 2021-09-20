import React, { useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import ReactGA from "react-ga";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import HomeComponents from "./components/pagesScreens/Home/HomeComponents";
import ContactUsComponents from "./components/pagesScreens/contact/contact";
import { GlobalStyle } from "./globalStyle";
import AuthComponents from "./components/pagesScreens/auth/authTab";
import CreateProductComponent from "./components/pagesScreens/products/createProduct";
import ProductsShop from "./components/pagesScreens/AllproductsShop/productsShop";
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
import ListOrderScreen from "./components/pagesScreens/orders/ordersScreen";
import CompleteOrder from "./components/pagesScreens/orders/placeOrder";
import pageNotFound from "./components/pagesScreens/pageNotFund";
import MapScreen from "./components/pagesScreens/checkout/googleMap/mapScreen";
import ResetPasswordPage from "./components/pagesScreens/resetPasswordPage";

import OrderListComponent from "./components/pagesScreens/orders/orderList";
import OrderDetailsComponent from "./components/pagesScreens/orders/orderDetails";
import UserListComponent from "./components/pagesScreens/user/userList";
import ProductListComponent from "./components/pagesScreens/products/productsList";
import ProfileComponent from "./components/pagesScreens/user/profile/tabs";

// /////////////////   Marketing Component   ///////////////
import EMarketingComponent from "./components/pagesScreens/marketing/eMarketingScreen";
import OutMarketingComponent from "./components/pagesScreens/marketing/outDoorMarketing";

// /////////////////  ADVERSITING COMPONENT  //////////////
import AdversitingComponent from "./components/pagesScreens/adversiting/adversiting";
import AdversitingAllBrandComponent from "./components/pagesScreens/adversiting/allBrand";
import AdversitingProfileComponent from "./components/pagesScreens/adversiting/advertisingProfile";
import PartnerRegisterComponent from "./components/pagesScreens/adversiting/partnerRegister";
import StepComponent from "./components/pagesScreens/adversiting/StepsScreen";

// ////////////////  Design Component    /////////////////////
import DesignComponent from "./components/pagesScreens/design/designScreen";

// ////////////////  PROGRAMMING Component    /////////////////////
import ProgrammingComponent from "./components/pagesScreens/programmingScreen/programmingScreen";

// ////////////////  PHOTOGRAPHY Component    /////////////////////
import PhotographyComponent from "./components/pagesScreens/photographyScreen/photographyScreen";

// ////////////////  PRODUCTION Component    /////////////////////
import ProductionComponent from "./components/pagesScreens/productionScreen/productionScreen";

// ////////////////  ABOUT Component    /////////////////////
import AboutComponent from "./components/pagesScreens/AboutScreen/aboutScreen";

import { initGA, PageView } from "./components/Tracking/tracking";

function App() {
  useEffect(() => {
    // ReactGA.initialize("UA-207742018-1");
    initGA();
    PageView();
    // ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router className="App">
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeComponents} />
        <Route exact path="/contact-us" component={ContactUsComponents} />
        <Route path="/auth" component={AuthComponents} />
        <Route path="/add-product/:id" component={CreateProductComponent} />
        <Route path="/products/page/:pageNumber" component={ProductsShop} />
        <Route path="/products" component={ProductsShop} />
        <Route path="/product/:id" component={EditProductScreen} />
        <Route path="/myproducts" component={EditProductAndCompanyComponent} />
        <Route path="/e-commerce" component={EcommerceHomeComponent} />
        <Route path="/companies" component={CompanyListComponent} />
        <Route path="/cart" component={CartComponent} />
        <Route path="/shipping" component={ShippingComponenet} />
        <Route
          path="/profile/:id/page/:pageNumber"
          component={ProfileComponent}
        />
        <Route path="/profile/:id" component={ProfileComponent} />
        <Route path="/thank" component={ThankComponenet} />
        <Route path="/register" component={RegisterComponenet} />
        <Route path="/completepayment" component={PayementStep} />
        <Route path="/payment" component={PaymentCompopnent} />
        <Route path="/order/:id" component={CompleteOrder} />
        <Route path="/myorder" component={ListOrderScreen} />
        <Route path="/map" component={MapScreen} />
        <Route path="/forgot-password" component={ResetPasswordPage} />

        {/* /////////////////////   Markeing Router   ///////////////////// */}
        <Route path="/marketing" component={EMarketingComponent} />
        <Route path="/out-marketing" component={OutMarketingComponent} />

        {/* ///////////////////   ADVERSITING ROUTER  /////////////////// */}
        <Route path="/advertising" component={AdversitingComponent} exact />
        <Route path="/advertising" component={AdversitingComponent}>
          <Route
            path="/advertising/partner-register1"
            component={PartnerRegisterComponent}
          />
          <Route
            path="/advertising/partner-register"
            component={StepComponent}
          />
          <Route
            path="/advertising/all-brands"
            component={AdversitingAllBrandComponent}
          />
          <Route
            path="/advertising/profile"
            component={AdversitingProfileComponent}
          />
        </Route>

        {/* ////////////////////    DESIGNPAGE ROUTER   ////////////////// */}
        <Route path="/design" component={DesignComponent} />

        {/* ////////////////////    PROGRAMMING ROUTER   ////////////////// */}
        <Route path="/programming" component={ProgrammingComponent} />

        {/* ////////////////////    PHOTOGRAPHY ROUTER   ////////////////// */}
        <Route path="/photography" component={PhotographyComponent} />

        {/* ////////////////////    PRODUCTION ROUTER   ////////////////// */}
        <Route path="/production" component={ProductionComponent} />

        {/* ////////////////////    ABOUT ROUTER   ////////////////// */}
        <Route path="/about" component={AboutComponent} />

        {/*////////////////  ADMIN ROUTER  ///////////// */}
        <Route path="/admin/orderlist" component={OrderListComponent} exact />
        <Route path="/admin/userlist" component={UserListComponent} exact />
        <Route
          path="/admin/productlist"
          component={ProductListComponent}
          exact
        />
        <Route
          path="/admin/productlist/:pageNumber"
          component={ProductListComponent}
          exact
        />
        <Route
          path="/admin/order/:orderId"
          component={OrderDetailsComponent}
          exact
        />

        <Route component={pageNotFound} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
