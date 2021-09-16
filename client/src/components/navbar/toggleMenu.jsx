import React from "react";
import { Popover, Menu } from "antd";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

const { SubMenu } = Menu;

function ToggleMenu({ open }) {
  const { t } = useTranslation();
  return (
    <Nav open={open} className="toggleMenu open" id="menu">
      <div className="row">
        <div className="col">
          <div className="item">
            <a
              href="/"
              // onClick={() => (document.location.href = "/")}
              className="btn itemLink text-uppercase weight-600"
            >
              {t("nav_home")}
            </a>
          </div>
        </div>
        <div className="col">
          <div className="item">
            <a
              onClick="homePage(1)"
              className="itemLink text-uppercase weight-600"
              href="#/"
            >
              {t("nav_services")}
            </a>
            <SubLinks className="subLinks">
              <li>
                <a
                  href="/advertising"
                  onClick="menuToggling()"
                  className="subLink text-uppercase weight-500"
                >
                  {t("adv_service")}
                </a>
              </li>
              <li className="navItem">
                <a
                  href="#/"
                  // onClick="menuToggling()"
                  className="subLink text-uppercase weight-500"
                >
                  MARKETING <FiChevronDown />
                </a>
                <ul className="sub__nav">
                  <li>
                    <a href="/marketing">{t("e_marketing")}</a>
                  </li>
                  <li>
                    <a href="/out-marketing">{t("out_marketing")}</a>
                  </li>
                </ul>
              </li>

              <li className="navItem">
                <a
                  href="#/"
                  // onClick="menuToggling()"
                  className="subLink text-uppercase weight-500"
                >
                  ECOMMERCE <FiChevronDown />
                </a>
                <ul className="sub__nav">
                  <li>
                    <a href="/e-commerce"> {t("delivery")}</a>
                  </li>
                  <li>
                    <a href="/pageScreen">{t("payment")}</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="/production"
                  onClick="menuToggling()"
                  className="subLink text-uppercase weight-500"
                >
                  {t("prod_service")}
                </a>
              </li>
              <li>
                <a
                  href="/design"
                  onClick="menuToggling()"
                  className="subLink text-uppercase weight-500"
                >
                  {t("design_service")}
                </a>
              </li>
              <li>
                <a
                  href="/photography"
                  onClick="menuToggling()"
                  className="subLink text-uppercase weight-500"
                >
                  {t("photo_service")}
                </a>
              </li>
              <li>
                <a
                  href="/programming"
                  onClick="menuToggling()"
                  className="subLink text-uppercase weight-500"
                >
                  {t("prog_service")}
                </a>
              </li>
            </SubLinks>
          </div>
        </div>
        <div className="col">
          <div className="item">
            <a
              // onClick="homePage(2)"
              className="itemLink text-uppercase weight-600"
              href="/about"
            >
              {t("nav_about")}
            </a>
          </div>
        </div>
        <div className="col">
          <div className="item">
            <a
              // onClick="homePage(3)"
              className="itemLink text-uppercase weight-600"
              href="/contact-us/"
            >
              {t("nav_contact")}
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
`;

const SubLinks = styled.ul`
  & li.navItem:hover {
    max-height: 200px !important;
    transition: 0.3s all ease-in-out;
  }
  & .sub__nav {
    z-index: 9999;
  }
  & .sub__nav a {
    color: #93a3b3;
    font-size: 0.8rem;
    text-transform: capitalize;
  }
  & .sub__nav a:hover {
    text-decoration: none;
    color: var(--orange-color);
  }
`;

export default ToggleMenu;
