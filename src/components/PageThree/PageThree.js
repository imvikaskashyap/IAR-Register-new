import React, { useState } from "react";
import Select from "react-select";
import "./PageThree.css";
import { useData } from "../DataProvider";

const options = [
  { value: "myself1", label: "For Myself1" },
  { value: "team2", label: "With My Team2" },
  { value: "myself3", label: "For Myself3" },
  { value: "team4", label: "With My Team4" },
  { value: "myself5", label: "For Myself5" },
  { value: "team6", label: "With My Team6" },
  { value: "myself7", label: "For Myself7" },
  { value: "team8", label: "With My Team8" },
];


const PageThree = ({ onButtonClick, inputData }) => {
  const [singleUser, setSingleUser] = useState(false);
  const [multiUser, setMultiUser] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const { data } = useData();

  const onClickSingleUser = () => {
    setSingleUser((prevSingleUser) => !prevSingleUser);
  };

  const onClickMultiUser = () => {
    setMultiUser((prevMultiUser) => !prevMultiUser);
  };

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const handleSubmit = () => {
    console.log(data);
    onButtonClick("pagefour");
  }

  return (
    <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
      <h2>How are you planning to use NUK 9?</h2>
      <p style={{ color: "#C0C0C0" }}>We'll streamline your setup experience accordingly.</p>
    
        <Select
        className="multiSelect"
        options={options}
        value={selectedOption}
        onChange={handleOptionChange} 
        isMulti
        placeholder="Select Usage"
      />
      <input
        className="f6 grow br2 ph3 pv2 mb4 mt4 dib white submitButton"
        style={{
          borderStyle: "none",
          width: "66%",
          backgroundColor: "#664DE5",
        }}
        type="submit"
        value="Create Workspace"
        onClick={handleSubmit}
      />
    </main>
  );
};

export default PageThree;

