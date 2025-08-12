import { useState } from 'react';
import { LoadingScreen } from './Components/LoadingScreen';
import "./index.css"
import { Navbar } from './Components/Navbar';
import { MobileMenu } from './Components/MobileMenu';
import { Home } from './Components/sections/Home';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='bg-gray-800 h-auto w-full overflow-hidden'>
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <div className={`min-h-screen transition-opacity duration-700 ${ isLoaded ? "opacity-100" : "opacity-0"}
         bg-black text-gray-200`}
         >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;