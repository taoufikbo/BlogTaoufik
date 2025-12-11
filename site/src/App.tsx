import { Outlet, useLocation } from 'react-router-dom';
import './styles.css';
import iconsSprite from './icons/icons.svg?raw';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/BlogTaoufik/' || location.pathname === '/BlogTaoufik';

  return (
    <>
      {/* Inject SVG sprite */}
      <div dangerouslySetInnerHTML={{ __html: iconsSprite }} />
      
      <div className="app-container">
        {isHomePage && (
          <header className="app-header">
            <h1>Roadmap — DevOps Telco Cloud</h1>
            <p>
              Une feuille de route interactive pour maîtriser le DevOps dans l'environnement Telco Cloud.
              Explorez les technologies, outils et pratiques essentiels.
            </p>
          </header>
        )}
        
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
