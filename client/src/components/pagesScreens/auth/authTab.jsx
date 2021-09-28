import React, { useEffect } from "react";
import { Tabs } from "antd";
import styled from "styled-components";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MainContainer from "./../../MainContainer";
import LoginComponent from "./loginTab";
import RegisterComponent from "./RegisterTab";
import { useTranslation } from "react-i18next";

const { TabPane } = Tabs;

function AuthTabPage({ location }) {
  const { t } = useTranslation();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const history = useHistory();
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [redirect]);

  if (userInfo) {
    window.history.back();
  }

  return (
    <MainContainer>
      <AuthTab>
        <TabsE defaultActiveKey="1" centered size="default">
          <TabPaneE tab={t("login")} key="1">
            <LoginComponent />
          </TabPaneE>
          <TabPaneE tab={t("registration")} key="2">
            <RegisterComponent />
          </TabPaneE>
        </TabsE>
      </AuthTab>
    </MainContainer>
  );
}

const AuthTab = styled.div`
  /* height: ; */
  /* display: flex;
  justify-content: center;
  padding: 4rem 0; */
`;

const TabsE = styled(Tabs)`
  color: var(--silver-color);
  font-weight: 700;
  & .ant-tabs-tab {
    margin: 0 10px;
  }

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

const TabPaneE = styled(TabPane)`
  color: var(--silver-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default AuthTabPage;
