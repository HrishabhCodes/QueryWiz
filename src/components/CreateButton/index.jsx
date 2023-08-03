import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import WorkspaceFormDialog from "../NoWorkspace/WorkspaceFormDialog";

const CreateButton = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <Box>
      <Button
        variant="outlined"
        color="primaryButton"
        sx={{
          textTransform: "capitalize",
          fontWeight: 600,
        }}
        onClick={openForm}
      >
        <AddIcon fontSize="13px" sx={{ marginRight: "5px" }} />
        Create New Workspace
      </Button>
      <WorkspaceFormDialog open={showForm} handleCloseForm={closeForm} />
    </Box>
  );
};

export default CreateButton;
