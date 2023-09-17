import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    workspaceName: "",
    companyName: "",
    department: "",
    state: "",
  });

  const updateData = (newData) => {
    setData({ ...data, ...newData });
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};
