import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";
import "antd/dist/antd.css";
import Loading from "./components/loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import { initGA, PageView } from "./components/Tracking/tracking";
import { GlobalStyle } from "./globalStyle";
import Dashboard from "./components/pagesScreens/admin/dashboard";

const HomeComponents = lazy(() =>
  import("./components/pagesScreens/Home/HomeComponents")
);
const CreateProductComponent = lazy(() =>
  import("./components/pagesScreens/products/createProduct")
);
const ProductsShop = lazy(() =>
  import("./components/pagesScreens/AllproductsShop/productsShop")
);
const CategoryProduct = lazy(() =>
  import("./components/pagesScreens/AllproductsShop/categoriesProducts")
);
const EditProductScreen = lazy(() =>
  import("./components/pagesScreens/ProductsAndCompany/editProductScreen")
);
const ProductDetailsScreen = lazy(() =>
  import("./components/pagesScreens/products/ProductDetailsScreen")
);
const MyProductAndCompanyComponent = lazy(() =>
  import("./components/pagesScreens/ProductsAndCompany/tabs")
);
const CartComponent = lazy(() => import("./components/pagesScreens/cart/cart"));
const ShippingComponenet = lazy(() =>
  import("./components/pagesScreens/checkout/shipping")
);
const ThankComponenet = lazy(() =>
  import("./components/pagesScreens/checkout/thankPage")
);
const RegisterComponenet = lazy(() =>
  import("./components/pagesScreens/auth/RegisterPage")
);
const PayementStep = lazy(() =>
  import("./components/pagesScreens/checkout/completePayement")
);
const CompanyListComponent = lazy(() =>
  import("./components/pagesScreens/CompanyList/index")
);
const EcommerceHomeComponent = lazy(() =>
  import("./components/pagesScreens/e-commerce/homeECommerce")
);
const PaymentCompopnent = lazy(() =>
  import("./components/pagesScreens/checkout/payment")
);
const ListOrderScreen = lazy(() =>
  import("./components/pagesScreens/orders/ordersScreen")
);
const CompleteOrder = lazy(() =>
  import("./components/pagesScreens/orders/placeOrder")
);
const MapScreen = lazy(() =>
  import("./components/pagesScreens/checkout/googleMap/mapScreen")
);

// /////////////////   Marketing Component   ///////////////
const EMarketingComponent = lazy(() =>
  import("./components/pagesScreens/marketing/eMarketingScreen")
);
const OutMarketingComponent = lazy(() =>
  import("./components/pagesScreens/marketing/outDoorMarketing")
);
const DigitalMarketingComponent = lazy(() =>
  import("./components/pagesScreens/marketing/digital-marketing")
);

// ////////////////  Design Component    /////////////////////
const DesignComponent = lazy(() =>
  import("./components/pagesScreens/design/designScreen")
);

// ////////////////  PROGRAMMING Component    /////////////////////
const ProgrammingComponent = lazy(() =>
  import("./components/pagesScreens/programmingScreen/programmingScreen")
);

// ////////////////  PHOTOGRAPHY Component    /////////////////////
const PhotographyComponent = lazy(() =>
  import("./components/pagesScreens/photographyScreen/photographyScreen")
);

//        PRODUCTION Component    /////////////////////
const ProductionHomeComponent = lazy(() =>
  import("./components/pagesScreens/productionScreen/productionHomeScreen")
);

const ItemDetailsProduction = lazy(() =>
  import("./components/pagesScreens/productionScreen/itemDetailsProduct")
);
const CAtegoriesItemsProduction = lazy(() =>
  import("./components/pagesScreens/productionScreen/categoryItems")
);
const AddNewProduction = lazy(() =>
  import("./components/pagesScreens/productionScreen/formRegisterProduct")
);

// ////////////////  Printing Component    /////////////////////
const PrintingComponent = lazy(() =>
  import("./components/pagesScreens/printing/printingScreen")
);

// ////////////////  ABOUT Component    /////////////////////
const AboutComponent = lazy(() =>
  import("./components/pagesScreens/AboutScreen/aboutScreen")
);

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
  import("./components/pagesScreens/adversiting/uploadServiceFile")
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
const ProfileComponent = lazy(() =>
  import("./components/pagesScreens/user/profile/tabs")
);

//  POS PAGE  /////////////////////////////////
const PosComponent = lazy(() =>
  import("./components/pagesScreens/pos/posScreen")
);

//  POS PAGE  /////////////////////////////////
const ExhibitionComponent = lazy(() =>
  import("./components/pagesScreens/exhibition/exhibitionScreen")
);

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
          {/* <Route exact path="/loading" component={Loading} /> */}
          <Route exact path="/" component={AdversitingComponent} />

          <Route path="/add-product/:id" component={CreateProductComponent} />
          <Route
            path="/search/:keyword"
            component={ProductsShop}
            // exact
          />
          <Route path="/categories/:category" component={CategoryProduct} />
          <Route path="/products" component={ProductsShop} />
          <Route path="/product/edit/:id" component={EditProductScreen} />
          <Route path="/product/:id" component={ProductDetailsScreen} />
          <Route path="/myprofile" component={MyProductAndCompanyComponent} />
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
          <Route path="/checkout/:id" component={PayementStep} />
          <Route path="/payment" component={PaymentCompopnent} />
          <Route path="/order/:id" component={CompleteOrder} exact />
          <Route path="/myorder" component={ListOrderScreen} />
          <Route path="/map" component={MapScreen} />

          {/* /  Markeing Router   /*/}
          <Route path="/marketing" component={EMarketingComponent} />
          <Route path="/out-marketing" component={OutMarketingComponent} />
          <Route
            path="/digital-marketing"
            component={DigitalMarketingComponent}
          />

          {/* /////////////////  CONTACT US   //////*/}
          <Route exact path="/contact-us" component={ContactUsComponents} />

          {/* ///////////////////   ADVERSITING ROUTER  /////////////////// */}
          <Route path="/services" component={HomeComponents} exact />
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
          <Route path="/advertising/profile" component={MyAdsScreen} />
          <Route path="/advertising/edit/:id" component={EditAdsService} />
          <Route path="/auth" component={AuthComponents} />

          <Route path="/forgot-password" component={ResetPasswordPage} />

          <Route
            path="/new-password/:token"
            component={NewPasswordScreen}
            exact
          />

          {/*    DESIGNPAGE ROUTER   ////////////////// */}
          <Route path="/design" component={DesignComponent} />

          {/*    PROGRAMMING ROUTER   ////////////////// */}
          <Route path="/programming" component={ProgrammingComponent} />

          {/*    PHOTOGRAPHY ROUTER   ////////////////// */}
          <Route path="/photography" component={PhotographyComponent} />

          {/*    PRODUCTION ROUTER   ////////////////// */}
          <Route
            path="/production/item/:id"
            component={ItemDetailsProduction}
            exact
          />
          <Route
            path="/production/:category"
            component={CAtegoriesItemsProduction}
          />
          <Route path="/production" component={ProductionHomeComponent} />

          {/*    PRINTING ROUTER   ////////////////// */}
          <Route path="/printing" component={PrintingComponent} />

          {/*    ABOUT ROUTER   ////////////////// */}
          <Route path="/about" component={AboutComponent} />

          {/*    ABOUT ROUTER   ////////////////// */}
          <Route path="/pos" component={PosComponent} />

          {/*    ABOUT ROUTER   ////////////////// */}
          <Route path="/exhibition" component={ExhibitionComponent} />

          {/*  ADMIN ROUTER  ///////////// */}
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
          <Route
            path="/admin/new-production"
            component={AddNewProduction}
            exact
          />
          <Route path="/admin" component={Dashboard} exact />

          {/* ///////////////////  CONTRACT TERMS AND PRIVACY POLICY   ////////////////// */}
          <Route path="/terms" component={TermsScreen} exact />
          <Route path="/private-policy" component={PrivatePolicy} exact />

          <Route component={pageNotFound} exact />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
