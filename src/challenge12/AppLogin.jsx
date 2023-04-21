import AuthProvider from './AuthProvider';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('lastVisitedPage', location.pathname);
  }, [location.pathname]);

  return (
    <AuthProvider>
      <div className="App">
        // child components go here
      </div>
    </AuthProvider>
  );
};

export default App;
