import "./App.css";
import * as React from "react";

import { motion } from "framer-motion";

import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className='App w-screen flex flex-col '>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
