import React, { createContext, useEffect, useState } from 'react';

const NoticiasContext = createContext();

export const NoticiasProvider = ({ children }) => {
  const [noticias, setNoticias] = useState([]);
  const [noticiasFiltradas, setNoticiasFiltradas] = useState([]);
  const vacio = false;
  useEffect(() => {
    const loadNoticias = async () => {
      const response = await fetch('./noticias.json');
      const json = await response.json();
      setNoticias(json);
      setNoticiasFiltradas(json);
    };
    loadNoticias();
  }, []);

  const filtrarNoticias = (busqueda) => {

      const filtradas = noticias.filter(noticia =>
        noticia.titulo.toLowerCase().includes(busqueda.toLowerCase()) || 
        noticia.categoria.toLowerCase().includes(busqueda.toLowerCase())
      )
      
      setNoticiasFiltradas(filtradas.length > 0 ? filtradas : noticias);
  };

  return (
    <NoticiasContext.Provider value={{ noticias, noticiasFiltradas, filtrarNoticias }}>
      {children}
    </NoticiasContext.Provider>
  );
};

export default NoticiasContext;
