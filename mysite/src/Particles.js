import React from 'react';
export const Particles = () => {
  const lowerParticles = Array.apply(null, Array(66));
  const upperParticles = Array.apply(null, Array(700));

  return (
    <div className="Particles">
      {upperParticles.map(() => { return <span className="upper-particles"></span>; })}
      {lowerParticles.map(() => { return <span className="lower-particles"></span>; })}
    </div>
  );
};
