import React, { useState } from 'react';
import { Menu, X, ArrowDown } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: '소개', href: '#intro', id: 'intro' },
    { label: '관심', href: '#interests', id: 'interests' },
    { label: '활동', href: '#activities', id: 'activities' },
    { label: '프로젝트', href: '#projects', id: 'projects' },
  ];

  const handleScroll = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7F8FA]/95 backdrop-blur-sm border-b border-[#E2E5EA]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, one line text element */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-base sm:text-lg font-bold tracking-tight text-[#17212B] hover:text-[#2855D9] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9] rounded-[4px] px-1"
        >
          {PROFILE_DATA.fullTitle}
        </a>

        {/* Zone 2: 4-5 nav links, 1-2 word labels, single-line */}
        <nav className="hidden md:flex items-center gap-8 text-[16px] font-medium text-[#17212B]/75">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.href);
                }}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9] rounded-[4px] ${
                  isActive
                    ? 'text-[#2855D9] font-semibold border-b-2 border-[#2855D9]'
                    : 'text-[#17212B]/80 hover:text-[#17212B]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#projects');
            }}
            className="min-h-[48px] px-5 flex items-center justify-center text-[15px] font-medium text-white bg-[#0F766E] hover:bg-[#115E59] rounded-[8px] transition-colors whitespace-nowrap shrink-0 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2"
          >
            연구 프로젝트 보기
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#projects');
            }}
            className="min-h-[44px] px-3.5 flex items-center text-xs font-medium text-white bg-[#0F766E] hover:bg-[#115E59] rounded-[8px] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
          >
            프로젝트 보기
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴 열기"
            aria-expanded={mobileMenuOpen}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-[8px] border border-[#E2E5EA] bg-white text-[#17212B] hover:bg-[#F7F8FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9]"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E2E5EA] bg-white px-5 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.href);
              }}
              className="block py-2.5 px-3 rounded-[8px] text-[16px] font-medium text-[#17212B] hover:bg-[#F7F8FA] hover:text-[#2855D9] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleScroll('#projects');
              }}
              className="w-full min-h-[48px] flex items-center justify-center text-[15px] font-medium text-white bg-[#0F766E] hover:bg-[#115E59] rounded-[8px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2"
            >
              연구 프로젝트 보기 <ArrowDown size={16} className="ml-1.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
