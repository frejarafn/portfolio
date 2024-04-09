import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';
import LadyLinkup from './pages/LadyLinkup';
import Sailmore from './pages/Sailmore';
import TntBraende from './pages/TntBraende';

function App() {
  return (
    <>
      <Nav />
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/ladylinkup" element={<LadyLinkup />} />
        <Route path="/sailmore" element={<Sailmore />} />
        <Route path="/tntbraende" element={<TntBraende />} />



      </Routes>
      <Footer> </Footer>
    </>
  );
}

export default App;
