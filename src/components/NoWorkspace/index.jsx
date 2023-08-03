import { Box, Typography } from "@mui/material";
import CreateButton from "../CreateButton";

const NoWorkspace = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ marginBottom: "20px" }} variant="h4">
        Welcome to QueryWiz
      </Typography>
      <CreateButton />
    </Box>
  );
};

export default NoWorkspace;
