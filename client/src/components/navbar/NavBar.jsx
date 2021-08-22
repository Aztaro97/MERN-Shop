import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, Redirect, useHistory } from "react-router-dom";
import { FaUser, FaShoppingCart, FaUserCog } from "react-icons/all";
import { Popover, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../flux/actions/userAction";
import { createProduct } from "../../flux/actions/productAction";
import { useTranslation } from "react-i18next";
import SelectLangue from "./SelectLangButton";
import ToggleMenu from "./toggleMenu";

import "./navbar.css";

//   Logo Import State
import Logo_SVG from "../../img/logo.svg";

function NavBar() {
  const { t } = useTranslation();
  const [scrollNav, setScrollNav] = useState(false);
  const [showToggleMenu, setShowToggleMenu] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const { cartItems } = useSelector((state) => state.cart);

  const { userInfo } = useSelector((state) => state.userLogin);

  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = useSelector((state) => state.productCreate);

  const handleLogOut = () => {
    dispatch(logout());
  };

  const ChangeNav = () => {
    if (window.scrollY >= 40) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const handleCreateProduct = () => {
    if (userInfo) {
      history.push("/auth");
    }
    dispatch(createProduct());
  };

  useEffect(() => {
    window.addEventListener("scroll", ChangeNav);

    if (successCreate) {
      history.push(`/add-product/${createdProduct._id}`);
    }
  }, [successCreate, history]);

  const ProfileContentLogin = (
    <Content>
      {userInfo && (userInfo.typeUser === "merchant" || userInfo.isAdmin) ? (
        <>
          <LinkR href="/myproducts"> {t("my_products")} </LinkR>
          <LinkR href="/myorder">{t("my_order")}</LinkR>
          <LinkR onClick={handleCreateProduct}>{t("add_more_products")}</LinkR>
        </>
      ) : (
        <>
          <LinkR
            style={{ textTransform: "capitalize", letterSpacing: "1px" }}
            href="/register"
          >
           {t("create_your_shop")}
          </LinkR>
        </>
      )}

      <LinkP className="btn_logOut" onClick={handleLogOut}>
      {t("logout")}
      </LinkP>
    </Content>
  );
  const ProfileContentLogOut = (
    <Content>
      <LinkR
        style={{ textTransform: "capitalize", letterSpacing: "1px" }}
        href="/register"
      >
        {t("create_your_shop")}
      </LinkR>
      <LinkP to="/auth" className="btn_signin">
      {t("logout")}
      </LinkP>
    </Content>
  );
  const AdminContente = (
    <Content>
      <LinkR href="/admin/userlist">{t("users_lists")}</LinkR>
      <LinkR href="/admin/productlist">{t("products_lists")}</LinkR>
      <LinkR href="/admin/orderlist">{t("orders_lists")}</LinkR>
    </Content>
  );

  const marketingMenu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header scrollNav={scrollNav}>
      <Logo href="/">
        <img src={Logo_SVG} alt="" /> au79code
      </Logo>
      {/* <Lang href="/" onClick={handleChangeLang} >{t("language")}</Lang> */}

      <Nav>
        <SelectLangue />
        {userInfo && userInfo.isAdmin && (
          <NavItem>
            <Popover
              placement="bottomRight"
              content={AdminContente}
              trigger="hover"
            >
              <NavLink>
                <FaUserCog className="icon" size={30} />
              </NavLink>
            </Popover>
          </NavItem>
        )}
        <NavItem>
          <Popover
            placement="bottomRight"
            content={userInfo ? ProfileContentLogin : ProfileContentLogOut}
            trigger="hover"
          >
            <NavLink>
              <FaUser className="icon" />
            </NavLink>
          </Popover>
        </NavItem>
        <NavItem>
          <NavLink to="/cart">
            <FaShoppingCart className="icon" />
            {cartItems.length > 0 ? (
              <span className="count">{cartItems.length}</span>
            ) : (
              <span className="count">0</span>
            )}
          </NavLink>
        </NavItem>
        <NavItem>
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
        <ToggleMenu open={showToggleMenu} />
      </Nav>
    </Header>
  );
}
const Hr = styled.div`
  background: #cecece;
  height: 0.1px;
`;
const Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0px 8px 5px 1px rgba(0,0,0,0.11)" : "none"};
  transition: ${({ scrollNav }) =>
    scrollNav ? "background 0s ease-in-out" : "background .5s ease-in-out"};
  @media only screen and (max-width: 995px) {
    padding-left: 1rem;
  }
`;
const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-bottom: 0;
  position: relative;
  right: 1.8rem;
  top: 0.6rem;
  @media only screen and (max-width: 995px) {
    right: -1rem;
    top: 0.1rem;
  }
`;
const NavItem = styled.li`
  margin: 0 1rem;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--silver-color);
  & .icon {
    font-size: 1.4rem;
  }

  & .count {
    position: relative;
    bottom: 1rem;
    right: 0.4rem;
    background: var(--orange-color);
    color: #fff;
    padding: 6px;
    border-radius: 50%;
    /* width:70px;
    height:70px; */
    font-size: 1rem;
  }
  &:hover {
    color: var(--orange-color);
  }
`;
const Lang = styled.a`
  text-decoration: none;
  border: 1px solid var(--orange-color);
  color: var(--silver-color);
  padding: 0.3rem 2rem;
  border-radius: 30px;
  transition: 0.3s all ease-in-out;
  letter-spacing: 3px;
  &:hover {
    color: #fff;
    background: var(--orange-color);
    text-decoration: none;
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
  text-transform: uppercase;
  padding: 0.5rem 1.5rem;
  margin: 0.7rem 0;
  text-align: center;
  transition: 0.2s all ease-in;
  &:hover {
    color: #fff;
    background: var(--orange-color);
    text-decoration: none;
  }
`;

const LinkP = styled(Link)`
  text-decoration: none;
  border-radius: 10px;
  border: 1px solid var(--orange-color);
  color: var(--silver-color);
  text-transform: uppercase;
  padding: 0.5rem 1.5rem;
  margin: 0.7rem 0;
  text-align: center;
  transition: 0.2s all ease-in;
  &:hover {
    color: #fff;
    background: var(--orange-color);
    text-decoration: none;
  }
  &.btn_logOut {
    margin-top: 1rem;
    background: var(--orange-color);
    color: #fff;
    font-weight: 700;
  }
  &.btn_logOut:hover {
    opacity: 0.9;
  }
  &.btn_signin {
    text-transform: capitalize;
    background: var(--orange-color);
    color: #fff;
    padding: 0.3rem 3rem;
    /* margin:2rem 0 */
  }
`;

const Logo = styled.a`
  position: relative;
  text-decoration: none;
   color: var(--silver-color);
   text-transform: uppercase;
   font-weight: 700;
  top: 0px;
  z-index: 999999999999;
  & img {
    width: 3rem;
  }
  &:hover {
    text-decoration: none;
    opacity: 0.9;
    color: var(--silver-color);
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
  /* @media only screen and (max-width: 995px) {
    right: -0.7rem;
  } */
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
