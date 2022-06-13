import { lazy } from "react";

export const HomeComponents = lazy(() =>
  import("../components/pagesScreens/Home/HomeComponents")
);
export const CreateProductComponent = lazy(() =>
  import("../components/pagesScreens/products/createProduct")
);
export const ProductsShop = lazy(() =>
  import("../components/pagesScreens/AllproductsShop/productsShop")
);
export const CategoryProduct = lazy(() =>
  import("../components/pagesScreens/AllproductsShop/categoriesProducts")
);
export const EditProductScreen = lazy(() =>
  import("../components/pagesScreens/ProductsAndCompany/editProductScreen")
);
export const ProductDetailsScreen = lazy(() =>
  import("../components/pagesScreens/products/ProductDetailsScreen")
);
export const MyProductAndCompanyComponent = lazy(() =>
  import("../components/pagesScreens/ProductsAndCompany/tabs")
);
export const CartComponent = lazy(() =>
  import("../components/pagesScreens/cart/cart")
);
export const ShippingComponenet = lazy(() =>
  import("../components/pagesScreens/checkout/shipping")
);
export const ThankComponenet = lazy(() =>
  import("../components/pagesScreens/checkout/thankPage")
);
export const RegisterComponenet = lazy(() =>
  import("../components/pagesScreens/auth/RegisterPage")
);
export const PayementStep = lazy(() =>
  import("../components/pagesScreens/checkout/completePayement")
);
export const CompanyListComponent = lazy(() =>
  import("../components/pagesScreens/CompanyList/index")
);
export const EcommerceHomeComponent = lazy(() =>
  import("../components/pagesScreens/e-commerce/homeECommerce")
);
export const PaymentCompopnent = lazy(() =>
  import("../components/pagesScreens/checkout/payment")
);
export const ListOrderScreen = lazy(() =>
  import("../components/pagesScreens/orders/ordersScreen")
);
export const CompleteOrder = lazy(() =>
  import("../components/pagesScreens/orders/placeOrder")
);
export const MapScreen = lazy(() =>
  import("../components/pagesScreens/checkout/googleMap/mapScreen")
);

// /////////////////   Marketing Component   ///////////////
export const EMarketingComponent = lazy(() =>
  import("../components/pagesScreens/marketing/eMarketingScreen")
);
export const OutMarketingComponent = lazy(() =>
  import("../components/pagesScreens/marketing/outDoorMarketing")
);
export const DigitalMarketingComponent = lazy(() =>
  import("../components/pagesScreens/marketing/digital-marketing")
);

// ////////////////  Design Component    /////////////////////
export const DesignComponent = lazy(() =>
  import("../components/pagesScreens/design/designScreen")
);

// ////////////////  PROGRAMMING Component    /////////////////////
export const ProgrammingComponent = lazy(() =>
  import("../components/pagesScreens/programmingScreen/programmingScreen")
);

// ////////////////  PHOTOGRAPHY Component    /////////////////////
export const PhotographyComponent = lazy(() =>
  import("../components/pagesScreens/photographyScreen/photographyScreen")
);

//        PRODUCTION Component    /////////////////////
export const ProductionHomeComponent = lazy(() =>
  import("../components/pagesScreens/productionScreen/productionHomeScreen")
);

export const ItemDetailsProduction = lazy(() =>
  import("../components/pagesScreens/productionScreen/itemDetailsProduct")
);
export const CAtegoriesItemsProduction = lazy(() =>
  import("../components/pagesScreens/productionScreen/categoryItems")
);
export const AddNewProduction = lazy(() =>
  import("../components/pagesScreens/productionScreen/formRegisterProduct")
);
export const ListArticles = lazy(() =>
  import("../components/pagesScreens/productionScreen/listArticles")
);
export const EditArticle = lazy(() =>
  import("../components/pagesScreens/productionScreen/editItem")
);

// ////////////////  Printing Component    /////////////////////
export const PrintingComponent = lazy(() =>
  import("../components/pagesScreens/printing/printingScreen")
);

// ////////////////  ABOUT Component    /////////////////////
export const AboutComponent = lazy(() =>
  import("../components/pagesScreens/AboutScreen/aboutScreen")
);

export const pageNotFound = lazy(() =>
  import("../components/pagesScreens/pageNotFund")
);
export const ResetPasswordPage = lazy(() =>
  import("../components/pagesScreens/resetPasswordPage")
);

// /////////////////  ADVERSITING COMPONENT  //////////////
export const AdversitingComponent = lazy(() =>
  import("../components/pagesScreens/adversiting/adversiting")
);
export const AdversitingAllBrandComponent = lazy(() =>
  import("../components/pagesScreens/adversiting/allBrand")
);
export const AdversitingProfileComponent = lazy(() =>
  import("../components/pagesScreens/adversiting/advertisingProfile")
);
// export const PartnerRegisterComponent = lazy(() =>
//   import("../components/pagesScreens/adversiting/partnerRegister")
// );
export const AdvertisingRegister = lazy(() =>
  import("../components/pagesScreens/adversiting/partnerRegisterForm")
);
export const CartAdvertising = lazy(() =>
  import("../components/pagesScreens/adversiting/cartUploading")
);
export const BillingPaymentAdvertising = lazy(() =>
  import("../components/pagesScreens/adversiting/BillingStep")
);
export const ListAdMessageComponent = lazy(() =>
  import("../components/pagesScreens/admin/adminAdvertising/listAdMessage")
);
export const AdThankYouRegister = lazy(() =>
  import("../components/pagesScreens/adversiting/thankScreen")
);

export const AuthComponents = lazy(() =>
  import("../components/pagesScreens/auth/authTab")
);
export const ContactUsComponents = lazy(() =>
  import("../components/pagesScreens/contact/contact")
);

export const AllCompanyServiceComponent = lazy(() =>
  import("../components/pagesScreens/admin/adminAdvertising/allCompany")
);
export const EditServiceComponent = lazy(() =>
  import("../components/pagesScreens/admin/adminAdvertising/editService")
);

export const NewPasswordScreen = lazy(() =>
  import("../components/pagesScreens/newPasswordScreen")
);
export const PrivatePolicy = lazy(() =>
  import("../components/pagesScreens/regulationScreen.jsx/privatePolicy")
);
export const TermsScreen = lazy(() =>
  import("../components/pagesScreens/regulationScreen.jsx/termsContent")
);

export const OrderListComponent = lazy(() =>
  import("../components/pagesScreens/orders/orderList")
);
export const OrderDetailsComponent = lazy(() =>
  import("../components/pagesScreens/orders/orderDetails")
);
export const UserListComponent = lazy(() =>
  import("../components/pagesScreens/user/userList")
);
export const ProductListComponent = lazy(() =>
  import("../components/pagesScreens/products/productsList")
);
export const UploadServiceFile = lazy(() =>
  import("../components/pagesScreens/adversiting/uploadServiceFile")
);
export const MyAdsScreen = lazy(() =>
  import("../components/pagesScreens/adversiting/myAdsScreen")
);
export const ConfirmPaymentMethod = lazy(() =>
  import("../components/pagesScreens/adversiting/confirmTypePayment")
);
export const EditAdsService = lazy(() =>
  import("../components/pagesScreens/adversiting/editAdsService")
);
export const ProfileComponent = lazy(() =>
  import("../components/pagesScreens/user/profile/tabs")
);

//  POS PAGE  /////////////////////////////////
export const PosComponent = lazy(() =>
  import("../components/pagesScreens/pos/posScreen")
);

//  POS PAGE  /////////////////////////////////
export const ExhibitionComponent = lazy(() =>
  import("../components/pagesScreens/exhibition/exhibitionScreen")
);
