import PropTypes from "prop-types";
import { Box, Toolbar } from "@mui/material";

const styles = {
  mainContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  page: {
    height: "100%",
    width: "100%",
    display: "flex",
    overflow: "hidden",
  },
  contentArea: {
    flex: 1,
    overflowX: "auto",
  },
};

const HomePage = ({ navbar, sidebar, children }) => {
  return (
    <Box height="100vh" width="100vw">
      {navbar}
      <Box component="main" sx={styles.mainContainer}>
        <Toolbar />
        <Box sx={styles.page}>
          {sidebar}
          <Box sx={styles.contentArea}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

HomePage.propTypes = {
  navbar: PropTypes.element.isRequired,
  sidebar: PropTypes.element.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default HomePage;
