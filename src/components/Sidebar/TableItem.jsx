import TableChartIcon from "@mui/icons-material/TableChart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import { useState } from "react";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Tooltip,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const styles = {
  nested: {
    paddingLeft: "16px",
    paddingRight: "16px",
    backgroundColor: "transparent",
  },
  secondaryTextColor: {
    color: "text.secondaryDark",
    fontWeight: 600,
  },
  columnNameText: {
    paddingLeft: "8px",
    overflowX: "hidden",
    textOverflow: "ellipsis",
    color: "text.secondaryDark",
  },
  primaryTextColor: {
    color: "text.primaryDark",
  },
};

const TableItem = ({ listItem, subtitle, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleListItem = () => {
    setIsOpen((value) => !value);
  };

  const { table, columns } = listItem;

  return (
    <>
      <ListItem button component="li" onClick={toggleListItem}>
        <ListItemIcon>
          {icon ? (
            icon
          ) : (
            <TableChartIcon color="primaryDarkIcon" fontSize="small" />
          )}
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body1">
            <Box
              sx={styles.primaryTextColor}
              component="span"
              fontWeight={isOpen ? "fontWeightBold" : "fontWeightRegular"}
            >
              {table}
            </Box>
          </Typography>
        </ListItemText>
        {isOpen ? <ExpandMoreIcon /> : <ChevronLeftIcon />}
      </ListItem>
      <Collapse component="li" in={isOpen} timeout="auto" unmountOnExit>
        <List
          component="ul"
          disablePadding
          subheader={
            <ListSubheader
              sx={{ ...styles.nested, ...styles.secondaryTextColor }}
            >
              {subtitle || "Columns"}
            </ListSubheader>
          }
          sx={styles.nested}
        >
          {columns.map((column, index) => (
            <ListItem dense key={`${table}-${column.name}-${index}-column`}>
              <ViewColumnIcon color="secondary" />
              <Tooltip
                title={`${column.name} ${
                  column.type ? " (" + column.type + ")" : ""
                } `}
              >
                <ListItemText sx={styles.columnNameText}>
                  <Typography variant="subtitle2" component="span">
                    {column.name}
                  </Typography>
                  {column.type && (
                    <Typography variant="caption">{` (${column.type})`}</Typography>
                  )}
                </ListItemText>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

TableItem.propTypes = {
  listItem: PropTypes.object.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.element,
};

export default TableItem;
