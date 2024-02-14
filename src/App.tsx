import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import ErrorNotFound from "./pages/Error404";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
