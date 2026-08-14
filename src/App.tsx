import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Events from './pages/Events';
import Projects from './pages/Projects';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import ContentDetail from './pages/ContentDetail';
import VisionMission from './pages/VisionMission';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vision-mission" element={<VisionMission />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:slug" element={<ContentDetail kind="event" />} />
          <Route path="projects" element={<Projects />} />
          <Route path="news" element={<News />} />
          <Route path="news/:slug" element={<ContentDetail kind="news" />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="membership" element={<Membership />} />
          <Route path="contact" element={<Contact />} />
          {/* Add a simple 404 page for unmatched routes */}
          <Route path="*" element={
            <div className="flex items-center justify-center min-h-[50vh] text-center px-4">
              <div>
                <h1 className="text-6xl font-bold text-jci-blue mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
                <a href="/" className="btn-primary">Return Home</a>
              </div>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
