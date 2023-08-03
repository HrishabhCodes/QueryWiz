import { Button, Dialog, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import useAppContext from "../../hooks/useAppContext";
import { useState } from "react";
import { DEFAULT_TAB } from "../../utils/common";

const WorkspaceFormDialog = ({ handleCloseForm, open }) => {
  const { setWorkspaces } = useAppContext();
  const [name, setName] = useState("");

  const submitHandler = () => {
    const newWorkspace = {
      id: uuid(),
      name: name,
      tabs: [DEFAULT_TAB],
    };
    setWorkspaces((prev) => [...prev, newWorkspace]);
    handleCloseForm();
    setName("");
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"sm"}
      open={open}
      onClose={() => {
        handleCloseForm();
        setName("");
      }}
      aria-labelledby="import-data-form-dialog-title"
      sx={{
        "& .MuiDialog-paper": { padding: "25px 40px" },
      }}
    >
      <Typography sx={{ fontWeight: 600 }} variant="h6">
        New Workspace
      </Typography>
      <TextField
        inputProps={{ maxLength: 25 }}
        onChange={(e) => setName(e.target.value)}
        value={name}
        sx={{ marginTop: "20px", "& .MuiInputBase-input": { color: "black" } }}
        label="Name"
        color="secondary"
        variant="outlined"
        required
      />
      <Button
        color="primaryButton"
        sx={{ color: "white", marginTop: "20px" }}
        onClick={submitHandler}
        variant="contained"
      >
        Submit
      </Button>
    </Dialog>
  );
};

WorkspaceFormDialog.propTypes = {
  handleCloseForm: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default WorkspaceFormDialog;
