import { useFormik } from 'formik';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { GiPadlock } from 'react-icons/gi';
import { MdMail } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import styled from "styled-components"
import { register } from '../../../flux/actions/userAction';
import ButtonComponeent from '../../ButtonComponeent';

const UserForm = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
  
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        const body = JSON.stringify(values, null, 2);
        console.log(body);
        dispatch(register(body));
      },
    });
    return (
      <Form onSubmit={formik.handleSubmit}>
        <h1>{t("registration_info")}</h1>
        <div className="card">
          <div className="row">
            <div className="input-container">
              <MdMail className="icon" />
              <input
                required
                className="input-field"
                type="email"
                placeholder={t("email_placeholder")}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
          </div>
  
          <div className="row">
            <div className="input-container">
              <GiPadlock className="icon" />
              <input
                required
                className="input-field"
                type="password"
                placeholder={t("password_placeholder")}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-container">
              <GiPadlock className="icon" />
              <input
                required
                className="input-field"
                type="password"
                placeholder={t("retype_placeholder")}
                name="password2"
              />
            </div>
          </div>
          <ButtonComponeent type="submit" style={{ marginLeft: "auto", marginBottom: 20 }}>
            {t("save")}
          </ButtonComponeent>
        </div>
      </Form>
    );
  };


  const Form = styled.form`
  
  margin-bottom: 2rem;
  & h1 {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
  }
  & .card {
    border: 0.4px solid var(--border-color);
    padding: 2rem;
    border-radius: 15px;

    & .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 3rem;
      
      @media only screen and (max-width: 900px) {
        grid-template-columns: 1fr;
      }
    }

    & .row {
      padding: 0.5rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .time_container {
        display: grid;
        grid-template-columns: 3fr 3fr 1fr;
        grid-gap: 0.8rem;
      }
      & .social-media {
        display: flex;
        width: 200px;
        justify-content: space-between;
        color: #fff;
        & .facebook {
          border-radius: 50%;
          padding: 7px;
          font-size: 2.4rem;
          background: #3b5998;
          /* margin-right: 0.7rem; */
        }
        & .insta {
          border-radius: 50%;
          padding: 7px;
          font-size: 2.4rem;
          background: #6a453b;
          /* margin-right: 0.7rem; */
        }
        & .twitter {
          border-radius: 50%;
          padding: 7px;
          font-size: 2.4rem;
          background: #55acee;
          /* margin-right: 0.7rem; */
        }
        & .whatsapp {
          border-radius: 50%;
          padding: 7px;
          font-size: 2.4rem;
          background: #4bae50;
        }
      }

      & .input-container {
        /* display: flexIE10 */
        display: flex;
        width: 100%;
        margin-bottom: 15px;
        border-radius: 20px;
        height: 2.5rem;

        & .icon {
          padding: 0.6rem;
          font-size: 2px;
          background: var(--orange-color);
          color: white;
          min-width: 3.12rem;
          text-align: center;
          height: 100%;
          border-radius: 0;
        }
        & .input-field {
          width: 100%;
          padding: 0 10px;
          outline: none;
          border: 2px solid var(--orange-color);
          /* border-radius: 0 5px 5px 0; */
          font-size: 0.7rem;
          height: 2.5rem;
          /* margin-right: ; */
        }
        & .input-field:focus {
          /* box-shadow: 0 0 0 2px var(--orange-color); */
        }
      }
    }
  }
`;

export default UserForm
