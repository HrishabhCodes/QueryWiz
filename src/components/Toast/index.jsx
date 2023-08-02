import { getToastProps } from "../../utils/ToastConstants";
import PropTypes from "prop-types";
import { Alert, Snackbar } from "@mui/material";

const Toast = ({ show = false, type, message }) => {
  const tabProps = getToastProps(type);

  return (
    show && (
      <Snackbar
        open={show}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          sx={{
            border: `1px solid grey`,
            borderRadius: "8px",
            boxShadow:
              "0px 3px 5px -1px #00000033, 0px 6px 10px 0px #00000024, 0px 1px 18px 0px #00000033",
          }}
          {...tabProps.alertProps}
        >
          {message}
        </Alert>
      </Snackbar>
    )
  );
};

Toast.propTypes = {
  show: PropTypes.bool,
  type: PropTypes.string,
  message: PropTypes.string,
};

export default Toast;
