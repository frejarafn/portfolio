import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Nav />
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />


      </Routes>
    </>
  );
}

export default App;
