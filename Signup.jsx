import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button, Divider } from "@mui/material";

export default function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();
  var dispatch = useDispatch();
  const handleCheck = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setEmail(formValues.email);
    setPassword(formValues.password);
    console.log("formvalues", formValues);
  };

  const handleform = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    var formdata=JSON.stringify(formValues);
    console.log(JSON.parse(formdata))
    localStorage.setItem('formValues',formdata );

    dispatch({ type: "ADD_SIGNUP", payload: [formdata] });



    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormErrors("");
      navigate("/login",{state:{formValues}});
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    // const pass="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    }

    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      setFormErrors("");
    }
  }, [formErrors]);

  return (
    <Box>
      <div className="box-item" >
        <div className="item-list">
          <div
            className="title"
            style={{
              fontWeight: 300,
              fontSize: 12,
              fontFamily: "nunito",
              color: "#636e72",
            }}
          >
            <h1>SIGN UP</h1>
          </div>

          <div className="col-1">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: 300,
                justifyContent: "space-between",
              }}
            >
              <h3
                style={{
                  fontWeight: 500,
                  fontSize: 12,
                  fontFamily: "nunito",
                  color: "#636e72",
                }}
              >
                Email
              </h3>

              <p
                style={{
                  fontSize: 12,
                  color: `#e74c3c`,
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                {formErrors.email}
              </p>
            </div>

            <Input
              type="text"
              // placeholder="Search"
              onChange={(e) => handleCheck(e)}
              id="email"
              name="email"
            />
          </div>

          <div className="col-2">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: 300,
                justifyContent: "space-between",
              }}
            >
              {" "}
              <h3
                style={{
                  fontWeight: 500,
                  fontSize: 12,
                  fontFamily: "nunito",
                  color: "#636e72",
                }}
              >
                Password
              </h3>
              <p
                style={{
                  fontSize: 12,
                  color: `#e74c3c`,
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                {formErrors.password}
              </p>{" "}
            </div>

            <Input
              type="text"
              // placeholder="Search"
              onChange={(e) => handleCheck(e)}
              id="password"
              name="password"
            />
          </div>

          <div
            className="btn"
            style={{
              marginTop: 35,
            }}
          >
            <Button
              variant="contained"
              onClick={handleform}
              size="small"
              style={{
                backgroundColor: "#e84393",
                width: 300,
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              SIGN UP
            </Button>
          </div>

          <Divider style={{ marginTop: 18, width: 300 }} />
          <div className="social-media">
            <span>
              <img
                src="https://img.icons8.com/ios/500/facebook-new.png"
                width={30}
              />{" "}
            </span>
            <span>
              {" "}
              <img
                src="https://img.icons8.com/ios/452/instagram-new--v1.png"
                width={30}
              />{" "}
            </span>
            <span>
              {" "}
              <img
                src="https://img.icons8.com/ios/344/google-logo.png"
                width={30}
              />{" "}
            </span>
          </div>

          <div
            className="last-text"
            style={{
              fontWeight: 300,
              fontSize: 12,
              fontFamily: "Questrial",
              color: "#636e72",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              paddingLeft: 85,
            }}
          >
            <h3>Already a user?</h3>
            <span
              style={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => navigate("/login",{state:{formValues}})}
            >
              LOGIN
            </span>
          </div>
        </div>
      </div>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100vh;

 
  


  .box-item {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 3rem;
    margin-left: 28rem;
    margin-top: 1.5rem;
    border-radius: 12px;
    width: 23%;
    height: 63vh;
    display: flex;
    flex-direction: column;
    padding-left: 12px;
    justify-content: space-around;
    

    .item-list {
      padding: 1rem;
      .social-media {
        width: 120px;
        display: flex;
        alidn-items: center;
        justify-content: space-between;
        padding: 1.8rem;
        margin-left: 4rem;
      }
    }
  }
`;

const Input = styled.input`
  padding: 10px;
  width: 105%;
  border: none;
  color: #000;
  cursor: pointer;
  border: 1px solid #b2bec3;
  font-size: 0.9rem;
  border-radius: 10px;
  font-weight: 500;

  ::placeholder {
    color: #535c68;
  }
`;
