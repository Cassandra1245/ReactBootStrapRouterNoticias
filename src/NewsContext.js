import React, { createContext, useEffect, useState } from 'react';

const NoticiasContext = createContext();

export const NoticiasProvider = ({ children }) => {
  const [noticias, setNoticias] = useState([]);
  
  useEffect(() => {
    const loadNoticias = async () => {
      const response = await fetch('./noticias.json');
      const json = await response.json();
      setNoticias(json);
    };
    loadNoticias();
  }, []);


  return (
    <NoticiasContext.Provider value={{ noticias }}>
      {children}
    </NoticiasContext.Provider>
  );
};

export default NoticiasContext;
