import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import Header from "./components/Header";
import Search from "./pages/Search";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/watch/:videoId" element={<VideoDetail />} />
          <Route path="/results" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
