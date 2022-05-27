import "./App.css";
import {
  Categories,
  Forum,
  MainPage,
  NoPage,
  Ticket,
  Profile,
  Login,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="categories" element={<Categories />} />
          <Route path="forum" element={<Forum />} />
          <Route path="ticket" element={<Ticket />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;