import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";
import "antd/dist/antd.css";
import Loading from "./components/loader";
import ChatBotComponent from "./components/chatBot/chatBotComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import { initGA, PageView } from "./components/Tracking/tracking";
import { GlobalStyle } from "./globalStyle";

// import HomeComponents from "./components/pagesScreens/Home/HomeComponents";
// import CreateProductComponent from "./components/pagesScreens/products/createProduct";
// import ProductsShop from "./components/pagesScreens/AllproductsShop/productsShop";
// import EditProductScreen from "./components/pagesScreens/EditProductsAndCompany/editProductScreen";
// import EditProductAndCompanyComponent from "./components/pagesScreens/EditProductsAndCompany/tabs";
// import CartComponent from "./components/pagesScreens/cart/cart";
// import ShippingComponenet from "./components/pagesScreens/checkout/shipping";
// import ThankComponenet from "./components/pagesScreens/checkout/thankPage";
// import RegisterComponenet from "./components/pagesScreens/auth/RegisterPage";
// import PayementStep from "./components/pagesScreens/checkout/completePayement";
// import CompanyListComponent from "./components/pagesScreens/CompanyList/index";
// import EcommerceHomeComponent from "./components/pagesScreens/e-commerce/homeECommerce";
// import PaymentCompopnent from "./components/pagesScreens/checkout/payment";
// import ListOrderScreen from "./components/pagesScreens/orders/ordersScreen";
// import CompleteOrder from "./components/pagesScreens/orders/placeOrder";
// import MapScreen from "./components/pagesScreens/checkout/googleMap/mapScreen";

// // /////////////////   Marketing Component   ///////////////
// import EMarketingComponent from "./components/pagesScreens/marketing/eMarketingScreen";
// const OutMarketingComponent = lazy(() => import("./components/pagesScreens/marketing/outDoorMarketing"))

// // ////////////////  Design Component    /////////////////////
// const DesignComponent = lazy(() => import("./components/pagesScreens/design/designScreen"))

// // ////////////////  PROGRAMMING Component    /////////////////////
// const ProgrammingComponent = lazy(() => import("./components/pagesScreens/programmingScreen/programmingScreen"))

// // ////////////////  PHOTOGRAPHY Component    /////////////////////
// const PhotographyComponent = lazy(() => import("./components/pagesScreens/photographyScreen/photographyScreen"))

// // ////////////////  PRODUCTION Component    /////////////////////
// const ProductionComponent = lazy(() => import("./components/pagesScreens/productionScreen/productionScreen"))

// // ////////////////  ABOUT Component    /////////////////////
// const AboutComponent = lazy(() => import("./components/pagesScreens/AboutScreen/aboutScreen") )

const pageNotFound = lazy(() =>
  import("./components/pagesScreens/pageNotFund")
);
const ResetPasswordPage = lazy(() =>
  import("./components/pagesScreens/resetPasswordPage")
);

// /////////////////  ADVERSITING COMPONENT  //////////////
const AdversitingComponent = lazy(() =>
  import("./components/pagesScreens/adversiting/adversiting")
);
const AdversitingAllBrandComponent = lazy(() =>
  import("./components/pagesScreens/adversiting/allBrand")
);
const AdversitingProfileComponent = lazy(() =>
  import("./components/pagesScreens/adversiting/advertisingProfile")
);
// const PartnerRegisterComponent = lazy(() =>
//   import("./components/pagesScreens/adversiting/partnerRegister")
// );
const AdvertisingRegister = lazy(() =>
  import("./components/pagesScreens/adversiting/partnerRegisterForm")
);
const CartAdvertising = lazy(() =>
  import("./components/pagesScreens/adversiting/cartUploading")
);
const BillingPaymentAdvertising = lazy(() =>
  import("./components/pagesScreens/adversiting/BillingStep")
);
const ListAdMessageComponent = lazy(() =>
  import("./components/pagesScreens/admin/adminAdvertising/listAdMessage")
);
const AdThankYouRegister = lazy(() =>
  import("./components/pagesScreens/adversiting/thankScreen")
);

const AuthComponents = lazy(() =>
  import("./components/pagesScreens/auth/authTab")
);
const ContactUsComponents = lazy(() =>
  import("./components/pagesScreens/contact/contact")
);

const NavBar = lazy(() => import("./components/navbar/NavBar"));
const Footer = lazy(() => import("./components/footer/Footer"));

const AllCompanyServiceComponent = lazy(() =>
  import("./components/pagesScreens/admin/adminAdvertising/allCompany")
);
const EditServiceComponent = lazy(() =>
  import("./components/pagesScreens/admin/adminAdvertising/editService")
);

const NewPasswordScreen = lazy(() =>
  import("./components/pagesScreens/newPasswordScreen")
);
const PrivatePolicy = lazy(() =>
  import("./components/pagesScreens/regulationScreen.jsx/privatePolicy")
);
const TermsScreen = lazy(() =>
  import("./components/pagesScreens/regulationScreen.jsx/termsContent")
);
const ScrollTop = lazy(() => import("./utils/scrollTop"));

const OrderListComponent = lazy(() =>
  import("./components/pagesScreens/orders/orderList")
);
const OrderDetailsComponent = lazy(() =>
  import("./components/pagesScreens/orders/orderDetails")
);
const UserListComponent = lazy(() =>
  import("./components/pagesScreens/user/userList")
);
const ProductListComponent = lazy(() =>
  import("./components/pagesScreens/products/productsList")
);
const UploadServiceFile = lazy(() =>
  import(
    "./components/pagesScreens/adversiting/uploadComponent/uploadServiceFile"
  )
);
const MyAdsScreen = lazy(() =>
  import("./components/pagesScreens/adversiting/myAdsScreen")
);
const ConfirmPaymentMethod = lazy(() =>
  import("./components/pagesScreens/adversiting/confirmTypePayment")
);
const EditAdsService = lazy(() =>
  import("./components/pagesScreens/adversiting/editAdsService")
);
// const ProfileComponent = lazy(() =>
//   import("./components/pagesScreens/user/profile/tabs")
// );

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-207742018-1");
    initGA();
    PageView();
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router className="App">
      <Suspense fallback={<Loading />}>
        <ScrollTop />
        <GlobalStyle />
        <NavBar />
        <Switch>
          {/* <Route exact path="/" component={HomeComponents} />
        
        
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
         */}

          {/* /////////////////////   Markeing Router   ///////////////////// */}
          {/* <Route path="/marketing" component={EMarketingComponent} />
        <Route path="/out-marketing" component={OutMarketingComponent} /> */}
          <Route exact path="/contact-us" component={ContactUsComponents} />
          {/* ///////////////////   ADVERSITING ROUTER  /////////////////// */}
          <Route path="/" component={AdversitingComponent} exact />
          <Route
            path="/advertising/profile/:id"
            component={AdversitingProfileComponent}
          />
          <Route
            path="/advertising/type/:typeBusiness"
            component={AdversitingAllBrandComponent}
            exact
          />
          <Route
            path="/advertising/thank"
            component={AdThankYouRegister}
            exact
          />
          {/* <Route
            path="/adver1"
            component={PartnerRegisterComponent}
          /> */}
          <Route
            path="/advertising/register"
            component={AdvertisingRegister}
            exact
          />
          <Route path="/advertising/cart" component={CartAdvertising} exact />
          <Route
            path="/advertising/payment"
            component={BillingPaymentAdvertising}
            exact
          />
          <Route
            path="/advertising/upload-file/:id"
            component={UploadServiceFile}
          />
            <Route
            path="/advertising/confirm-payment"
            component={ConfirmPaymentMethod}
          />
          <Route path="/profile/my-ads" component={MyAdsScreen} />
          <Route path="/profile/edit-ad/:id" component={EditAdsService} />
          <Route path="/auth" component={AuthComponents} />

          <Route path="/forgot-password" component={ResetPasswordPage} />

          <Route
            path="/new-password/:token"
            component={NewPasswordScreen}
            exact
          />

          {/* ////////////////////    DESIGNPAGE ROUTER   ////////////////// */}
          {/* <Route path="/design" component={DesignComponent} /> */}

          {/* ////////////////////    PROGRAMMING ROUTER   ////////////////// */}
          {/* <Route path="/programming" component={ProgrammingComponent} /> */}

          {/* ////////////////////    PHOTOGRAPHY ROUTER   ////////////////// */}
          {/* <Route path="/photography" component={PhotographyComponent} /> */}

          {/* ////////////////////    PRODUCTION ROUTER   ////////////////// */}
          {/* <Route path="/production" component={ProductionComponent} /> */}

          {/* ////////////////////    ABOUT ROUTER   ////////////////// */}
          {/* <Route path="/about" component={AboutComponent} /> */}

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
          <Route
            path="/admin/advertising"
            component={AllCompanyServiceComponent}
            exact
          />
          <Route
            path="/admin/advertising/edit/:id"
            component={EditServiceComponent}
            exact
          />
          <Route
            path="/admin/message"
            component={ListAdMessageComponent}
            exact
          />

          {/* ///////////////////  CONTRACT TERMS AND PRIVACY POLICY   ////////////////// */}
          <Route path="/terms" component={TermsScreen} exact />
          <Route path="/private-policy" component={PrivatePolicy} exact />

          <Route component={pageNotFound} exact />
        </Switch>
        <ChatBotComponent />
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
