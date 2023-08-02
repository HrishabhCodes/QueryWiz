import React from "react";
import { getDummyData } from "../utils/dummyData";
import PropTypes from "prop-types";

const TablesContext = React.createContext(null);

export const TablesContextProvider = ({ children }) => {
  return (
    <TablesContext.Provider
      value={{
        tablesData: getDummyData(),
      }}
    >
      {children}
    </TablesContext.Provider>
  );
};

TablesContextProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default TablesContext;
