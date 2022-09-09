import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {useAuth} from '../../Autoraization/auth'
import { Button, Divider } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const initialValues = { email: "", password: "" };
  const [formInput, setFormInput] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // var Myone = JSON.stringify(localStorage.getItem("formValues"));
  // const obj = JSON.parse(Object);
  // const data = JSON.parse(obj);

const auth =useAuth()


  const location=useLocation();
var data=location.state.formValues;
console.log("Object: ", data);





console.log("formvalues", formInput);
console.log( "eroordsld",formErrors);
console.log("errors",formErrors.email)




  const handleCheck = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
    setEmail(formInput.email);
    setPassword(formInput.password);



  };



  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formInput));
    setIsSubmit(true);


    localStorage.setItem("formValues", JSON.stringify(formInput));

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormErrors("");
const redirectPath = location.state?.path || '/home'   

    auth.login(JSON.stringify(data))
     navigate(redirectPath,{replace:true});
    }
  };

  const validate = (values) => {
    const errors = {};

    var e1=email === data. email;
    var p1=formInput.password === data.password;

    console.log("datastring",e1,p1)
   
  if (!values.email) {
      errors.email = "Email is required!";
    } 
    else if (e1===false) {
      errors.email = "Enter correct Email!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } 
    else if (p1===false) {
      errors.password = "Enter correct password!";
    }

    

    return errors;
  };

  

  useEffect(() => {
    console.log(formErrors);
    
  


    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormErrors("");
    }
  }, []);



  return (
    <Box>
      <div className="box-item">
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
            <h1>LOGIN</h1>
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
              </p>
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
              onClick={handleSubmit}
              size="small"
              style={{
                backgroundColor: "#e84393",
                width: 300,
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              LOGIN
            </Button>
          </div>

          <div
            style={{
              fontWeight: 300,
              fontSize: 8,
              fontFamily: "Questrial",
              textAlign: "center",
              cursor: "pointer",
              color: "#2d3436",
              marginTop: 3,
              paddingLeft: 42,
            }}
          >
            <h2> Forgot Password?</h2>
          </div>

          <Divider
            style={{ marginTop: 18, alignItems: "center", width: 300 }}
          />
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
              paddingLeft: 75,
            }}
          >
            <h3>Need an account?</h3>
            <span
              style={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={()=>navigate('/')}
            >
              SIGNUP
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
