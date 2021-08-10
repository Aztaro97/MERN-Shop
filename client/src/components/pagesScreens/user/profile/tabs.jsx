import React from "react";
import { Tabs } from "antd";
import styled from "styled-components";
import MainContainer from "./../../../MainContainer";
import ViewProducts from "./viewProducts";
import CompanyInfo from "./companyDetails";
// import {filterProducts} from 

const { TabPane } = Tabs;

const Tabulation = ({match}) => {
    const userId = match.params.id
  return (
    <MainContainer>
      <Tab>
        <TabsE defaultActiveKey="1" centered size="default">
          <TabPane tab="View Products" key="1">
            <ViewProducts match={match} />
          </TabPane>
          <TabPane tab="Company Information" key="2">
            <CompanyInfo match={match} />
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
