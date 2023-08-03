import AppContext from "../context/AppContext";
import { useContext } from "react";

function useAppContext(callback = (context) => context) {
  const ctx = useContext(AppContext);
  return callback(ctx);
}

export default useAppContext;
