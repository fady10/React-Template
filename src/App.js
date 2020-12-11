import Link from "./routing/Link";
import Route from "./routing/Route";
import React,{useState} from "react";
import axios from "./api/axios";
const App = () => {
  const [randomName,setRandomName]=useState('');
  const getData = async (response) => {
    const res = await axios.get("/users/1");
    setRandomName(res.data.name);
  };
  getData();
  return (
    <React.Fragment>
      <Route path="/path-to">
        <div>Hello! {randomName}</div>
      </Route>
      <Route path="/">
        <div> Hi </div>
      </Route>
      <div className="links">
        <Link href="/path-to">Component </Link> -<Link href="/">Homepage </Link>
      </div>
    </React.Fragment>
  );
};
export default App;
