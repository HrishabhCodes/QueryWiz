export const TOAST_ERROR = "error";
export const TOAST_SUCCESS = "success";

export const TOAST_PROPS = {
  [TOAST_ERROR]: {
    alertProps: {
      severity: TOAST_ERROR,
    },
  },
  [TOAST_SUCCESS]: {
    alertProps: {
      severity: TOAST_SUCCESS,
    },
  },
};

export const getToastProps = (type) => TOAST_PROPS[type];
