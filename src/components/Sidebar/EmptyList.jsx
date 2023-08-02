import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Box, Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";

const styles = () => ({
  wrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const EmptyList = ({
  title,
  subtitle,
  icon,
  titleVariant = "h5",
  subtitleVariant = "subtitle2",
}) => {
  return (
    <Paper sx={styles.wrapper}>
      {icon ? icon : <LibraryBooksIcon />}
      <Box
        pt={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {title && <Typography variant={titleVariant}>{title}</Typography>}
        {subtitle && (
          <Typography variant={subtitleVariant}>{subtitle}</Typography>
        )}
      </Box>
    </Paper>
  );
};

export default EmptyList;

EmptyList.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  titleVariant: PropTypes.string,
  subtitleVariant: PropTypes.string,
  icon: PropTypes.element,
};
