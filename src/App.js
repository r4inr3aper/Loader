import React, { useState, useEffect } from 'react';
import Loader from '../src/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    
    <div className="App" onC>
    {loading ? (
        <Loader />
      ) : (
        <div>
          <h1>Home.</h1>
        </div>
      )}
    </div>
  );
}

export default App;