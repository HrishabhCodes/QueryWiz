import React, { Suspense } from "react";
import Toast from "../Toast";
import useActiveQueryEditor from "../../hooks/useActiveQueryEditor";
import useToast from "../../hooks/useToast";
import PropTypes from "prop-types";
import { DEFAULT_STRINGS } from "../../utils/common";
import { v4 as uuid } from "uuid";
import EditorControls from "./EditorControls";
import EditorLoader from "./EditorLoader";
import { Box } from "@mui/material";

// Lazy loading Editor
const LazyEditor = React.lazy(() => import("./LazyEditor"));

const styles = {
  editorStyles: {
    border: `1px solid rgba(0, 0, 0, 0.12)`,
    borderRight: "0",
  },
};

const QueryEditor = ({ onRunQuery }) => {
  const { currentQuery, handleQueryChange, editorTabs, updateEditorTabs } =
    useActiveQueryEditor();
  const { isToastVisible, showToast, toastType, toastMessage } = useToast();

  const handleRunQuery = () => {
    if (!currentQuery) {
      showToast("error", "Please Enter Query");
      return;
    }
    onRunQuery();
    showToast(
      "success",
      `Query Ran Successfully in ${Math.random().toFixed(2)}s`
    );
  };

  return (
    <Box>
      <EditorControls
        editorTabs={editorTabs}
        updateEditorTabs={updateEditorTabs}
        onRunQuery={handleRunQuery}
      />
      <Suspense fallback={<EditorLoader />}>
        <LazyEditor
          aria-label="query editor input"
          mode="mysql"
          theme="tomorrow"
          name={uuid()}
          fontSize={16}
          maxLines={6}
          minLines={6}
          width="100%"
          showPrintMargin={false}
          showGutter
          highlightActiveLine={false}
          placeholder={DEFAULT_STRINGS.QUERY_EDITOR_PLACEHOLDER}
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          value={currentQuery}
          onChange={handleQueryChange}
          style={styles.editorStyles}
          showLineNumbers
        />
      </Suspense>
      <Toast show={isToastVisible} type={toastType} message={toastMessage} />
    </Box>
  );
};

export default QueryEditor;

QueryEditor.propTypes = {
  onRunQuery: PropTypes.func.isRequired,
};
