import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdArrowDropDown, MdKeyboardArrowDown } from "react-icons/md";
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
    if (window.scrollY >= 1) {
      setScrollNav(true);
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
    </ListNavigation>
  );

  const screenWidth = window.screen.width;

  return (
    <HeaderContainer>
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
            <ToggleBtn
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
            </ToggleBtn>
          </NavItem>
          <ToggleMenu open={showToggleMenu} setOpen={setShowToggleMenu} /> */}
        </Nav>
      </HeaderTop>
      <BottomHeader scrollNav={scrollNav}>
        {/* <p>fffff</p> */}
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          className="menu"
          mode="horizontal"
          style={{ background: "transparent", border: "none", color: "#000" }}
        >
          <Menu.Item key="advertising">
            <Link to="/advertising" className="link">
              Store
            </Link>
          </Menu.Item>  
          <Menu.Item key="ecommerce">
            <Link to="/register" className="link">
              + Add Ads
            </Link>
          </Menu.Item>
          <SubMenu
            key="services"
            title={`Our Services `}
            popupClassName="submenu_content"
          >
            <Menu.Item key="setting:1">
              <Link to="/design" className="sub_link">
                Design
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:2">
              <Link to="/photography" className="sub_link">
                Photography
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:3">
              <Link to="/printing" className="sub_link">
                Printing Press
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:4">
              <Link to="/exhibition" className="sub_link">
                Exhibition Management
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:5">
              <Link to="/programming" className="sub_link">
                Programming
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:6">
              <Link to="/marketing" className="sub_link">
                Marketing
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:6">
              <Link to="/production" className="sub_link">
                Production
              </Link>
            </Menu.Item>
            <Menu.Item key="setting:6">
              <Link to="/pos" className="sub_link">
                POS
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </BottomHeader>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  max-width: var(--max-width);
  margin: 0 auto !important;
  height: 100% !important;
  position: sticky;
  top: 0;
  z-index: 99;
`;

const BottomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  background: ${({ scrollNav }) =>
    scrollNav ? "var(--orange-color)" : "var(--orange-color)"};

  /* position: fixed;
  right: 0;
  left: 0; */
  /* top: 0; */
  & .ant-menu {
    & .ant-menu-item {
      position: static !important;
    }
  }

  & .ant-menu-item,
  & .ant-menu-submenu,
  & .ant-menu-submenu-title,
  & .link {
    color: #fff !important;
    text-decoration: none !important;
    /* //  Import Do not remove   ///// */
    position: relative !important;
    &:hover {
      color: #111 !important;
    }
    &:after {
      border-bottom: none !important;
    }
  }

  & .ant-menu-submenu {
    & .ant-menu-submenu-title {
      &:after {
        border-bottom: none !important;
      }
    }
    &:hover {
      color: #111 !important;
      & .ant-menu-submenu-arrow {
        color: #111 !important;
      }
    }
  }
  & .ant-menu-submenu-arrow {
    color: #fff !important;
    display: flex;
    position: absolute !important;
    right: -16px !important;
    top: 46%;
    &:hover {
      color: #111 !important;
    }
  }
`;

const HeaderTop = styled.div`
  /* height: 80px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 99;
  padding:1rem 2rem;
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "#fff")};
  /* box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0px 2px 0px 0px rgba(0,0,0,0.11)" : "none"}; */
  @media only screen and (max-width: 768px) {
    height: 80px;
    padding: 0 0.7rem;
  }
  & > div {
    position: fixed;
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
  z-index: 999999999999;
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
`;

export default NavBar;
