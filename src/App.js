import { Navbar } from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Signup } from "./Pages/Signup";
import { Signin } from "./Pages/Signin";
import { Posts } from "./Pages/Posts";
import { PageNotFound } from "./Components/Errors/PageNotFound";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route exact path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />
        <Route exact path="/signin" element={<Signin setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />} />
        <Route exact path="/" element={<Posts />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
