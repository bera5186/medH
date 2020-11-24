import React from "react";

// style
import './sass/base.scss';

// pages
import Home from "./pages/Home";

// components
import { Navbar } from "./components/Navbar";

function App() {
  
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
    </>
  )
}
export default App;
