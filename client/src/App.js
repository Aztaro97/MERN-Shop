import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter as Router , Route, Switch} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import HomeComponents from './components/pagesScreens/Home/HomeComponents';
import {GlobalStyle} from './globalStyle';
import AuthComponents from "./components/pagesScreens/auth/authTab";
import MainContainer from "./components/MainContainer";
import LoaderComponent from './components/loader';
import AddProduct from './components/pagesScreens/products/AddProducts';
import CompanyComponent from "./components/pagesScreens/company/tabs"


import {Provider} from "react-redux";
import Store from "./flux/store"

function App() {
  return (
    <Provider store={Store}>
    <Router className="App">
      <GlobalStyle />
      <NavBar />
      <MainContainer>
      <Switch>
        <Route exact path="/" component={HomeComponents} />
        <Route path="/auth" component={AuthComponents} />
        <Route path="/add-product" component={AddProduct} />
        <Route path="/products" component={CompanyComponent} />
      </Switch>
      </MainContainer>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
