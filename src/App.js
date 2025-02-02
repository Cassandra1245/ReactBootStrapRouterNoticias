import './App.css';
import { BrowserRouter, Route, Routes } from "react-router";
import ListaNoticias from "./NewsList";
import { NoticiasProvider } from "./NewsContext";
import NewsDetails from "./NewsDetails";

function App() {
  return (
    <NoticiasProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaNoticias />} />
          <Route path="/NewsDetails/:filtro" element={<NewsDetails />} />
        </Routes>
      </BrowserRouter>
    </NoticiasProvider>
  );
}

export default App;

