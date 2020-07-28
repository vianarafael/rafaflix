import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Menu from "./components/Menu/menu.components";
import Home from "./components/Home";
import Details from "./components/Details";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={Details} />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
