import React, { useState } from "react";
import PageTwo from "./PageTwo/PageTwo";
import PageThree from "./PageThree/PageThree";

const WorkspaceSetup = () => {
  const [workspaceData, setWorkspaceData] = useState({
    workspaceName: "",
    companyName: "",
    department: "",
    state: "",
    usage: [],
  });

  const handlePageTwoSubmit = (data) => {
    setWorkspaceData((prevData) => ({
      ...prevData,
      workspaceName: data.workspaceName,
      companyName: data.companyName,
      department: data.department,
      state: data.state,
    }));
  };

  const handlePageThreeSubmit = (usage) => {
    setWorkspaceData((prevData) => ({
      ...prevData,
      usage,
    }));
  };

  return (
    <div>
      <PageTwo onSubmit={handlePageTwoSubmit} />
      <PageThree onSubmit={handlePageThreeSubmit} />
      {/* You can render the current workspaceData state for testing */}
      <pre>{JSON.stringify(workspaceData, null, 2)}</pre>
    </div>
  );
};

export default WorkspaceSetup;
