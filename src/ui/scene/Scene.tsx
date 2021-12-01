import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';

import { Box } from 'ui/box/Box';

export const Scene = () => {
  const [speedFactor, setSpeedFactor] = useState(1);

  return (
    <div>
      <label htmlFor="speedFactor">
        Speed factor:
        <input
          name="speedFactor"
          id="speedFactor"
          type="range"
          value={speedFactor}
          min={1}
          max={10}
          step={0.1}
          onChange={(e) => setSpeedFactor(+e.currentTarget.value)}
        />
      </label>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.3} color="#FFFFFF" />
        <pointLight intensity={1.0} position={[10, 10, 10]} />
        <Box position={[-2, 1, 0]} rotation={[3, 1, 0]} color="hotpink" boxSpeed={0.02 * speedFactor} />
        <Box position={[2, 1, 0]} rotation={[1, 1, 0]} color="cyan" boxSpeed={0.01 * speedFactor} />
        <Box position={[0, -1, 0]} size={[1, 2, 2]} boxSpeed={0.005 * speedFactor} />
      </Canvas>
    </div>
  );
};
