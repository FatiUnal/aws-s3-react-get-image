import React from 'react';
import ImageComponent from './ImageComponent'; // Resim bileşenini içe aktar

function App() {
  return (
    <div className="App">
      <h1>Resim Görüntüleme Uygulaması</h1>
      <ImageComponent /> {/* Resim bileşenini kullan */} 
    </div>
  );
}

export default App;
