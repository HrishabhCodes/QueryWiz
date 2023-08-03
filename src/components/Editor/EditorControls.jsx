import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import EditableTabs from "../EditableTabs";
import MenuButton from "../MenuButton";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import PropTypes from "prop-types";
import { Box, Button, Paper, Tooltip } from "@mui/material";
import useAppContext from "../../hooks/useAppContext";
import { useNavigate } from "react-router-dom";

const styles = {
  "& .MuiPaper-root": {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgb(254,252,254)",
  },
  editorButton: {
    marginRight: "8px",
    minWidth: "fit-content",
  },
  editorButtonsWrapper: {
    marginRight: "8px",
    marginLeft: "8px",
  },
};

const EditorControls = ({ onRunQuery }) => {
  const navigate = useNavigate();
  const {
    setWorkspaces,
    tabs,
    currentWorkspace,
    setCurrentWorkspace,
    setTabs,
  } = useAppContext();

  const onSaveWorkspace = () => {
    setWorkspaces((prevWorkspaces) => {
      return prevWorkspaces.map((workspace) => {
        if (workspace.id === currentWorkspace) {
          return { ...workspace, tabs: tabs };
        }
        return workspace;
      });
    });
    setTabs([]);
    setCurrentWorkspace("");
    navigate("/");
  };

  return (
    <Paper square sx={styles["& .MuiPaper-root"]}>
      <EditableTabs />
      <Box sx={styles.editorButtonsWrapper} display="flex">
        <Tooltip title="Run">
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            sx={styles.editorButton}
            onClick={onRunQuery}
          >
            <PlayArrowRoundedIcon />
          </Button>
        </Tooltip>
        <MenuButton
          title="Export"
          menuItems={["CSV File", "XML File", "JSON File"]}
        />
        <Tooltip title="Save">
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            sx={styles.editorButton}
            onClick={onSaveWorkspace}
          >
            <SaveRoundedIcon />
          </Button>
        </Tooltip>
        <MenuButton
          title="Import"
          menuItems={["CSV File", "XML File", "JSON File"]}
        />
      </Box>
    </Paper>
  );
};

EditorControls.propTypes = {
  onRunQuery: PropTypes.func.isRequired,
};

export default EditorControls;
