import { HashRouter, Navigate, Route, Routes } from "react-router";
import { GoalsProvider } from "./contexts/GoalsContext";
import StartPage from "./pages/StartPage/StartPage";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import Daily from "./components/Daily/Daily";
import AddItemDaily from "./pages/Tools/AddItemDaily";
import LongTrem from "./components/LongTrem/LongTrem";
import LongTremShow from "./pages/Tools/LongTremShow";
import AddItemLongTrem from "./pages/Tools/AddItemLongTrem";
import EditDaily from "./pages/Tools/EditDaily";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <div className="container-main">
      <GoalsProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/home" element={<Home />}>
              <Route index element={<Navigate replace to="daily" />} />

              <Route path="daily" element={<Daily />}></Route>

              <Route path="long-trem" element={<LongTrem />} />
              <Route path="long-trem/:id" element={<LongTremShow />} />
            </Route>
            <Route path="add-longTrem" element={<AddItemLongTrem />} />
            <Route path="/add-daily" element={<AddItemDaily />} />
            <Route path="/edit-daily/:id" element={<EditDaily />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chalenge" element={<ComingSoon />} />
            <Route path="/archive" element={<ComingSoon />} />
            <Route path="/start-where" element={<ComingSoon />} />
          </Routes>
        </HashRouter>
      </GoalsProvider>
    </div>
  );
}

export default App;
