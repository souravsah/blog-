import GlobalStyle from "./globalStyle.js";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx"
import PostPage from "./pages/PostPage/PostPage.jsx"
import AboutPage from "./pages/AboutPage/AboutPage.jsx"
function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/:post" element={<PostPage/>} />
    <Route path="/about" element={<AboutPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
