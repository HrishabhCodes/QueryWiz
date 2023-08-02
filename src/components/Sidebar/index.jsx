import EmptyList from "./EmptyList";
import TableItem from "./TableItem";
import Proptypes from "prop-types";
import { Box, Drawer, List, Typography } from "@mui/material";

// SideBar Styles
const styles = {
  drawerPaper: {
    whiteSpace: "nowrap",
    position: "relative",
    height: "100%",
    transition: "width 250ms cubic-bezier(0.4, 0, 0.2, 1)",
    width: "240px",
    backgroundColor: "background.dark",
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: "width 250ms cubic-bezier(0.4, 0, 0.2, 1)",
    width: 0,
    backgroundColor: "background.dark",
  },
  primaryColor: {
    color: "text.primaryDark",
  },
};

// SideBar Component
const SideBar = ({ showDrawer = true, items = [] }) => {
  return (
    <Drawer
      variant="permanent"
      sx={
        showDrawer
          ? {
              ...styles.drawerPaper,
              "& .MuiDrawer-paper": { ...styles.drawerPaper },
            }
          : {
              ...styles.drawerPaperClose,
              "& .MuiDrawer-paper": { ...styles.drawerPaperClose },
            }
      }
      open={showDrawer}
    >
      <Box p={2}>
        <Typography sx={styles.primaryColor} variant="h6">
          Tables Schema
        </Typography>
      </Box>
      {items.length === 0 ? (
        <EmptyList
          title={"No table exists"}
          titleVariant="h6"
          subtitle={"Please import data to the Editor"}
        />
      ) : (
        <List>
          {items.map((item, index) => (
            <TableItem
              key={`${item.table}-${index}-table-metadata`}
              listItem={item}
            />
          ))}
        </List>
      )}
    </Drawer>
  );
};

SideBar.propTypes = {
  items: Proptypes.array,
  showDrawer: Proptypes.bool.isRequired,
};

export default SideBar;
