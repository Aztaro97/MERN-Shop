import React from "react";
import { Popover, Menu } from "antd";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

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
            <ul className="subLinks">
              <li>
                <a
                  href="#/"
                  onClick="menuToggling()"
                  className="subLink text-uppercase weight-500"
                >
                  {t("adv_service")}
                </a>
              </li>

              <DropMenu
                style={{
                  background: "transparent",
                  textAlign: "center",
                  fontSize: "1rem",
                  margin: "0",
                  position: "relative",
                  // bottom: "10px",
                  left: "10px",
                }}
                className="dropMenu"
                mode="vertical"
                trigger="click"
              >
                <SubMenu
                  key="MARKETING"
                  title={t("mark_service")}
                  style={{
                    color: "#93a3b3",
                    textAlign: "center",
                    background: "transparent",
                    margin: "0",
                    padding: "0",
                  }}
                  popupClassName="SubMenu"
                >
                  <Menu.Item key="1">
                    <a href="#/" className="menu_item_link">
                      {t("e_marketing")}
                    </a>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <a href="#/" className="menu_item_link">
                      {t("out_marketing")}
                    </a>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="ECOMMERCE"
                  title={t("eco_service")}
                  style={{
                    color: "#93a3b3",
                    textAlign: "center",
                    background: "transparent",
                    margin: "0",
                  }}
                  popupClassName="SubMenu"
                >
                  <Menu.Item key="3">
                    <a href="/e-commerce" className="menu_item_link">
                      {t("delivery")}
                    </a>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <a href="#/" className="menu_item_link">
                      {t("payment")}
                    </a>
                  </Menu.Item>
                </SubMenu>
              </DropMenu>
              {/* <li>
                    <a
                      href="/e-commerce"
                      onClick="menuToggling()"
                      className="subLink text-uppercase weight-500"
                    >
                      E-commerce
                    </a>
                  </li> */}
              <li>
                <a
                  href="./pos.html"
                  onClick="menuToggling()"
                  className="subLink text-uppercase weight-500"
                >
                  {t("prod_service")}
                </a>
              </li>
              <li>
                <a
                  href="#/"
                  onClick="menuToggling()"
                  className="subLink text-uppercase weight-500"
                >
                  {t("design_service")}
                </a>
              </li>
              <li>
                <a
                  href="#/"
                  onClick="menuToggling()"
                  className="subLink text-uppercase weight-500"
                >
                  {t("photo_service")}
                </a>
              </li>
              <li>
                <a
                  href="#/"
                  onClick="menuToggling()"
                  className="subLink text-uppercase weight-500"
                >
                  {t("prog_service")}
                </a>
              </li>
            </ul>
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

const DropMenu = styled(Menu)`
  background: var(--orange-color);
  color: #93a3b3;
  border: none;

  & .ant-menu-submenu-title:hover {
    & .ant-menu-title-content {
      color: var(--orange-color);
    }
    & .ant-menu-submenu-arrow::before,
    .ant-menu-submenu-arrow::after {
      background: var(--orange-color);
    }
  }

  /* Menu Vertical */
  & .ant-menu-submenu-vertical .ant-menu-submenu-open.ant-menu-submenu-active {
    background: red;
  }

  /* & .ant-menu-submenu ant-menu-submenu-vertical ant-menu-submenu-open ant-menu-submenu-active */
`;

const SubMenuCustom = styled(SubMenu)`
  &.SubMenu {
    background: red;
    display: none;
  }
`;

export default ToggleMenu;
