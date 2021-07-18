import React, { useState } from "react";
import styled from "styled-components";

import InputRadio from "../../InputRadioComponent";

function RegisterPage() {
  const [typeUser, setTypeUser] = useState(null);

  const handleClickRadio = (e) => {
      setTypeUser(e.target.value);
        console.log(typeUser);
    
  };
  return (
    <FormContainer>
      <Header>
        <a href="#/">Back</a>
        <div className="radio-button">
          <div>
            <InputRadio
              value="company"
              name="typeCpny"
              id="company"
              checked
              onChange={handleClickRadio}
            //   onClick={handleClickRadio}
            />
            <label htmlFor="company">Comapny</label>
          </div>

          <div>
            <InputRadio
              value="crafman"
              name="typeCpny"
              id="crafman"
              onChange={handleClickRadio}
            //   onClick={handleClickRadio}
            />
            <label htmlFor="crafman">Craftman</label>
          </div>
        </div>
      </Header>
    </FormContainer>
  );
}

const Header = styled.div`
  height: 5rem;
  width: 100%;

  & a {
    text-decoration: none;
    color: #000;
    font-weight: 700;
    position: relative;
    top: 2rem;
  }

  & .radio-button {
    text-align: center;
    color: #aaaaac;
    display: flex;
    justify-content: center;

    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 1rem;

      & input {
        font-size: 2rem;
      }
    }
  }
`;

const FormContainer = styled.form`
  padding: 2rem;
`;

export default RegisterPage;
