import React from "react";
import { Navbar } from "./components/navbar";
import Auth from "./components/autx";
import Login from "./components/login";


const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Auth />
        <br />
        <br />
        <br />
        <Login />
      </div>
    </div>
  );
}


export default App;