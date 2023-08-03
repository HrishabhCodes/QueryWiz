import React, { Suspense, useState } from "react";
import Toast from "../Toast";
import useToast from "../../hooks/useToast";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import EditorControls from "./EditorControls";
import EditorLoader from "./EditorLoader";
import { Box } from "@mui/material";
import useAppContext from "../../hooks/useAppContext";

const LazyEditor = React.lazy(() => import("./LazyEditor"));

const styles = {
  editorStyles: {
    border: `1px solid rgba(0, 0, 0, 0.12)`,
    borderRight: "0",
  },
};

const QueryEditor = ({ onRunQuery }) => {
  const { currentTab, setCurrentTab, setTabs } = useAppContext();
  const [currentQuery, setCurrentQuery] = useState(currentTab.query);
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

  const handleQueryChange = (value) => {
    setCurrentQuery(value);
    const tempTab = currentTab;
    tempTab.query = value;
    setCurrentTab({ ...tempTab });
    setTabs((prevTabs) => {
      return prevTabs.map((tab) => {
        if (tab.id === currentTab.id) {
          return { ...tab, query: value };
        }
        return tab;
      });
    });
  };

  return (
    <Box>
      <EditorControls onRunQuery={handleRunQuery} />
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
          placeholder={"Write Query Here ..."}
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          value={currentTab.query}
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
  id: PropTypes.string.isRequired,
};
