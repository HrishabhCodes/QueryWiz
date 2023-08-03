import { useMemo, useState } from "react";
import Proptypes from "prop-types";
import TableHeader from "./TableHeader";
import TableRowDialog from "./TableRowDialog";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";

const styles = {
  paper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  tableContainer: {
    flex: "1",
    position: "relative",
    overflowY: "auto",
  },
  tableRowItem: {
    cursor: "pointer",
    "&:nth-of-type(odd)": {
      backgroundColor: "#f0f4f7",
    },
  },
  tableCell: {
    maxWidth: "200px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontFamily: "Mukta",
  },
};

const getTableHeaderCells = (metaData) => {
  return (
    metaData &&
    metaData.columns &&
    metaData.columns.map((column) => ({
      id: column.name,
      numeric: false,
      label: `${column.name}`,
    }))
  );
};

const ResultTable = ({ tableData = {} }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { rows: tableRows = [], metaData } = tableData;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [showTableRowDialog, setShowTableRowDialog] = useState(false);
  const [currSelectedRow, setCurrSelectedRow] = useState();

  const toggleTableRowDialogState = () => {
    setShowTableRowDialog((val) => !val);
  };

  const handleTableRowDialogSuccess = () => {
    toggleTableRowDialogState();
    setTimeout(() => {
      setCurrSelectedRow({});
    }, 500);
  };

  const handleTableRowClick = (row) => {
    setCurrSelectedRow(row);
    toggleTableRowDialogState();
  };

  const filteredRows = useMemo(() => {
    return tableRows.length > 0
      ? tableRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : [];
  }, [tableRows, page, rowsPerPage]);

  return (
    <Paper sx={styles.paper}>
      <TableContainer sx={styles.tableContainer}>
        <Table
          stickyHeader
          aria-labelledby="tableTitle"
          aria-label="Query result table"
          sx={{
            "& > *": {
              fontFamily: "Mukta !important",
            },
          }}
        >
          {/* Table Header */}
          <TableHeader
            headerCells={getTableHeaderCells(metaData)}
            rowCount={filteredRows.length}
          />

          {/* Table Body */}
          <TableBody>
            {filteredRows.map((row, rowIndex) => {
              return (
                <TableRow
                  sx={styles.tableRowItem}
                  hover
                  tabIndex={-1}
                  key={`result-row-${rowIndex}`}
                  onClick={() => {
                    handleTableRowClick(row);
                  }}
                >
                  {Object.keys(row).map((key, cellIndex) => (
                    <TableCell
                      sx={styles.tableCell}
                      key={`result-cell-${key}-${rowIndex}-${cellIndex}`}
                    >
                      {row[key]}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Table Pagination Controls */}
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={tableRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          "& .MuiTablePagination-selectLabel": {
            fontFamily: "Mukta",
          },
          "& .MuiSelect-select": {
            fontFamily: "Mukta",
          },
          "& .MuiTablePagination-displayedRows": {
            fontFamily: "Mukta",
          },
        }}
      />
      <TableRowDialog
        row={currSelectedRow}
        showDialog={showTableRowDialog}
        handleCancelAction={toggleTableRowDialogState}
        handleSuccessAction={handleTableRowDialogSuccess}
      />
    </Paper>
  );
};

ResultTable.propTypes = {
  tableData: Proptypes.object.isRequired,
};

export default ResultTable;
