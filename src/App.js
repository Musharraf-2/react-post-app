import { Navbar } from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Signup } from "./Pages/Signup";
import { Signin } from "./Pages/Signin";
import { Posts } from "./Pages/Posts";
import { PageNotFound } from "./Components/Errors/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/" element={<Posts />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
