import React, {useState, useEffect}from 'react'

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from './config/particles-config'


const ParticlesBg = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {
    console.log(container);
  };

  if (init) {
    return (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particlesConfig}
          >
          </Particles>
 
    );
  }

  return <></>;

}

export default ParticlesBg