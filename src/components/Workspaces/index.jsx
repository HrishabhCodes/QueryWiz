import { Box, Typography } from "@mui/material";
import useAppContext from "../../hooks/useAppContext";
import CreateButton from "../CreateButton";
import { useNavigate } from "react-router-dom";

const Workspaces = () => {
  const { workspaces, setCurrentWorkspace, setCurrentTab, setTabs } =
    useAppContext();
  const navigate = useNavigate();

  const redirect = (id) => {
    setCurrentWorkspace(id);
    const workspace = workspaces.filter((workspace) => workspace.id === id)[0];
    setCurrentTab(workspace.tabs[0]);
    setTabs(workspace.tabs);
    navigate(`/workspace/${id}`);
  };

  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        className="header"
        sx={{
          fontWeight: 600,
          width: "100%",
          padding: "20px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Workspaces</Typography>
        <CreateButton />
      </Box>

      <Box
        width={"100%"}
        sx={{
          padding: "10px 30px",
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {workspaces.map((workspace) => (
          <Box
            key={workspace.id}
            sx={{
              width: "30%",
              padding: "20px",
              backgroundColor: "#f5f5f5",
              color: "#292929",
              borderRadius: "5px",
              marginTop: "15px",
              cursor: "pointer",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
            onClick={() => redirect(workspace.id)}
          >
            <Typography sx={{ fontWeight: 600 }} variant="body1">
              {workspace.name}
            </Typography>
            <Typography
              sx={{ fontSize: "13px", color: "grey" }}
              variant="body2"
            >
              {Object.keys(workspace.tabs).length} Tabs
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Workspaces;
