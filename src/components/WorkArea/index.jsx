import useAppContext from "../../hooks/useAppContext";
import NoWorkspace from "../NoWorkspace";
import Playground from "../Editor/Playground";
import { Route, Routes } from "react-router-dom";
import Workspaces from "../Workspaces";

const WorkArea = () => {
  const { workspaces } = useAppContext();

  return (
    <>
      <Routes>
        {workspaces.length === 0 ? (
          <Route path="/" element={<NoWorkspace />} />
        ) : (
          <Route path="/" element={<Workspaces />} />
        )}
        <Route path="/workspace/:id" element={<Playground />} />
      </Routes>
    </>
  );
};

export default WorkArea;
