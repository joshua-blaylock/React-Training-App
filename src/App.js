import React from 'react';
import Shows from "./components/Shows/Shows"
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import './App.css';
import { BrowserRouter , Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div class="container">
          <Route path="/" exact component={Home}/>
          <Route path="/shows" component={Shows}/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
