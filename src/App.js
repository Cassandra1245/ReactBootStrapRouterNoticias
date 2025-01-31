
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router";
import ListaNoticias from "./ListaNoticias";
import {NoticiasProvider } from "./NoticiasContext";


function App() {
  return (
    <NoticiasProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaNoticias />} />
        </Routes>
      </BrowserRouter>
    </NoticiasProvider>
  );
}

export default App;
