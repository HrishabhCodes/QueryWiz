import AddIcon from "@mui/icons-material/Add";
import CustomTab from "./CustomTab";
import { Box, Button, Grid, Tabs } from "@mui/material";
import useAppContext from "../../hooks/useAppContext";

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

const EditableTabs = () => {
  const { tabs, setTabs, currentTab, setCurrentTab } = useAppContext();

  const deleteTab = (index) => {
    if (currentTab.value === index) {
      setCurrentTab(tabs[currentTab.value - 1]);
    }
    let tempTabs = tabs.filter((tab) => tab.value !== index);
    for (let i = 1; i < tempTabs.length; i++) {
      const tab = { ...tempTabs[i], id: `new_tab_${i}`, value: i };
      tempTabs[i] = tab;
    }
    if (currentTab.value > index) {
      setCurrentTab((prev) => ({ ...prev, value: prev.value - 1 }));
    }
    setTabs([...tempTabs]);
  };

  const addTab = () => {
    const newTab = {
      id: `new_tab_${tabs.length}`,
      name: `New Tab`,
      query: "",
      value: tabs.length,
    };
    setTabs((prev) => [...prev, newTab]);
    setCurrentTab(newTab);
  };

  const handleTabChange = (event, value) => {
    setCurrentTab(tabs[value]);
  };

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
          value={currentTab.value}
          variant="scrollable"
          textColor="secondary"
          indicatorColor="secondary"
        >
          {tabs.map((tab, i) => (
            <CustomTab
              tab={tab}
              key={tab.id}
              onDelete={() => {
                deleteTab(i);
              }}
            />
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
