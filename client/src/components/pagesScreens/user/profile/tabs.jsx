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
import { useTranslation } from "react-i18next";
// import {filterProducts} from

const { TabPane } = Tabs;

const Tabulation = () => {
  const { loading, user, error } = useSelector((state) => state.userDetails);

  const params = useParams();
  const { t } = useTranslation();

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
};

const Tab = styled.div`
  /* height: ; */
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const TabsE = styled(Tabs)`
  color: var(--silver-color);
  font-weight: 700;
  width: 100%;

  & .ant-tabs-tab {
    margin: 0 10px;
    &:hover {
      color: var(--orange-color) !important;
    }
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
