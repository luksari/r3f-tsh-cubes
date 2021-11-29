import React from 'react';
import { Canvas } from 'react-three-fiber';

import { Box } from 'ui/box/Box';

export const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.3} color="#FFFFFF" />
      <pointLight intensity={1.0} position={[10, 10, 10]} />
      <Box position={[-2, 1, 0]} rotation={[3, 1, 0]} color="hotpink" />
      <Box position={[2, 1, 0]} rotation={[1, 1, 0]} color="cyan" />
      <Box position={[0, -1, 0]} size={[1, 2, 2]} />
    </Canvas>
  );
};
