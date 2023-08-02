import { TableCell, TableHead, TableRow } from "@mui/material";
import PropTypes from "prop-types";

const styles = {
  tableHeaderCell: {
    borderRight: `0.5px solid grey`,
    fontWeight: 700,
    color: "secondary.main",
  },
};

const TableHeader = ({ headerCells = [] }) => {
  return (
    <TableHead>
      <TableRow>
        {headerCells.map((headCell) => (
          <TableCell
            sx={styles.tableHeaderCell}
            key={headCell.id}
            align="center"
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  headerCells: PropTypes.array.isRequired,
};

export default TableHeader;
