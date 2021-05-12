import React from "react";
import { Navbar } from "./components/navbar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import  {useEffect, useState} from 'react';
import axios from "axios";


const App: React.FC = () => {

  // const [appState,setAppState] = useState();

  // useEffect(() => {
  //   const apiUrl = 'http://localhost:5000/program/programs';
  //   axios.get(apiUrl).then((resp) =>{
  //     const allPrograms = resp.data;
  //     setAppState(allPrograms);
  //   })
  // }, [setAppState])

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