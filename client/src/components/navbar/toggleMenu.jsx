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
  const handleClick = () => {
    console.log("clicker");
  };
  return (
    <Nav open={open} className="toggleMenu open" id="menu">
      <Row justify="center" gutter={[50, 50]} className="row_container">
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <LinkStyling to="/" onClick={handleCloseMenu} className="link">
            <span> {t("nav_home")}</span>
          </LinkStyling>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <DropDownList>
            <LinkStyling className="link service" to="#/">
              <span>{t("nav_services")}</span>
            </LinkStyling>
            <DropDownContent>
              <SubLink to="/advertising" onClick={handleCloseMenu}>
                {t("adv_service")}
              </SubLink>
              <SubDropList>
                <SubLink to="#/">
                  MARKETING <FiChevronDown />
                </SubLink>

                <SubContent>
                  <Link
                    to="/marketing"
                    className="link"
                    onClick={handleCloseMenu}
                  >
                    {t("e_marketing")}{" "}
                  </Link>
                  <Link
                    to="/out-marketing"
                    className="link"
                    onClick={handleCloseMenu}
                  >
                    {t("out_marketing")}
                  </Link>
                </SubContent>
              </SubDropList>
              <SubDropList>
                <SubLink to="#/">
                  ECOMMERCE <FiChevronDown />
                </SubLink>

                <SubContent>
                  <Link
                    className="link"
                    to="/e-commerce"
                    onClick={handleCloseMenu}
                  >
                    {" "}
                    {t("delivery")}
                  </Link>
                  <Link
                    className="link"
                    to="/pageScreen"
                    onClick={handleCloseMenu}
                  >
                    {t("payment")}
                  </Link>
                </SubContent>
              </SubDropList>

              <SubLink to="/production" onClick={handleCloseMenu}>
                {t("prod_service")}
              </SubLink>
              <SubLink to="/design" onClick={handleCloseMenu}>
                {t("design_service")}
              </SubLink>
              <SubLink to="/photography" onClick={handleCloseMenu}>
                {t("photo_service")}
              </SubLink>
              <SubLink to="/programming" onClick={handleCloseMenu}>
                {t("prog_service")}
              </SubLink>
            </DropDownContent>
          </DropDownList>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <LinkStyling onClick={handleCloseMenu} className="link" to="/about">
            <span> {t("nav_about")}</span>
          </LinkStyling>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <LinkStyling
            onClick={handleCloseMenu}
            className="link"
            to="/contact-us/"
          >
            <span> {t("nav_contact")}</span>
          </LinkStyling>
        </Col>
      </Row>
    </Nav>
  );
}
const DropDownContent = styled.div`
  /* display: none; */
  opacity: 0;
  text-align: center;
  width: 100%;
  padding: 30px 0 0 0;
  position: absolute;
  top: -4000px;
`;
const SubContent = styled.div`
  display: none;
  & .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #93a3b3;
    text-decoration: none;
    padding: 2px 0;
    &:hover {
      color: var(--orange-color);
    }
  }
`;
const SubDropList = styled.div`
  &:hover ${SubContent} {
    display: block;
  }
`;

const SubLink = styled(Link)`
  display: block;
  color: #93a3b3;
  text-decoration: none;
  padding: 5px 0;
  /* margin: 2px 0; */
  &:hover {
    color: var(--orange-color);
  }
`;

const DropDownList = styled.div`
  /* text-align: center; */
  /* width: 100%; */
  @keyframes Styleanimatin {
    0% {
      transform: translateY(-30px);
      opacity: 0;
    }
    50% {
      transform: translateY(-10px);
      /* opacity: 0.7; */
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  &:hover ${DropDownContent} {
    display: block;
    opacity: 1;
    position: inherit;
    animation-name: Styleanimatin;
    animation-duration: 0.7s;
  }
`;
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

const LinkStyling = styled(Link)`
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
    background: #ffffff32;
    color: var(--orange-color);
    text-decoration: none;
  }
  & span {
    transform: rotate(-45deg);
  }
  @media only screen and (max-width: 995px) {
    width: 90px;
    height: 90px;
  }
`;

export default ToggleMenu;
