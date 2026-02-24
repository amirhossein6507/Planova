import { HashRouter, Navigate, Route, Routes } from "react-router";
import StartPage from "./pages/StartPage/StartPage";
import Home from "./pages/Home/Home";
import Daily from "./pages/Daily/Daily";
import LongTrem from "./pages/LongTrem/LongTrem";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/home" element={<Home />}>
            <Route index element={<Navigate replace to="daily" />} />
            <Route path="daily" element={<Daily />} />
            <Route path="long-trem" element={<LongTrem />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
