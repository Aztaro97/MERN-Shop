import React from "react";
import { Tabs } from "antd";
import styled from "styled-components";
import { BsBuilding, FaUserTie } from "react-icons/all";
import MainContainer from "./../../MainContainer";
import CraftMenList from "./craftMenList";
import CompanyList from "./companyList";
import LandingPage from "../e-commerce/banner/bannerComponent";
import { useDispatch, useSelector } from "react-redux";
import ErrorServerPage from "../ErrorServerPage";

const { TabPane } = Tabs;

function Tabulation() {
  const dispatch = useDispatch();

  const { error: errorCompany } = useSelector((state) => state.companyList);
  const { error: errorCraftman } = useSelector((state) => state.craftmanList);

  return (
    <MainContainer>
      {errorCompany === "Request failed with status code 500" ||
      errorCraftman === "Request failed with status code 500" ? (
        <ErrorServerPage />
      ) : (
        <>
          <LandingPage />
          <Tab>
            <TabsE defaultActiveKey="1" centered >
              <TabPane
                tab={
                  <span>
                    <BsBuilding
                      className="tab_icons"
                      style={{ marginRight: ".6rem" }}
                    />
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
                    <FaUserTie
                      className="tab_icons"
                      style={{ marginRight: ".6rem" }}
                    />
                    personnel
                  </span>
                }
                key="2"
              >
                <CraftMenList />
              </TabPane>
            </TabsE>
          </Tab>
        </>
      )}
    </MainContainer>
  );
}

const Tab = styled.div`
  /* height: ; */
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  /* padding: 4rem 0; */
  & .ant-tabs-top {
    width: 100%;
    /* padding: 0 20px; */
  }
`;

const TabsE = styled(Tabs)`
  color: var(--silver-color);
  font-weight: 700;

  & .ant-tabs-tab .ant-tabs-tab-btn {
    border: 1px solid var(--silver-color) !important;
    padding: 0.5rem 1rem;
    color: var(--silver-color);
    text-transform: uppercase;

    & span .tab_icons {
      font-size: 2rem;
      border-right: 1px solid #fff;
      padding-right: 1rem;
      @media only screen and (max-width: 768px) {
        font-size: 1rem;
        border-right: none;
        padding-right: 0;
      }
    }
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
