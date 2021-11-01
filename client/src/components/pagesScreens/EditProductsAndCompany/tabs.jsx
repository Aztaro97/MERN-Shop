import React, { useEffect } from "react";
import { Tabs } from "antd";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import MainContainer from "./../../MainContainer";
import ViewProducts from "./viewProducts";
import CompanyInfo from "./companyDetails";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import { getCompanyDetails } from "../../../flux/actions/userAction";

const { TabPane } = Tabs;

function Tabulation() {
  const { t } = useTranslation();

  // const {products} = useSelector((state => state.products))

  const {
    loading,
    user: { company },
  } = useSelector((state) => state.userDetails);
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!company) {
      dispatch(getCompanyDetails());
    }
  }, [dispatch, company]);

  if (!userInfo) {
    return <Redirect to="/auth" />;
  }

  return (
    <MainContainer>
      <Tab>
        <TabsE defaultActiveKey="1" centered size="default">
          <TabPane tab={t("view_products")} key="1">
            <ViewProducts />
          </TabPane>
          <TabPane tab={t("company_info")} key="2">
            <CompanyInfo company={company} />
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
  margin-bottom: 20px;
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
