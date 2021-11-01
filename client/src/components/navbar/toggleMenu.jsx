import React from "react";
import { Popover, Menu, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
// import "/css/style.css";

// const { SubMenu } = Menu;

function ToggleMenu({ open, setOpen }) {
  const { t } = useTranslation();
  const handleCloseMenu = () => {
    setOpen(false);
  };
  return (
    <Nav open={open} className="toggleMenu open" id="menu">
      <Row justify="center" gutter={[10, 10]} className="row_container">
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <NavItem className="nav_item">
            <Link to="/" onClick={handleCloseMenu} className="link">
              <span> {t("nav_home")}</span>
            </Link>
          </NavItem>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <NavItem className="nav_item">
            <Link className="link service" to="#/" >
              <span>{t("nav_services")}</span>
            </Link>
            <SubLinksStyling className="subLinks">
              <li>
                <Link  to="/advertising" onClick={handleCloseMenu}>{t("adv_service")}</Link>
              </li>
              <li>
                <Link to="#/">
                  MARKETING <FiChevronDown />
                </Link>
                <ul className="sub__nav">
                  <li>
                    <Link to="/marketing" onClick={handleCloseMenu}>
                      {t("e_marketing")}{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/out-marketing" onClick={handleCloseMenu}>
                      {t("out_marketing")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#/">
                  ECOMMERCE <FiChevronDown />
                </Link>
                <ul className="sub__nav">
                  <li>
                    <Link to="/e-commerce" onClick={handleCloseMenu}>
                      {" "}
                      {t("delivery")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/pageScreen" onClick={handleCloseMenu}>
                      {t("payment")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/production" onClick={handleCloseMenu}>
                  {t("prod_service")}
                </Link>
              </li>
              <li>
                <Link to="/design" onClick={handleCloseMenu}>
                  {t("design_service")}
                </Link>
              </li>
              <li>
                <Link to="/photography" onClick={handleCloseMenu}>
                  {t("photo_service")}
                </Link>
              </li>
              <li>
                <Link to="/programming" onClick={handleCloseMenu}>
                  {t("prog_service")}
                </Link>
              </li>
            </SubLinksStyling>
          </NavItem>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <NavItem className="nav_item">
            <Link onClick={handleCloseMenu} className="link" to="/about">
              <span> {t("nav_about")}</span>
            </Link>
          </NavItem>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <NavItem className="nav_item">
            <Link onClick={handleCloseMenu} className="link" to="/contact-us/">
              <span> {t("nav_contact")}</span>
            </Link>
          </NavItem>
        </Col>
      </Row>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;
  background: rgba(11, 27, 52, 0.94);
  padding: 5% 15% 40px;
  width: 100vw;
  opacity: 0;
  visibility: hidden;
  transition: opacity ease 0.5s;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition-delay: ${({ open }) => open && ".2s"};
  visibility: ${({ open }) => open && "visible"};
  opacity: ${({ open }) => open && "1"};
  transition: transform 0.3s ease-in-out;

  & span {
    animation: ${({ open }) => open && "menuBtnAnim .4s"};
  }
  & .row_container {
    position: relative;
    top: 80px;
  }
`;

const SubLinksStyling = styled.ul`
  /* display: none; */
  padding:2rem 0;

  & a {
    color: #93a3b3;
    font-size: 0.95rem;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  & li.navItem:hover {
    transition: 0.3s all ease-in-out;
    color: #93a3b3;
  }
  & .sub__nav {
    z-index: 9999;
  }
  & .sub__nav a {
    color: #93a3b3;
    font-size: 0.95rem;
    text-transform: capitalize;
    letter-spacing: 0.5px;
  }
  & .sub__nav a:hover {
    text-decoration: none;
    color: var(--orange-color);
  }
`;

const NavItem = styled.div`
  text-align: center;

  & .link {
    color: #fff;
    border: 1px solid var(--orange-color);
    text-transform: capitalize;
    letter-spacing: 0.5px;
    text-decoration: none;
    transform: rotate(45deg);
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: 0.2s all ease-in;
    margin: auto;

    &:hover {
      background: #ffffff42;
      color: var(--orange-color);
      text-decoration: none;
    }
    & span {
      transform: rotate(-45deg);
    }
  }
  & .link.service {
    &:hover ${SubLinksStyling} {
      display: none !important;
    }
  }
`;

export default ToggleMenu;
