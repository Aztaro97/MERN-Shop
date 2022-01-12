import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, Route, useHistory } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdArrowDropDown, MdKeyboardArrowDown } from "react-icons/md";
import {
  RiArrowDownSFill,
  RiArrowDownSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { Popover, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../flux/actions/userAction";
import { createProduct } from "../../flux/actions/productAction";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import SelectLangue from "./SelectLangButton";
import ToggleMenu from "./toggleMenu";

import "./navbar.css";

//   Logo Import State
import Logo_SVG from "../../img/logo.svg";
import SearchBox from "../searchBox";
import BurgerMenu from "./burgerMenu";

const { SubMenu } = Menu;

function NavBar() {
  const [scrollNav, setScrollNav] = useState(false);
  const [showToggleMenu, setShowToggleMenu] = useState(false);
  const [current, setCurrent] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;

  const { cartItems } = useSelector((state) => state.cart);

  const { userInfo } = useSelector((state) => state.userLogin);

  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: newProduct,
  } = useSelector((state) => state.productCreate);

  const handleLogOut = () => {
    dispatch(logout());
  };

  const handleClick = (e) => {
    setCurrent({ current: e.key });
  };

  const ChangeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
      console.log(window.scrollY);
    } else {
      setScrollNav(false);
    }
  };

  const handleCreateProduct = () => {
    dispatch(createProduct());
  };

  useEffect(() => {
    window.addEventListener("scroll", ChangeNav);

    if (successCreate) {
      history.push(`/add-product/${newProduct._id}`);
    }
  }, [successCreate, history, newProduct]);

  const ProfileContentLogOut = (
    <Content>
      <LinkR href="/register">{t("create_your_shop")}</LinkR>
      <LinkP to="/auth" className="btn_signin">
        {t("login")}
      </LinkP>
    </Content>
  );

  const AdvertisingMode = () => (
    <Content>
      <LinkP to="/auth" className="btn_signin">
        {t("login")}
      </LinkP>
    </Content>
  );
  const AdminContente = (
    <ListNavigation>
      <li>
        <Link className="link" to="/admin/userlist">
          {t("users_lists")}{" "}
        </Link>
      </li>
      <li>
        <Link className="link" to="/admin/productlist">
          {t("products_lists")}
        </Link>
      </li>
      <li>
        <Link className="link" to="/admin/orderlist">
          {t("orders_lists")}
        </Link>
      </li>
      <li>
        <Link className="link" to="/admin/advertising">
          Lists all Ads
        </Link>
      </li>
      <li>
        <Link className="link" to="/admin/message">
          Message
        </Link>
      </li>
      <li>
        <Link className="link" to="/admin/new-production">
          Create Item Product
        </Link>
      </li>
    </ListNavigation>
  );

  const screenWidth = window.screen.width;

  return (
    <HeaderContainer scrollNav={scrollNav}>
      <HeaderTop scrollNav={scrollNav}>
        <Logo to="/">
          <img src={Logo_SVG} alt="" width="auto" height="auto" />{" "}
          <span>au 79 code</span>
        </Logo>
        {/* <Lang href="/" onClick={handleChangeLang} >{t("language")}</Lang> */}

        <Nav>
          <NavItem>
            <SelectLangue />
          </NavItem>
          {userInfo && userInfo.isAdmin && (
            <NavItem>
              <Popover
                placement="bottomRight"
                content={AdminContente}
                trigger={screenWidth > 768 ? "hover" : "click"}
              >
                <NavLink>
                  <AiTwotoneSetting className="icon" />
                </NavLink>
              </Popover>
            </NavItem>
          )}
          <NavItem>
            <Popover
              placement="bottomRight"
              trigger={screenWidth > 768 ? "hover" : "click"}
              content={
                <ListNavigation>
                  {userInfo && (
                    <li>
                      <Link className="link" to="/advertising/profile">
                        My Ads
                      </Link>
                    </li>
                  )}
                  {userInfo && userInfo.typeUser === "merchant" && (
                    <>
                      <li>
                        <Link className="link" to="/myproducts">
                          {" "}
                          {t("my_products")}{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="link" to="/myorder">
                          {t("my_order")}
                        </Link>
                      </li>
                      <li>
                        <Link className="link" onClick={handleCreateProduct}>
                          {t("add_more_products")}
                        </Link>
                      </li>
                    </>
                  )}
                  {!userInfo && (
                    <li>
                      <Link to="/auth" className="link">
                        {t("signin")} / {t("signup")}
                      </Link>
                    </li>
                  )}
                  {userInfo && (
                    <li>
                      <Link className="link" onClick={handleLogOut}>
                        {t("logout")}
                      </Link>
                    </li>
                  )}
                </ListNavigation>
              }
            >
              <NavLink>
                <FaUser className="icon" />
              </NavLink>
            </Popover>
          </NavItem>
          <NavItem>
            <NavLink to="/cart" currentLang={currentLang}>
              <FaShoppingCart className="icon" />
              {cartItems.length > 0 ? (
                <span className="count">{cartItems.length}</span>
              ) : (
                <span className="count">0</span>
              )}
            </NavLink>
          </NavItem>
          {/* <NavItem>
           
          </NavItem> */}
          <ToggleMenu open={showToggleMenu} setOpen={setShowToggleMenu} />
        </Nav>
      </HeaderTop>
      <BottomHeader scrollNav={scrollNav}>
        {/* <ToggleBtn
          showToggleMenu={showToggleMenu}
          className="menuButton"
          onClick={() => setShowToggleMenu(!showToggleMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </ToggleBtn> */}

        <ul className="navigation">
          <li className="nav_item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="nav_item dropdown">
            <Link to="/services" className="link">
              Services <RiArrowDownSLine />
            </Link>
            <ul className="sub_menu">
              <li>
                <Link to="/design" className="sub_link">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/photography" className="sub_link">
                  Photography
                </Link>
              </li>
              <li>
                <Link to="/printing" className="sub_link">
                  Printing Press
                </Link>
              </li>
              <li>
                <Link to="/exhibition" className="sub_link">
                  Exhibition Management
                </Link>
              </li>
              <li>
                <Link to="/programming" className="sub_link">
                  Programming
                </Link>
              </li>
              <li>
                <Link to="/marketing" className="sub_link">
                  Marketing
                </Link>
              </li>
              <li>
                <Link to="/production" className="sub_link">
                  Production
                </Link>
              </li>
              <li>
                <Link to="/pos" className="sub_link">
                  POS
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav_item">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className="nav_item">
            <Link to="/contact-us" className="link">
              Contact
            </Link>
          </li>
          <li className="nav_item ">
            <Link to="/advertising/register" className="link add_ads">
              Add Ads
            </Link>
          </li>
          <li className="nav_item">
            <Link to="/register" className="link create_shop">
              Create Shop
            </Link>
          </li>
        </ul>

        <BurgerMenu />

        <Route render={({ history }) => <SearchBox history={history} />} />
      </BottomHeader>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  max-width: var(--max-width);
  margin: 0 auto !important;

  /* position: ${({ scrollNav }) =>
    scrollNav ? "-webkit-sticky !important" : "relative"}; */
  position: ${({ scrollNav }) => (scrollNav ? "sticky" : "sticky")};
  top: 0;
  z-index: 100;
  @media only screen and (max-width:768px) {
    position: inherit !important;
  }
`;

const HeaderTop = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  background: #fff;
  @media only screen and (max-width: 768px) {
    height: 80px;
    padding: 0 0.7rem;
  }
`;

const BottomHeader = styled.div`
  height: 60px !important;
  line-height: 60px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;

  background: ${({ scrollNav }) =>
    scrollNav ? "var(--silver-color)" : "var(--silver-color)"};

  & .navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    /* gap: 10px; */
    list-style: none;
    padding: 0;
    margin: 0;
    & .nav_item {
      /* cursor: pointer; */
      & .link {
        height: 100%;
        padding: 20px 10px !important;
        color: var(--dark-light-color);
        text-decoration: none !important;
        text-transform: uppercase;
        font-weight: 700 !important;
        &:hover {
          background: var(--orange-color) !important;
          color: var(--white-color);
          /* & .link {
            color: var(--white-color);
          } */
        }
      }

      &.dropdown {
        /* display: block; */
        &:hover {
          & .sub_menu {
            display: block;
            visibility: visible;
            opacity: 1;
          }
        }
      }

      & .sub_menu {
        width: 250px;
        position: absolute;
        top: 55px;
        left: 0px;
        list-style: none;
        padding: 0;
        margin: 0;
        background: var(--dark-light-color) !important;
        visibility: hidden;
        opacity: 0;
        display: none;
        & li {
          padding: 0;
          line-height: 30px;
          width: 100%;
          & .sub_link {
            color: var(--silver-color);
            text-decoration: none;
            padding: 10px 2rem;
            display: block;
            &:hover {
              background: var(--orange-color);
              color: white;
            }
          }
        }
      }
    }

    & .link.add_ads,
    & .link.create_shop {
      border: 1px solid var(--dark-light-color);
      padding: 7px 10px !important;
      text-transform: capitalize;
      font-weight: 400 !important;
      &:hover {
        background: var(--dark-light-color) !important;
        color: var(--silver-color) !important;
      }
    }
    & .link.create_shop {
      margin-left: 5px;
      margin-right: 5px;
    }

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-bottom: 0 !important;
  padding: 0;
`;
const NavItem = styled.li`
  margin: 0 0.7rem;
  @media only screen and (max-width: 995px) {
    margin: 0 0.4rem;
  }
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--silver-color);
  & .icon {
    font-size: 1.5rem;
  }

  & .count {
    position: relative;
    bottom: 1rem;
    right: ${({ currentLang }) => (currentLang === "ar" ? "-.3rem" : ".4rem")};
    background: var(--orange-color);
    color: #fff;
    padding: 6px;
    border-radius: 50%;
    font-size: 0.9rem;
    width: 21px !important;
    height: 21px !important;
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }
  &:hover {
    color: var(--orange-color);
  }
`;

const Content = styled.div`
  background: #fff;
  padding: 1rem 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 99999999;
`;

const LinkR = styled.a`
  text-decoration: none;
  border-radius: 10px;
  border: 1px solid var(--orange-color);
  color: var(--silver-color);
  text-transform: capitalize;
  padding: 0.5rem 1.5rem;
  margin: 0.7rem 0;
  text-align: center;
  transition: 0.2s all ease-in;
  font-size: 1rem;
  &:hover {
    color: #fff;
    background: var(--orange-color);
    text-decoration: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
    margin: 0.5rem 0;
  }
`;

const LinkP = styled(Link)`
  text-decoration: none;
  border-radius: 10px;
  color: var(--silver-color);
  padding: 3px 1rem;
  margin: 0.7rem 0;
  text-align: center;
  transition: 0.2s all ease-in;
  font-size: 0.9rem;
  text-transform: capitalize !important;
  &:hover {
    color: #fff;
    background: var(--orange-color);
    text-decoration: none;
  }
  &.btn_logOut {
    background: var(--orange-color);
    color: #fff;
  }
  &.btn_logOut:hover {
    opacity: 0.9;
  }
  &.btn_signin {
    background: var(--orange-color);
    color: #fff;
    text-transform: capitalize !important;
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
    margin: 0.5rem 0;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;

  span {
    color: var(--silver-color);
    text-transform: uppercase;
    font-weight: 700;
  }

  & img {
    width: 48px;
    height: 48px;
  }
  &:hover {
    text-decoration: none;
    opacity: 0.9;
    color: var(--silver-color);
  }
  @media only screen and (max-width: 560px) {
    span {
      display: none;
    }
  }
`;

const ListNavigation = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 !important;
  margin-bottom: 0 !important;

  & li {
    color: #111;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 5px 0;
    /* background: #ececec; */
    & .link {
      text-decoration: none;
      color: #111;
    }
  }
`;

const ToggleBtn = styled.div`
  cursor: pointer;
  width: 44px;
  height: 44px;
  padding: 5px;
  text-align: center;
  font-size: 0;
  border: none;
  background: none;
  /* z-index: 12; */
  perspective: 500px;
  border: 1px solid #cccccc;
  transition: 0.4s;
  z-index: 200;
  background: #fff;
  transform: ${({ showToggleMenu }) => showToggleMenu && "rotate(45deg)"};
  z-index: ${({ showToggleMenu }) => showToggleMenu && "99999999999"};
  position: ${({ showToggleMenu }) => showToggleMenu && "relative"};
  &:hover {
    background: #f7f7f7;
  }

  & span {
    display: inline-block;
    margin: 3px;
    width: 4px;
    height: 4px;
    background: #c68787;
    transition: 0.8s;
  }

  @media only screen and (min-width: 768px) {
    /* display: none; */
  }
`;

export default NavBar;
