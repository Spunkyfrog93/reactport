import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./component/NavTabs";
import About from "./component/pages/about";
import Portfolio from "./component/pages/Portfolio";
import Contact from "./component/pages/contact";

function App() {
  return (
    
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;