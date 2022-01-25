import React from "react";
import { useState } from "react";
import { Drawer, Button, Radio, Space, Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
const { SubMenu } = Menu;

function DrawerComponent({ showDrawer, setShowDrawer }) {
  const onClose = () => {
    setShowDrawer(false);
  };

  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <DrawerComtainer
      title="ADMIN DASHBOARD MENU"
      placement="left"
      closable={false}
      onClose={onClose}
      visible={showDrawer}
      key="left"
      width={300}
    >
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
          <Menu.Item key="1">
            <Link to="/admin/userlist" onClick={onClose} className="link">
              List Users
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="2">
            <Link to="/admin/productlist" onClick={onClose} className="link">
              List All Company
            </Link>
          </Menu.Item> */}
        </SubMenu>

        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="E-COMMERCE">
          <Menu.ItemGroup key="g1" title="Products">
            <Menu.Item key="3">
              <Link to="/admin/productlist" onClick={onClose} className="link">
                List All Items
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="4">
            <Link to="/admin/productlist" onClick={onClose} className="link">
              List All Items
            </Link>
          </Menu.Item> */}
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Orders">
            <Menu.Item key="5">
              <Link to="/admin/orderlist" onClick={onClose} className="link">
                List Orders
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="6">
            <Link to="/admin/productlist" onClick={onClose} className="link">
              List All Items
            </Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/admin/productlist" onClick={onClose} className="link">
              List All Items
            </Link>
          </Menu.Item> */}
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu
          key="sub4"
          icon={<AppstoreOutlined />}
          title="Productions Items"
        >
          <Menu.Item key="8">
            <Link to="/admin/new-production" onClick={onClose} className="link">
              Add new Production
            </Link>
          </Menu.Item>
          <Menu.Item key="9">
            <Link to="/admin/articles" onClick={onClose} className="link">
              List All articles
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" icon={<AppstoreOutlined />} title="Advertising">
          <Menu.Item key="10">
            <Link to="/admin/advertising" onClick={onClose} className="link">
              All
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub6" icon={<MailOutlined />} title="Messagerie">
          <Menu.Item key="11">
            <Link to="/admin/message" onClick={onClose} className="link">
              Show All Message
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </DrawerComtainer>
  );
}

const DrawerComtainer = styled(Drawer)`
  & .link {
    text-decoration: none;
    text-transform: capitalize;
    letter-spacing: 1px;
  }

  & .ant-drawer-title {
    color: var(--orange-color);
    letter-spacing: 1px;
    font-weight: 700;
  }
  
  & .ant-menu-title-content {
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export default DrawerComponent;
