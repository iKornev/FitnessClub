import React from "react";
import { Navbar } from "./components/navbar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      {/* <div>
        <Navbar />
        <div>
          <Auth />
          <br />
          <br />
          <br />
          <Login />
        </div>
      </div> */}
    </BrowserRouter>
  );
}


export default App;