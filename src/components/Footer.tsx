import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white border-t border-[#E2E5EA] py-12">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-[17px] font-bold text-[#17212B] tracking-tight">
              홍길동 연구 포트폴리오
            </div>
            <div className="text-[14px] text-[#17212B]/70 mt-1">
              {PROFILE_DATA.fullTitle}
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-2 text-[13px] text-[#17212B]/60">
            <p>생체신호 표현학습 및 물리 기반 모델링 연구 기록</p>
            <button
              type="button"
              onClick={scrollToTop}
              className="text-[#2855D9] hover:text-[#1E44B8] font-medium transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9] rounded"
            >
              맨 위로 이동 ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
