import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AbousUsPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import Bulvar109Page from "./pages/ProjectsPages/Bulvar109Page";
import Aeron110Page from "./pages/ProjectsPages/Aeron110Page";
import MontblancPage from "./pages/ProjectsPages/MontblancPage";
import BeringPage from "./pages/ProjectsPages/BeringPage";
import Balance98Page from "./pages/ProjectsPages/Balance98Page";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/bulvar" element={<Bulvar109Page />} />
        <Route path="/projects/aeron" element={<Aeron110Page />} />
        <Route path="/projects/montblanc" element={<MontblancPage />} />
        <Route path="/projects/bering" element={<BeringPage />} />
        <Route path="/projects/balance" element={<Balance98Page />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
