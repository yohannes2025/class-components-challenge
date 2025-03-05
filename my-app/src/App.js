import React from "react";
import css from "./App.module.css";
import Sidebar from "./components/Sidebar";
import NavBarSimple from "./NavBarSimple";

function App() {
  return (
    <div className={css.App}>
      <NavBarSimple />
      <Sidebar />
    </div>
  );
}

export default App;
