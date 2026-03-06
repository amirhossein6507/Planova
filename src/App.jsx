import { HashRouter, Navigate, Route, Routes } from "react-router";
import StartPage from "./pages/StartPage/StartPage";
import Home from "./pages/Home/Home";
import Daily from "./components/Daily/Daily";
import LongTrem from "./components/LongTrem/LongTrem";
import LongTremShow from "./components/LongTrem/LongTremShow";
import Profile from "./pages/Profile/Profile";
import { GoalsProvider } from "./contexts/GoalsContext";
import AddItemLongTrem from "./pages/AddItem/AddItemLongTrem";
import AddItemDaily from "./pages/AddItem/AddItemDaily";

function App() {
  return (
    <div>
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
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </HashRouter>
      </GoalsProvider>
    </div>
  );
}

export default App;
