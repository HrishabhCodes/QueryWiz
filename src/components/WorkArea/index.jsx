import { useCallback, useState } from "react";
import NoResult from "../NoResult";
import Editor from "../Editor";
import ResultTable from "../Result";
import useAppContext from "../../hooks/useAppContext";
import DnsIcon from "@mui/icons-material/Dns";
import { Box } from "@mui/material";
import NoWorkspace from "../NoWorkspace";

/**
 * Playground for SQL
 * Wrapper Container
 * we can have Other Feature Components added to this
 * */

const WorkArea = () => {
  const { tablesData } = useAppContext();
  const totalWorkspaces = [1];

  const [queryResults, setQueryResults] = useState();
  /**
   * handles running the query selected by user and returns data for the query
   * and updating store/context if required */
  const handleOnQueryRun = useCallback(() => {
    // returns random table data for all queries
    const tableNames = Object.keys(tablesData);
    const tableName = tableNames[(tableNames.length * Math.random()) << 0];
    setQueryResults(tablesData[tableName]);
  }, [tablesData]);

  return (
    <>
      {totalWorkspaces.length === 0 ? (
        <NoWorkspace />
      ) : (
        <Box display="flex" height="100%" width="100%" flexDirection="column">
          <Editor onRunQuery={handleOnQueryRun} />
          {!queryResults ? (
            <NoResult
              icon={<DnsIcon fontSize="large" />}
              title={"Welcome to SQL QUERY EDITOR"}
              subtitle={"To get started, Enter and Run a Query"}
            />
          ) : (
            <ResultTable tableData={queryResults} />
          )}
        </Box>
      )}
    </>
  );
};

export default WorkArea;
