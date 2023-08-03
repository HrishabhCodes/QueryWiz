import { Box, Typography } from "@mui/material";

const EditorLoader = () => {
  return (
    <Box
      display="flex"
      height="140px"
      alignItems="center"
      justifyContent="center"
    >
      <Typography>Setting up the Editor, Please Wait ...</Typography>
    </Box>
  );
};

export default EditorLoader;
