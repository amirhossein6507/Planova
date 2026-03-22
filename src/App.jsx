import { HashRouter, Navigate, Route, Routes } from "react-router";
import { GoalsProvider } from "./contexts/GoalsContext";
import StartPage from "./ui/StartPage/StartPage";
import Profile from "./features/user/Profile";
import Home from "./ui/Home/Home";
import Daily from "./features/daily/Daily";
import AddItemDaily from "./features/daily/AddItemDaily";
import EditDaily from "./features/daily/EditDaily";
import LongTrem from "./features/lonng-trem/LongTrem";
import LongTremShow from "./features/lonng-trem/LongTremShow";
import AddItemLongTrem from "./features/lonng-trem/AddItemLongTrem";
import ComingSoon from "./ui/ComingSoon";
import Chalenge from "./features/chalenges/Chalenge";

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
            <Route path="/chalenge" element={<Chalenge />} />
            <Route path="/archive" element={<ComingSoon />} />
            <Route path="/start-where" element={<ComingSoon />} />
          </Routes>
        </HashRouter>
      </GoalsProvider>
    </div>
  );
}

export default App;
