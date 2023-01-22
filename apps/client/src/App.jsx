import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";
import "antd/dist/antd.css";
import Loading from "./components/loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import { initGA, PageView } from "./components/Tracking/tracking";
import { GlobalStyle } from "./globalStyle";
import Dashboard from "./components/pagesScreens/admin/dashboard";
import {
  AboutComponent,
  AddNewProduction,
  CartComponent,
  CAtegoriesItemsProduction,
  CompanyListComponent,
  CompleteOrder,
  DesignComponent,
  DigitalMarketingComponent,
  EcommerceHomeComponent,
  EditArticle,
  EditProductScreen,
  EMarketingComponent,
  HomeComponents,
  ItemDetailsProduction,
  ListArticles,
  ListOrderScreen,
  MyProductAndCompanyComponent,
  OutMarketingComponent,
  pageNotFound,
  PayementStep,
  PaymentCompopnent,
  PhotographyComponent,
  PrintingComponent,
  ProductDetailsScreen,
  ProductionHomeComponent,
  ProgrammingComponent,
  RegisterComponenet,
  ResetPasswordPage,
  ShippingComponenet,
  ThankComponenet,
  AdThankYouRegister,
  AdversitingAllBrandComponent,
  AdversitingComponent,
  AdversitingProfileComponent,
  AdvertisingRegister,
  AllCompanyServiceComponent,
  AuthComponents,
  BillingPaymentAdvertising,
  CartAdvertising,
  CategoryProduct,
  ConfirmPaymentMethod,
  ContactUsComponents,
  CreateProductComponent,
  EditAdsService,
  EditServiceComponent,
  ExhibitionComponent,
  ListAdMessageComponent,
  MyAdsScreen,
  NewPasswordScreen,
  OrderDetailsComponent,
  OrderListComponent,
  PosComponent,
  PrivatePolicy,
  ProductListComponent,
  ProductsShop,
  ProfileComponent,
  TermsScreen,
  UploadServiceFile,
  UserListComponent,
  MapScreen,
} from "./router";

const NavBar = lazy(() => import("./components/navbar/NavBar"));
const Footer = lazy(() => import("./components/footer/Footer"));
const ScrollTop = lazy(() => import("./utils/scrollTop"));

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

          <Route path="/pos" component={PosComponent} />

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
          <Route path="/admin/articles" component={ListArticles} exact />
          <Route path="/admin/article/:id" component={EditArticle} exact />
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
