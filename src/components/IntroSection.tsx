import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { CheckCircle2, Sliders, Layers } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="py-16 md:py-20 border-b border-[#E2E5EA]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        {/* Section Title: 32px large screen, 28px small screen */}
        <div className="mb-8 md:mb-10">
          <div className="text-[13px] font-medium text-[#2855D9] tracking-wider uppercase mb-2">
            Introduction
          </div>
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#17212B] tracking-tight">
            소개
          </h2>
        </div>

        {/* Content Surface: White card, rounded 16px, fine border */}
        <div className="bg-white rounded-[16px] border border-[#E2E5EA] p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Academic status & Core statement */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-[14px] text-[#17212B]/60 font-medium">
                연구자 기본 정보
              </div>
              <div className="text-[22px] md:text-[24px] font-bold text-[#17212B]">
                {PROFILE_DATA.fullTitle}
              </div>
              <p className="text-[16px] md:text-[18px] text-[#17212B] leading-[1.7] font-medium">
                {PROFILE_DATA.introSentence}
              </p>
            </div>

            {/* Right Column: Detailed perspective & Research principles */}
            <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-[#E2E5EA] lg:pl-10">
              <div className="space-y-4 text-[16px] md:text-[17px] text-[#17212B]/85 leading-[1.7]">
                {PROFILE_DATA.detailedIntro.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Research Approach Pillars */}
              <div className="pt-6 border-t border-[#E2E5EA] grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[15px] font-semibold text-[#17212B]">
                    <Sliders size={16} className="text-[#2855D9]" aria-hidden="true" />
                    <span>실험 설계</span>
                  </div>
                  <p className="text-[13px] text-[#17212B]/70 leading-[1.6]">
                    질문 중심의 체계적 대조군 및 비교군 설정
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[15px] font-semibold text-[#17212B]">
                    <Layers size={16} className="text-[#2855D9]" aria-hidden="true" />
                    <span>학습 및 모델링</span>
                  </div>
                  <p className="text-[13px] text-[#17212B]/70 leading-[1.6]">
                    표현학습과 물리 보존 법칙의 유기적 결합
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[15px] font-semibold text-[#17212B]">
                    <CheckCircle2 size={16} className="text-[#2855D9]" aria-hidden="true" />
                    <span>재현성 검증</span>
                  </div>
                  <p className="text-[13px] text-[#17212B]/70 leading-[1.6]">
                    환자 간 데이터 유출 차단 및 외부 검증
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
