import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MachinesPage from './pages/MachinesPage';
import MachineCategoryPage from './pages/MachineCategoryPage';
import MachineDetailPage from './pages/MachineDetailPage';
import ServicesPage from './pages/ServicesPage';
import ApplicationsPage from './pages/ApplicationsPage';
import GalleryPage from './pages/GalleryPage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/machines" element={<MachinesPage />} />
        <Route path="/machines/:category" element={<MachineCategoryPage />} />
        <Route path="/machines/:category/:slug" element={<MachineDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/company-profile" element={<CompanyProfilePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
