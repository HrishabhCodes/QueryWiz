import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useMemo } from "react";

const TableRowDialog = ({
  row = {},
  showDialog = false,
  handleCancelAction,
  handleSuccessAction,
}) => {
  console.log(row);

  const allColumns = useMemo(
    () => Object.keys(row).map((column) => column),
    [row]
  );

  console.log(allColumns);

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"sm"}
      open={showDialog}
      onClose={handleCancelAction}
      aria-labelledby="import-data-form-dialog-title"
      sx={{
        "& .MuiDialog-paper": { padding: "20px 40px" },
      }}
    >
      <Box className="header">
        <Typography variant="h5">Row Details</Typography>
      </Box>
      <Box sx={{ marginTop: "10px", width: "100%" }} className="content">
        {allColumns.map((col) => (
          <Box sx={{ marginTop: "20px" }} key={col}>
            <Box
              sx={{
                display: "flex",
              }}
              className="field-name"
            >
              <TextField
                color="secondary"
                id="outlined-basic"
                defaultValue={row[col]}
                label={col}
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiInputBase-input": {
                    color: "grey !important",
                  },
                }}
              />
              <IconButton sx={{ marginLeft: "10px" }} aria-label="Example">
                <EditIcon />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ marginTop: "20px" }} className="buttons">
        <Button
          onClick={handleCancelAction}
          color="secondary"
          variant="outlined"
          className="cancel"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSuccessAction}
          sx={{
            color: "white",
            marginLeft: "20px",
          }}
          color="primaryButton"
          variant="contained"
          className="save-changes"
        >
          Save Changes
        </Button>
      </Box>
    </Dialog>
  );
};

TableRowDialog.propTypes = {
  row: PropTypes.object,
  showDialog: PropTypes.bool,
  handleCancelAction: PropTypes.func,
  handleSuccessAction: PropTypes.func,
};

export default TableRowDialog;
