import React from 'react';
import { INTEREST_AREAS } from '../data/portfolioData';
import { Activity, Wind, ShieldAlert } from 'lucide-react';

export const InterestsSection: React.FC = () => {
  const getInterestIcon = (id: string) => {
    switch (id) {
      case 'bio-signal-ai':
        return <Activity size={22} className="text-[#2855D9]" aria-hidden="true" />;
      case 'physics-informed-modeling':
        return <Wind size={22} className="text-[#2855D9]" aria-hidden="true" />;
      case 'trustworthy-ai':
        return <ShieldAlert size={22} className="text-[#2855D9]" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <section id="interests" className="py-16 md:py-20 border-b border-[#E2E5EA]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="mb-8 md:mb-12">
          <div className="text-[13px] font-medium text-[#2855D9] tracking-wider uppercase mb-2">
            Research Interests
          </div>
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#17212B] tracking-tight">
            관심 분야
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#17212B]/75 leading-[1.7] mt-2 max-w-2xl">
            생체신호의 특성과 물리적 제약을 고려하여, 의료 현장에서 신뢰할 수 있는 인공지능 모델링 방안을 탐구합니다.
          </p>
        </div>

        {/* 3 Interest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INTEREST_AREAS.map((interest) => (
            <article
              key={interest.id}
              className="bg-white rounded-[16px] border border-[#E2E5EA] p-6 md:p-8 flex flex-col justify-between transition-all hover:border-[#2855D9]/40 hover:shadow-xs"
            >
              <div>
                {/* Clean Editorial Index and Functional Icon */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E2E5EA]/70">
                  <span className="text-[15px] font-mono font-semibold text-[#2855D9] tabular-nums">
                    {interest.index}
                  </span>
                  <div>{getInterestIcon(interest.id)}</div>
                </div>

                {/* Card Title */}
                <h3 className="text-[20px] md:text-[22px] font-bold text-[#17212B] tracking-tight mb-3">
                  {interest.title}
                </h3>

                {/* Card Description: Line height 1.7 */}
                <p className="text-[15px] md:text-[16px] text-[#17212B]/85 leading-[1.7]">
                  {interest.description}
                </p>
              </div>

              {/* Research Focus Tagline - Clean unboxed text */}
              <div className="pt-6 mt-6 border-t border-[#E2E5EA]/50 text-[13px] text-[#17212B]/60 font-medium">
                {interest.id === 'bio-signal-ai' && '심전도 표현학습 · 전이 학습'}
                {interest.id === 'physics-informed-modeling' && 'Navier-Stokes · 희소 관측 유동 추정'}
                {interest.id === 'trustworthy-ai' && '환자 간 데이터 분할 · 외부 검증'}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
