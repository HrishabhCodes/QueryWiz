import AddIcon from "@mui/icons-material/Add";
import CustomTab from "./CustomTab";
import { useState, useCallback } from "react";

import PropTypes from "prop-types";
import { Box, Button, Grid, Tabs } from "@mui/material";

const styles = {
  tabsContainer: {
    flex: 1,
    flexWrap: "nowrap",
    overflow: "hidden",
  },
  addNewTabButton: {
    minWidth: "fit-content",
  },
};

// styles for tabs Wrapper
const wrapperStyles = {
  "& .MuiTabs-root": {
    flex: 1,
    marginRight: "8px",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTabs-scrollButtons": {
    display: "none",
  },
};

// Component to create list of Editable tabs i.e allowing to add/delete tabs
const EditableTabs = ({
  tabsList = [],
  onTabChange,
  onTabDelete,
  onTabAdd,
}) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, value) => {
    onTabChange({ prev: tabsList[tabValue], next: tabsList[value] });
    setTabValue(value);
  };

  const addTab = () => {
    onTabAdd().then(() => {
      setTabValue(tabsList.length);
    });
  };

  const deleteTab = useCallback(
    (e, tabId) => {
      e.stopPropagation();
      if (tabsList.length === 1) {
        return;
      }

      onTabDelete(tabId);
      setTabValue((value) => value - 1);
    },
    [tabsList, onTabDelete]
  );

  return (
    <Grid
      sx={styles.tabsContainer}
      container
      alignItems="center"
      justify="center"
    >
      <Box flex="1" overflow="auto">
        <Tabs
          sx={wrapperStyles}
          onChange={handleTabChange}
          aria-label="editor-tabs"
          value={tabValue}
          variant="scrollable"
          textColor="secondary"
          indicatorColor="secondary"
        >
          {tabsList.map((tab) => (
            <CustomTab tab={tab} key={tab.id} onDelete={deleteTab} />
          ))}
        </Tabs>
      </Box>
      <Grid sx={styles.addNewTabButton}>
        <Button
          color="secondary"
          startIcon={<AddIcon fontSize="small" />}
          onClick={addTab}
          sx={{
            fontFamily: "Mukta",
          }}
        >
          Create a new tab
        </Button>
      </Grid>
    </Grid>
  );
};

export default EditableTabs;

EditableTabs.propTypes = {
  tabsList: PropTypes.array,
  onTabAdd: PropTypes.func.isRequired,
  onTabChange: PropTypes.func.isRequired,
  onTabDelete: PropTypes.func.isRequired,
};
