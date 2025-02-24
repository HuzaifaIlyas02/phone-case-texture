import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import PhoneCase from './PhoneCase';

function App() {
  const [customTexture, setCustomTexture] = useState(null);

  const handleTextureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomTexture(url);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <input type="file" accept="image/*" onChange={handleTextureUpload} style={{ margin: '10px' }} />
      <div style={{ flex: 1 }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <PhoneCase customTexture={customTexture} />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
