import { useCallback, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import HomePage from "../layouts/HomePage";
import useAppContext from "../hooks/useAppContext";
import WorkArea from "../components/WorkArea";

const Home = () => {
  const [showDrawer, setShowDrawer] = useState(true);
  const { tablesData } = useAppContext();

  const toggleDrawerState = useCallback(() => {
    setShowDrawer((show) => !show);
  }, [setShowDrawer]);

  const allItems = useMemo(
    () =>
      Object.keys(tablesData).map(
        (tableName) => tablesData[tableName].metaData
      ),
    [tablesData]
  );

  return (
    <HomePage
      navbar={<Navbar onMenuButtonClick={toggleDrawerState} />}
      sidebar={<SideBar showDrawer={showDrawer} items={allItems} />}
    >
      <WorkArea />
      <div></div>
    </HomePage>
  );
};

export default Home;
