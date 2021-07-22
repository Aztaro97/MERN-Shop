import React from "react";
import { Tabs } from "antd";
import styled from "styled-components";
import MainContainer from "./../../MainContainer";
import CraftMenList from "./craftMenList";
import CompanyList from "./companyList";
import LandingPage from "../landing/LandingPage";

const { TabPane } = Tabs;

function Tabulation() {
  return (
    <>
      <LandingPage />
      <Tab>
        <MainContainer>
          <TabsE defaultActiveKey="1" centered size="default">
            <TabPane tab="View Products" key="1">
              <CompanyList />
            </TabPane>
            <TabPane tab="Company Information" key="2">
              <CraftMenList />
            </TabPane>
          </TabsE>
        </MainContainer>
      </Tab>
    </>
  );
}

const Tab = styled.div`
  /* height: ; */
  display: flex;
  justify-content: center;
  padding: 4rem 0;
`;

const TabsE = styled(Tabs)`
  color: var(--silver-color);
  font-weight: 700;

  & .ant-tabs-tab:hover {
    color: var(--orange-color) !important;
  }

  & .ant-tabs-tab.ant-tabs-tab-active {
    border-bottom: 4px solid var(--orange-color) !important;
    z-index: 2;
  }
  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: var(--orange-color) !important;
  }
`;

export default Tabulation;
