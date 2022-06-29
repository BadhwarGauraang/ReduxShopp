import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddShop from "./components/AddShop";
import EditShop from "./components/EditShop";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Route exact path="/ReduxShopp/" component={() => <Home />} />
      <Route exact path="/ReduxShopp/add" component={() => <AddShop />} />
      <Route exact path="/ReduxShopp/edit/:id" component={() => <EditShop />} />
    </div>
  );
};
export default App;
