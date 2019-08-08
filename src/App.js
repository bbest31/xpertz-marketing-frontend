import React from 'react';

import Router from "./router"

import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  return (
    <div>
      <Header></Header>
      <Router></Router>
      <Footer></Footer>
    </div>
  );
}

export default App;