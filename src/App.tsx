import "./App.css";
import LandingPage from "./views/LandingPage";
import ModelsPage from "./views/ModelsPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route Component={LandingPage} path="/" />
        <Route Component={ModelsPage} path="/models" />
      </Routes>
    </Router>
  );
}

export default App;
