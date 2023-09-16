import React from "react";
import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./PageOne.css";
const url = process.env.REACT_APP_API

const PageOne = () => {
  const navigate = useNavigate();
  const [empid, setEmpid] = useState("");
  const [password, setPassword] = useState("");
  const empIdHandler = (e) => {
    setEmpid(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { empid, password };
    const userLogin = async () => {
      try {
        const userLog = await axios.post(
          `${url}/api/login`,
          data
        );
        alert("login successful");
        localStorage.setItem("userId", userLog.data.empid);
        localStorage.setItem(
          "authToken",
          JSON.stringify(userLog.data.authToken)
        );
        navigate("/pagetwo");
      } catch (err) {
        console.log(err);
      }
    };
    userLogin();
    // navigate("/pageTwo")
  };
  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "40%", maxHeight: "30%", margin: "auto" }}
    >
      <form className="measure" onSubmit={handleSubmit} method="post">
        <h2>Welcome! To Nuk9, First things first...</h2>
        <p style={{ color: "#C0C0C0" }}>Your Wish We Deliver.</p>
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <div className="mt3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="full-name"
              style={{ textAlign: "left" }}
            >
             Employee ID
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="empid"
              value={empid}
              id="full-name"
              size="30"
              required
              placeholder="Please Enter Your Employee ID"
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
              onChange={empIdHandler}
            />
          </div>
          <div className="mv3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="display-name"
              style={{ textAlign: "left" }}
            >
            Password
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="password"
              name="password"
              value={password}
              required
              id="display-name"
              placeholder="Enter Your Password"
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
              onChange={passwordHandler}
            />
          </div>
       
        </fieldset>
        <div>
          <button
            className="f6 grow br2 ph3 pv2 mb2 dib white"
            style={{
              borderStyle: "none",
              width: "100%",
              backgroundColor: "#664DE5",
            }}
            type="submit"
            value="Login">
              Login
            </button>
        </div>
      </form>
    </main>
  );
};

export default PageOne;
