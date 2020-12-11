import { useEffect, useState } from "react";
const Route = ({ path, children }) => {
  const [pathing, setPathing] = useState(window.location.pathname);
  useEffect(() => {
    const onUrlChange = () => {
      setPathing(window.location.pathname);
    };
    window.addEventListener("popstate", onUrlChange);
    return () => {
      //cleanup
      window.removeEventListener("popstate", onUrlChange);
    };
  }, []);
  return pathing === path ? children : null;
};
export default Route;
