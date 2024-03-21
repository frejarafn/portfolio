import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <>
      <Nav />
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />


      </Routes>
      <Footer> </Footer>
    </>
  );
}

export default App;
