import "./App.css";
import * as React from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

import { motion } from "framer-motion";

function App() {
  return (
    <div className='App h-[100hv] flex justify-center align-middle'>
      <ReactPhotoSphereViewer
        src='1.jpg'
        height={"500px"}
        width={"500px"}
      ></ReactPhotoSphereViewer>
    </div>
  );
}

export default App;
