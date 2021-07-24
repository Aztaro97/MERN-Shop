import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Popover } from "antd";
import MAinContainer from "../MainContainer";

function NavBar() {
  const [scrollNav, setScrollNav] = useState(false);

  const ChangeNav = () => {
    if (window.scrollY >= 80) {
      console.log("object");
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ChangeNav);
  }, []);
  const ProfileContent = (
    <Content>
      <LinkP to="/profile">my profile</LinkP>
      <LinkP to="/myproducts">my products</LinkP>
      <LinkP to="/add-product">add more products</LinkP>

      <LinkP className="btn_logOut" to="/logout">
        Log Out
      </LinkP>
    </Content>
  );
  return (
    <Header scrollNav={scrollNav}>
      <Lang to="/arab">Arabic</Lang>
      <Nav>
        <NavItem>
          <Popover
            placement="bottomRight"
            content={ProfileContent}
            trigger="hover"
          >
            <NavLink>
              <FaUser className="icon" />
            </NavLink>
          </Popover>
        </NavItem>
        <NavItem>
          <NavLink>
            <FaShoppingCart className="icon" />
            <span className="count">10</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="menuButton menuBtn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </NavLink>
        </NavItem>
        <nav className="toggleMenu" id="menu">
          <div className="row">
            <div className="col">
              <div className="item">
                <button
                  onClick="homePage(0)"
                  className="btn itemLink text-uppercase weight-600"
                >
                  Home
                </button>
              </div>
            </div>
            <div className="col">
              <div className="item">
                <a
                  onClick="homePage(1)"
                  className="itemLink text-uppercase weight-600"
                >
                  Services
                </a>
                <ul className="subLinks">
                  <li>
                    <a
                      href="#"
                      onClick="menuToggling()"
                      className="subLink text-uppercase weight-500"
                    >
                      Advertising
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick="menuToggling()"
                      className="subLink text-uppercase weight-500"
                    >
                      marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick="menuToggling()"
                      className="subLink text-uppercase weight-500"
                    >
                      E-commerce
                    </a>
                  </li>
                  <li>
                    <a
                      href="./pos.html"
                      onClick="menuToggling()"
                      className="subLink text-uppercase weight-500"
                    >
                      Pos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick="menuToggling()"
                      className="subLink text-uppercase weight-500"
                    >
                      Print
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick="menuToggling()"
                      className="subLink text-uppercase weight-500"
                    >
                      Photography
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick="menuToggling()"
                      className="subLink text-uppercase weight-500"
                    >
                      design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick="menuToggling()"
                      className="subLink text-uppercase weight-500"
                    >
                      Delivery
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick="menuToggling()"
                      className="subLink text-uppercase weight-500"
                    >
                      Programming
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="item">
                <a
                  onClick="homePage(2)"
                  className="itemLink text-uppercase weight-600"
                >
                  About Us
                </a>
              </div>
            </div>
            <div className="col">
              <div className="item">
                <a
                  onClick="homePage(3)"
                  className="itemLink text-uppercase weight-600"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="menuShapes">
            <div className="a a1"></div>
            <div className="a a2"></div>
            <div className="a a3"></div>
            <div className="a a4"></div>
            <div className="s s1"></div>
            <div className="s s2"></div>
            <div className="s s3"></div>
            <div className="s s4"></div>
          </div>
        </nav>
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
  padding:0 3rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99999999999999;
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};
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
  }
`;
const NavItem = styled.li`
  padding: 0 1rem;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--silver-color);
  & .icon {
    font-size: 1.4rem;
  }
  &.menuButton {
    position: absolute;
    top: -1rem;
    width: 44px;
    height: 44px;
    padding: 5px;
    text-align: center;
    font-size: 0;
    border: none;
    background: none;
    z-index: 12;
    perspective: 500px;
    border: 1px solid #cccccc;
    transition: 0.2s;
    z-index: 200;
    background: #fff;
    @media only screen and (max-width: 995px) {
      right: -0.7rem;
    }
  }
  &.menuButton span {
    display: inline-block;
    margin: 3px;
    width: 4px;
    height: 4px;
    background: #c68787;
    transition: 0.8s;
  }
  &.menuButton:hover {
    background: #f7f7f7;
  }
  & .count {
    position: relative;
    bottom: 1rem;
    right: 0.4rem;
    background: var(--orange-color);
    color: #fff;
    padding: 4px;
    border-radius: 50%;
  }
  &:hover {
    color: var(--orange-color);
  }
`;
const Lang = styled(Link)`
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
  }
`;

const Content = styled.div`
  background: #fff;
  padding: 1rem 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`;
export default NavBar;
