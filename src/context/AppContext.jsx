import React, { useState } from "react";
import { getDummyData } from "../utils/dummyData";
import PropTypes from "prop-types";
import { DEFAULT_TAB } from "../utils/common";

const AppContext = React.createContext(null);

export const AppContextProvider = ({ children }) => {
  const [workspaces, setWorkspaces] = useState([]);
  const [tabs, setTabs] = useState([DEFAULT_TAB]);
  const [currentTab, setCurrentTab] = useState({});
  const [currentWorkspace, setCurrentWorkspace] = useState("");

  return (
    <AppContext.Provider
      value={{
        tablesData: getDummyData(),
        workspaces,
        setWorkspaces,
        tabs,
        setTabs,
        currentTab,
        setCurrentTab,
        currentWorkspace,
        setCurrentWorkspace,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default AppContext;
