import BookIcon from "@mui/icons-material/Book";
import {
  Box,
  Dialog,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { EXAMPLE_QUERIES } from "../../utils/common";
import Toast from "../Toast";
import useToast from "../../hooks/useToast";

const CheatSheet = ({ open, handleCloseSheet }) => {
  const { isToastVisible, showToast, toastType, toastMessage } = useToast();

  const copyQuery = async (query) => {
    await navigator.clipboard.writeText(query);
    showToast("success", "Query Copied!");
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"lg"}
      open={open}
      onClose={handleCloseSheet}
      aria-labelledby="import-data-form-dialog-title"
      sx={{
        "& .MuiDialog-paper": { padding: "25px 40px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
        className="header"
      >
        <BookIcon
          sx={{ paddingTop: "2px", fontSize: "30px", marginRight: "5px" }}
        />
        <Typography variant="h5">Cheatsheet</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "20px",
          "& > .command-containers": {
            height: "400px",
            width: "33.3%",
            borderRight: "1px solid lightgrey",
            overflowX: "scroll",
          },
          "& :last-child": {
            border: "none",
          },
        }}
        className="content"
      >
        {EXAMPLE_QUERIES.map((queryObj) => (
          <Box
            sx={{
              padding: "5px 25px",
            }}
            key={queryObj.type}
            className={`command-containers ${queryObj.type}`}
          >
            <Typography color={"black"} variant="h6">
              {queryObj.name}
            </Typography>
            <List>
              {queryObj.queries.map((query, i) => (
                <ListItem
                  onClick={() => copyQuery(query)}
                  sx={{
                    backgroundColor: "#f5f5f5",
                    color: "#292929",
                    borderRadius: "5px",
                    marginTop: "15px",
                    cursor: "pointer",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  }}
                  key={`${queryObj.type}_${i + 1}`}
                >
                  <ListItemText primary={query} />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
      <Toast show={isToastVisible} type={toastType} message={toastMessage} />
    </Dialog>
  );
};

CheatSheet.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCloseSheet: PropTypes.func.isRequired,
};

export default CheatSheet;
