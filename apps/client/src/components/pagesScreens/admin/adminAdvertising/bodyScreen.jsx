import React, { useEffect } from "react";
import { RiMessage2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getMessageById } from "../../../../flux/actions/advertisingAction/advertisingAction";
import Loader from "../../../loader";

const BodyScreen = () => {
  const { loading, error, message } = useSelector((state) => state.userMessage);

  return (
    <Container>
      {message == null ? (
        <IconStyling>
          <RiMessage2Line className="icon"/>
        </IconStyling>
      ) : (
        <>
          <div className="top_section">
            <div>
              <p>
                first name: <span>{message.firstName}</span>
              </p>
              <p>
                last name: <span>{message.lastName}</span>
              </p>
              <p>
                email: <span>{message.email}</span>
              </p>
              <p>
                telephone: <span>{message.phoneNumber}</span>
              </p>
              <p>
                city: <span> {message.city}</span>
              </p>
              <p>
                region: <span>{message.region}</span>
              </p>
              <p>
                country: <span>{message.country}</span>
              </p>
            </div>
            <div>
              <p>
                Company name: <span>{message.companyName}</span>{" "}
              </p>
              <p>
                company telephone : <span> {message.companyTelephone}</span>{" "}
              </p>
            </div>
          </div>
          <p>
            Body Message : <span>{message.message}</span>
          </p>

          <h6 className="time">Date : <span>{message.createdAt.toString()}</span></h6>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  background: #dddd;

  & p {
    text-transform: capitalize;
    font-weight: 700;
  }
  & p span {
    font-weight: 400;
    text-transform: initial;
  }

  & .top_section {
    display: grid;
    grid-template-columns: 1fr 1fr;

    & .time {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;

const IconStyling = styled.div` 
  height:100% !important;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  & .icon {
    font-size: 10rem;
  }
`

export default BodyScreen;
