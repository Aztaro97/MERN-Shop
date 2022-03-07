import React from "react";
import { Tabs } from "antd";
import styled from "styled-components";
import MainContainer from "../../MainContainer";
import ViewProducts from "./viewProducts";
import CompanyInfo from "./companyDetails";
import { useTranslation } from "react-i18next";

const { TabPane } = Tabs;

function Tabulation() {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <Tab>
        <TabsE defaultActiveKey="1" centered size="default">
          <TabPane tab={t("view_products")} key="1">
            <ViewProducts />
          </TabPane>
          <TabPane tab={t("company_info")} key="2">
            <CompanyInfo />
          </TabPane>
        </TabsE>
      </Tab>
    </MainContainer>
  );
}

const Tab = styled.div`
  /* height: ; */
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 20px;
  & .ant-tabs-top {
    width: 100%;
  }
`;

const TabsE = styled(Tabs)`
  color: var(--dark-color);
  font-weight: 700;
  text-transform: uppercase;

  & .ant-tabs-tab {
    margin: 0 10px;
    &:hover {
      color: var(--orange-color) !important;
    }
  }

  /* & .ant-tabs-tab */

  & .ant-tabs-tab.ant-tabs-tab-active {
    border-bottom: 4px solid var(--orange-color) !important;
    z-index: 2;
  }
  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: var(--orange-color) !important;
  }
  &.ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: none !important;
  }
  & .ant-tabs-ink-bar {
    background-color: var(--orange-color) !important;
  }
`;

export default Tabulation;
