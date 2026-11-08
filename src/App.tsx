import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { InterestsSection } from './components/InterestsSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'interests', 'activities', 'projects'];
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of [...sections].reverse()) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection('top');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA] text-[#17212B]">
      {/* Top Navigation Bar */}
      <Header activeSection={activeSection} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. 첫 화면 (Hero) */}
        <HeroSection />

        {/* 2. 소개 (Introduction) */}
        <IntroSection />

        {/* 3. 관심 분야 (Research Interests) */}
        <InterestsSection />

        {/* 4. 활동 경험 (Academic Activities) */}
        <ActivitiesSection />

        {/* 5. 연구 프로젝트 (Research Projects) */}
        <ProjectsSection />
      </main>

      {/* 6. 하단 (Footer) */}
      <Footer />
    </div>
  );
}
