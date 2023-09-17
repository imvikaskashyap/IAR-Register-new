import React, { useState } from "react";
import "./PageTwo.css";
import { useData } from "../DataProvider";

const PageTwo = ({onButtonClick }) => {

  const [workspaceName, setWorkspaceName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [department, setDepartment] = useState("");
  const [state, setState] = useState("");
  const { data, updateData } = useData();

  const handleButtonClick = () => {
  
    updateData({ workspaceName, companyName, department, state });
    onButtonClick("pagethree");
  };
  
    return (
      <main
        className="pt5 black-80 center"
        style={{ maxWidth: "40%", maxHeight: "30%", margin: "auto" }}
      >
           <form className="measure">
        <h2>Let's set up a home for all your work</h2>
        <p style={{ color: "#C0C0C0" }}>
          You can always create another workspace later.
        </p>
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <div className="mt3">
            <label
              className="left db lh-copy f6 mb1"
              htmlFor="workspace-name"
              style={{ textAlign: 'left' }}
            >
              Workspace Name
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="workspace-name"
              id="workspace-name"
              size="30"
              required
              placeholder="Eden"
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
              onChange={(e) => setWorkspaceName(e.target.value)}
            />
          </div>
          <div className="mv3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="display-name"
              style={{ textAlign: "left" }}
            >
              Company Name
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="display-name"
              id="display-name"
              placeholder="Steve"
              required
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="mv3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="display-name"
              style={{ textAlign: "left" }}
            >
              Department
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="display-name"
              id="display-name"
              placeholder="Steve"
              required
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <div className="mv3">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="display-name"
              style={{ textAlign: "left" }}
            >
              State
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="display-name"
              id="display-name"
              placeholder="Steve"
              required
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </fieldset>
        <div className="">
          <input
            className="f6 grow br2 ph3 pv2 mb4 dib white"
            style={{ borderStyle: "none", width: "100%", backgroundColor: '#664DE5' }}
            type="button"
            value="Create Workspace"
            required
            onClick={handleButtonClick}
          />
        </div>
      </form>
      </main>
    );
}

export default PageTwo;