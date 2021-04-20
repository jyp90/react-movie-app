import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./components/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/detail" component={Detail} />
    </BrowserRouter>
  );
}
export default App;
