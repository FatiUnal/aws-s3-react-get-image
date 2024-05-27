import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageComponent = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // GET isteği yap
    axios.get('http://localhost:8080/deneme/image', { responseType: 'blob' })
      .then(response => {
        // Blob verisini URL'e dönüştür
        const imgUrl = URL.createObjectURL(response.data);
        setImageSrc(imgUrl);
        setLoading(false);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        setLoading(false);
      });
  }, []); // Sadece bir kere yükle

  return (
    <div>
      {loading ? (
        <p>Resim yükleniyor...</p>
      ) : (
        <img src={imageSrc} alt="Resim" />
      )}
    </div>
  );
};

export default ImageComponent;
