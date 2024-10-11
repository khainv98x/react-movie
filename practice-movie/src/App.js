import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './component/Home/Home';
import DauTrang from "./component/Global/DauTrang/DauTrang.js";
function App() {
  return (
    <div className="App">
        <DauTrang></DauTrang>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
    </div>
  );
}

export default App;
