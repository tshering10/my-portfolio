import { useState } from 'react';
import { LoadingScreen } from './Components/LoadingScreen';
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className='bg-gray-800 h-auto w-full overflow-hidden'>
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;