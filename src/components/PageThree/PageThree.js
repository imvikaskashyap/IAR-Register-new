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
	const workspaceName = data.workspaceName;
	const state = data.state;
	const companyName = data.companyName;
	const department = data.department;

	const onClickSingleUser = () => {
		setSingleUser((prevSingleUser) => !prevSingleUser);
	};

	const onClickMultiUser = () => {
		setMultiUser((prevMultiUser) => !prevMultiUser);
	};

	const handleOptionChange = (selectedOption) => {
		setSelectedOption(selectedOption);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		const selectedValues = selectedOption
			? selectedOption.map((option) => option.value)
			: [];

		// Specify the column (E in this example) where you want to insert the data
		const columnIndex = 4; // 0-based index for column E

		const dataToSend = [[workspaceName, state, companyName, department]];

		// Insert the selected values into the specified column
		dataToSend[0][columnIndex] = selectedValues.join(", ");

		console.log(workspaceName, state, companyName, department, selectedValues);
		await fetch(
			"https://v1.nocodeapi.com/vikaskashyap/google_sheets/LPkGforJEIqnnNyd?tabId=sheet1",
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(dataToSend),
			}
		).then((result) => {
			result.json().then((res) => {
				console.log(res);
				onButtonClick("pagefour");
			});
		});
	};

	return (
		<main
			className="pt5 black-80"
			style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
			<h2>How are you planning to use NUK 9?</h2>
			<p style={{ color: "#C0C0C0" }}>
				We'll streamline your setup experience accordingly.
			</p>

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
