import React from 'react';
import '../src/styles.css';
import { LineWobble } from '@uiball/loaders'

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-overlay"></div>
      <div className="loader-content">
        <LineWobble size={70} lineWeight={5.5} speed={1.9} color="black" />
      </div>
    </div>
  );
};

export default Loader;
