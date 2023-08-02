import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

const NoWorkspace = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h4">Welcome to QueryWiz</Typography>
      <Button
        variant="outlined"
        color="primaryButton"
        sx={{
          textTransform: "capitalize",
          fontWeight: 600,
          marginTop: "20px",
        }}
      >
        <AddIcon fontSize="13px" sx={{ marginRight: "5px" }} />
        Create New Workspace
      </Button>
    </Box>
  );
};

export default NoWorkspace;
