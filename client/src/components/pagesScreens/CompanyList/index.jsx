import React from "react";
import { Tabs } from "antd";
import styled from "styled-components";
import { BsBuilding, FaUserTie } from "react-icons/all";
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
        <MainContainer style={{ marginTop: 0 }}>
          <TabsE
            defaultActiveKey="1"
            centered
            size="default"
            style={{ height: 220 }}
          >
            <TabPane
              tab={
                <span>
                  <BsBuilding size={40} style={{ marginRight: ".6rem" }} />
                  companies
                </span>
              }
              key="1"
            >
              <CompanyList />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <FaUserTie size={40} style={{ marginRight: ".6rem" }} />
                  craftman
                </span>
              }
              key="2"
            >
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

  & .ant-tabs-tab .ant-tabs-tab-btn {
    border: 1px solid var(--silver-color) !important;
    padding: 0.5rem 1rem;
    color: var(--silver-color);
    text-transform: uppercase;
  }

  & .ant-tabs-tab:hover {
    color: var(--orange-color) !important;
  }

  & .ant-tabs-tab.ant-tabs-tab-active {
    border-bottom: 4px solid var(--orange-color) !important;
    z-index: 2;
  }
  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    background: var(--orange-color) !important;
    color: #fff;
  }
`;

export default Tabulation;
