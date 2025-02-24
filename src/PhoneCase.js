import React, { useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';

function PhoneCase({ customTexture }) {
  const gltf = useLoader(GLTFLoader, '/phone_case.glb');
  const defaultTexture = useLoader(TextureLoader, '/default_texture.jpeg');

  useEffect(() => {
    if (gltf && gltf.scene) {
      const textureToApply = customTexture ? new TextureLoader().load(customTexture) : defaultTexture;
      
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.material.map = textureToApply;
          child.material.needsUpdate = true;
        }
      });
    }
  }, [gltf, defaultTexture, customTexture]);

  return <primitive object={gltf.scene} scale={1.5} />;
}

export default PhoneCase;
