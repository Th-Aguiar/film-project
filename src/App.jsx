import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";

import Movie from "./pages/Movie.jsx";
import Search from "./pages/Search.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='movie/:id' element={<Movie />} />
          <Route path='search' element={<Search />} />
        </Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App;
