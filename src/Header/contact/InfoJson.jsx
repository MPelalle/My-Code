
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

const InfoJson = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BIN_ID = '67157572ad19ca34f8bbd26f';
  const API_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': '$2a$10$BUWB9tmVAf4jvH0pmMFAD.ZHiOhsbyNwgqYxSn1NDq2fb/8OHnZ9W',
          },
        });

        setData(response.data.record);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h3>Datos desde JSONbin.io:</h3>
      <p>Nombre: {data.nombre}</p>
      <p>Apellido: {data.Apellido}</p>
      <p>Rol: {data.Rol}</p>
    </div>
  );
};

export default InfoJson;
