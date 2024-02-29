import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />


      </Routes>
      <Footer> </Footer>
    </>
  );
}

export default App;
