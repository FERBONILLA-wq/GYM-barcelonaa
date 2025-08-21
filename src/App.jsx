import './index.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Team from './components/Team';
import Machines from './components/Machines';
import Schedule from './components/Schedule';
import Location from './components/Location';
import Contact from './components/Contact';

function NavigationHeader() {
  const location = useLocation();
  
  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Equipo", path: "/equipo" },
    { name: "Máquinas", path: "/maquinas" },
    { name: "Horarios", path: "/horarios" },
    { name: "Clases", path: "/clases" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#181818] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <span className="text-2xl font-extrabold text-dorado tracking-wide">Gym Barcelona</span>
        <nav className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-semibold transition ${
                location.pathname === link.path
                  ? 'text-dorado border-b-2 border-dorado pb-1'
                  : 'text-white hover:text-dorado'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen text-gray-900">
        <NavigationHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/maquinas" element={<Machines />} />
          <Route path="/horarios" element={<Schedule />} />
          <Route path="/clases" element={<Location />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 