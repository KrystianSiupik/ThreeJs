import "./App.css";
import { Model } from "./1.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {ThreeDModel} from "./Threes.js"

function App() {
  return (
    <div className="App">
   
        <ThreeDModel  />
      
    </div>
  );
}

export default App;