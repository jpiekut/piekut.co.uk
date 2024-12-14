import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Testimonials from './pages/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ClickCounter } from './components/ui/ClickCounter';
import { NavigationProvider, useNavigationContext } from './contexts/NavigationContext';
import { ClickProvider } from './contexts/ClickContext';

const AppContent = () => {
  const { currentPage } = useNavigationContext();

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Services />
            <Contact />
          </>
        ) : currentPage === 'projects' ? (
          <Projects />
        ) : currentPage === 'testimonials' ? (
          <Testimonials />
        ) : (
          <ProjectDetails />
        )}
      </main>
      <Footer />
      <ClickCounter />
    </div>
  );
};

function App() {
  return (
    <NavigationProvider>
      <ClickProvider>
        <AppContent />
      </ClickProvider>
    </NavigationProvider>
  );
}

export default App;