import React from "react";
import MainContainer from "../../MainContainer";
import styled from "styled-components";

function privatePolicy() {
  return (
    <MainContainer>
      <Container>
        <h1 className="title">privacy policy</h1>
        <hr />
        <ul className="list-content">
          <li>
            <p className="para">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Cras ultricies ligula sed magna dictum porta. Curabitur
              aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia
              eget consectetur sed, convallis at tellus.
            </p>
          </li>
          <li>
            <p className="para">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Cras ultricies ligula sed magna dictum porta. Curabitur
              aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia
              eget consectetur sed, convallis at tellus.
            </p>
          </li>
          <li>
            <p className="para">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Cras ultricies ligula sed magna dictum porta. Curabitur
              aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia
              eget consectetur sed, convallis at tellus.
            </p>
          </li>
          <li>
            <p className="para">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Cras ultricies ligula sed magna dictum porta. Curabitur
              aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia
              eget consectetur sed, convallis at tellus.
            </p>
          </li>
          <li>
            <p className="para">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Cras ultricies ligula sed magna dictum porta. Curabitur
              aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia
              eget consectetur sed, convallis at tellus.
            </p>
          </li>
          <li>
            <p className="para">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Cras ultricies ligula sed magna dictum porta. Curabitur
              aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia
              eget consectetur sed, convallis at tellus.
            </p>
          </li>
          <li>
            <p className="para">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Cras ultricies ligula sed magna dictum porta. Curabitur
              aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia
              eget consectetur sed, convallis at tellus.
            </p>
          </li>
          <li>
            <p className="para">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Cras ultricies ligula sed magna dictum porta. Curabitur
              aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia
              eget consectetur sed, convallis at tellus.
            </p>
          </li>
          <li>
            <p className="para">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Cras ultricies ligula sed magna dictum porta. Curabitur
              aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia
              eget consectetur sed, convallis at tellus.
            </p>
          </li>
          <li>
            <p className="para">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Cras ultricies ligula sed magna dictum porta. Curabitur
              aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia
              eget consectetur sed, convallis at tellus.
            </p>
          </li>
          <li>
            <p className="para">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Cras ultricies ligula sed magna dictum porta. Curabitur
              aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia
              eget consectetur sed, convallis at tellus.
            </p>
          </li>
          <li>
            <p className="para">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Cras ultricies ligula sed magna dictum porta. Curabitur
              aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia
              eget consectetur sed, convallis at tellus.
            </p>
          </li>
        </ul>
      </Container>
    </MainContainer>
  );
}

const Container = styled.div`
  padding: 4rem 2rem;
  & .title {
    text-align: center;
    color: var(--white-color);
    text-transform: uppercase;
  }
  & hr {
    height: 2px;
    width: 200px;
    background: var(--white-color);
    margin: auto;
  }

  & .list-content {
    /* list-style: ; */
    list-style-type: decimal;
    padding: 2rem 0;
    & li {
      & .para {
        color: var(--silver-color);
        letter-spacing: 1px;
      }
    }
  }
`;

export default privatePolicy;
