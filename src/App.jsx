import { HashRouter, Navigate, Route, Routes } from "react-router";
import StartPage from "./pages/StartPage/StartPage";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
