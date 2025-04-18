import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import './App.css';

function HomePage() {
  return (
    <>
      <Helmet><title>Home</title></Helmet>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <p>Welcome to the homepage!</p>
      </div>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Helmet><title>About</title></Helmet>
      <div className="p-4">
        <h1 className="text-2xl font-bold">About Page</h1>
        <p>This is the about page.</p>
      </div>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Helmet><title>Contact</title></Helmet>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Contact Page</h1>
        <p>Get in touch with us.</p>
      </div>
    </>
  );
}

function Navigation() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <nav className="bg-gray-100 p-4 shadow mb-4">
      <ul className="flex gap-4">
        <li><Link to="/" className={pathname === '/' ? 'font-bold' : ''}>Home</Link></li>
        <li><Link to="/about" className={pathname === '/about' ? 'font-bold' : ''}>About</Link></li>
        <li><Link to="/contact" className={pathname === '/contact' ? 'font-bold' : ''}>Contact</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App
