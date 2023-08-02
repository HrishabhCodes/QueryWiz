const minWidth = "140px";

const styles = {
  button: {
    minWidth: minWidth,
    fontWeight: 500,
    textTransform: "capitalize",
    paddingTop: "8px",
    paddingBottom: "8px",
    "& > span": {
      fontSize: "0.9em",
    },
  },
  downloadIcon: {
    userSelect: "none",
    pointerEvents: "none",
    marginRight: "8px",
  },
  downIcon: {
    userSelect: "none",
    pointerEvents: "none",
  },
  upIcon: {
    userSelect: "none",
    pointerEvents: "none",
    transform: "rotate(180deg)",
  },
  "& .MuiMenu-paper": {
    minWidth: minWidth,
    borderRadius: "4px",
    marginTop: "8px",
  },
};

export default styles;
