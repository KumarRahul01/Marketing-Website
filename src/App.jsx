import React from "react";
import Routings from "../utils/Routings";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="">
      <Routings />
      <ToastContainer />
    </div>
  );
};

export default App;
