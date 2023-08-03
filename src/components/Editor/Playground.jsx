import NoResult from "../NoResult";
import Editor from "../Editor";
import ResultTable from "../Result";
import DnsIcon from "@mui/icons-material/Dns";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useCallback, useState } from "react";
import useAppContext from "../../hooks/useAppContext";

const Playground = () => {
  const { id } = useParams();
  const { tablesData } = useAppContext();
  const [queryResults, setQueryResults] = useState();

  const handleOnQueryRun = useCallback(() => {
    const tableNames = Object.keys(tablesData);
    const tableName = tableNames[(tableNames.length * Math.random()) << 0];
    setQueryResults(tablesData[tableName]);
  }, [tablesData]);

  return (
    <Box display="flex" height="100%" width="100%" flexDirection="column">
      <Editor id={id} onRunQuery={handleOnQueryRun} />
      {!queryResults ? (
        <NoResult
          icon={<DnsIcon fontSize="large" />}
          title={"Welcome to the SQL Editor"}
          subtitle={"To get started, Enter and Run a Query"}
        />
      ) : (
        <ResultTable tableData={queryResults} />
      )}
    </Box>
  );
};

export default Playground;
