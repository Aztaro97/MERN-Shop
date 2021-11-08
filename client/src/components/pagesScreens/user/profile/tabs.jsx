import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import MainContainer from "./../../../MainContainer";
import ViewProducts from "./viewProducts";
import CompanyInfo from "./companyDetails";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../../flux/actions/userAction";
import PageNotFund from "../../pageNotFund";
import LoaderComponent from "../../../loader";
import ErrorServerPage from "../../ErrorServerPage";
// import {filterProducts} from

const { TabPane } = Tabs;

const Tabulation = () => {
  const { loading, user, error } = useSelector((state) => state.userDetails);

  const params = useParams();

  const userId = params.id;

  const dispatch = useDispatch();

  useEffect(() => {
    if (user === null || user?._id !== userId) {
      dispatch(getUserDetails(userId));
    }
  }, [dispatch, userId, user]);
  return (
    <MainContainer>
      <Tab>
        <TabsE defaultActiveKey="1" centered size="default">
          <TabPane tab="View Products" key="1">
            <ViewProducts />
          </TabPane>
          <TabPane tab="Company Information" key="2">
            <CompanyInfo />
          </TabPane>
        </TabsE>
      </Tab>
    </MainContainer>
  );
};

const Tab = styled.div`
  /* height: ; */
  display: flex;
  justify-content: center;
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
  &.ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: none !important;
  }
  & .ant-tabs-ink-bar {
    background-color: var(--orange-color) !important;
  }
`;

export default Tabulation;
