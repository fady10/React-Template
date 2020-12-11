import Link from "./routing/Link";
import Route from "./routing/Route";
import React from "react";
const App = () => {
  return (
    <React.Fragment>
      <Route path="/path-to">
        <div> Component </div>
      </Route>
      <Route path="/">
        <div> Hi </div>
      </Route>
      <div className='links'>
        <Link href="/path-to">Component </Link> - 
        <Link href="/">Homepage </Link>
      </div>
    </React.Fragment>
  );
};
export default App;
