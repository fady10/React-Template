# react-template
Adding necessary components to start your project with 

<h2> Routing || </h2>

This template comes with routing in the box. Native routing components without any packages. 

<h3>Routing Usages ||</h3> 

```
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
```
<h2>Using the Template</h2> 
1-
```
git clone https://github.com/fady10/react-template.git
```

2- change the directory name to whatever you want 

3- run ```npm install```

4- run ```npm start```
