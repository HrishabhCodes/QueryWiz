import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import EditableTabs from "../EditableTabs";
import MenuButton from "../MenuButton";
import {
  EDITOR_TAB_ADD,
  EDITOR_TAB_CHANGE,
  EDITOR_TAB_DELETE,
} from "../../utils/common";
import PropTypes from "prop-types";
import { Box, Button, Paper } from "@mui/material";

// Editor Controls Styles
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

const EditorControls = ({ editorTabs = [], updateEditorTabs, onRunQuery }) => {
  return (
    <Paper square sx={styles["& .MuiPaper-root"]}>
      <EditableTabs
        tabsList={editorTabs}
        onTabAdd={() => updateEditorTabs({ type: EDITOR_TAB_ADD })}
        onTabDelete={(tabId) =>
          updateEditorTabs({ type: EDITOR_TAB_DELETE, data: { id: tabId } })
        }
        onTabChange={(data) => {
          updateEditorTabs({ type: EDITOR_TAB_CHANGE, data });
        }}
      />
      <Box sx={styles.editorButtonsWrapper} display="flex">
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          startIcon={<PlayArrowRoundedIcon />}
          sx={styles.editorButton}
          onClick={onRunQuery}
        >
          Run Query
        </Button>
        <MenuButton
          title="EXPORT"
          menuItems={["CSV File", "XML File", "JSON File"]}
        />
      </Box>
    </Paper>
  );
};

EditorControls.propTypes = {
  editorTabs: PropTypes.array,
  updateEditorTabs: PropTypes.func.isRequired,
  onRunQuery: PropTypes.func.isRequired,
};

export default EditorControls;
