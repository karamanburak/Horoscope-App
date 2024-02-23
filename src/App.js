
import React from 'react';
import "./App.scss";
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Card from './components/card/Card';

import {data} from "./helper/data";

const App = () => {
  return (
    <div>
    <Navbar/>
    <Main/>
    <Card data={data}/>

    </div>
  )
}

export default App
