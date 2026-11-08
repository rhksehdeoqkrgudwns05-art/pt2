import React from 'react';
import { ArrowDown, Compass, FileCheck } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToIntro = () => {
    const el = document.querySelector('#intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="pt-10 md:pt-16 lg:pt-20 pb-16 md:pb-24 border-b border-[#E2E5EA]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        {/* Responsive Layout:
            - lg (>= 1024px): 2 columns, text & buttons on left, image on right
            - < 1024px: 1 column, text on top, image below text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Intro text and buttons (lg:col-span-7) */}
          <div className="lg:col-span-7">
            {/* Identity & Academic Status kicker - clean unboxed typography */}
            <div className="flex items-center gap-2 text-[14px] md:text-[15px] font-medium text-[#2855D9] mb-4">
              <span className="font-semibold">{PROFILE_DATA.fullTitle}</span>
              <span aria-hidden="true" className="text-[#17212B]/30">/</span>
              <span className="text-[#17212B]/70">연구 포트폴리오</span>
            </div>

            {/* First Screen Main Title: 64px on >=1024px, 44px on 640-1023px, 38px on <640px */}
            <h1 className="text-[38px] sm:text-[44px] lg:text-[64px] font-bold text-[#17212B] leading-[1.18] tracking-tight mb-6 break-keep text-balance">
              {PROFILE_DATA.heroTitle}
            </h1>

            {/* Intro Sentence: 18px large screen, 16px small screen, ~1.7 line height */}
            <p className="text-[16px] md:text-[18px] text-[#17212B]/85 leading-[1.7] mb-8 max-w-2xl">
              {PROFILE_DATA.introSentence}
            </p>

            {/* Action Area: Buttons height >= 48px, rounded 8px */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <button
                type="button"
                onClick={scrollToProjects}
                className="min-h-[48px] px-6 py-3 bg-[#0F766E] hover:bg-[#115E59] text-white text-[16px] font-medium rounded-[8px] transition-colors flex items-center gap-2 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2"
              >
                <span>연구 프로젝트 보기</span>
                <ArrowDown size={18} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={scrollToIntro}
                className="min-h-[48px] px-6 py-3 bg-white hover:bg-[#F2F4F8] text-[#17212B] text-[16px] font-medium rounded-[8px] border border-[#E2E5EA] transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9]"
              >
                <span>연구 소개 읽기</span>
              </button>
            </div>

            {/* Clean Research Principles Overview (Desktop Left Column / Mobile Flow) */}
            <div className="pt-8 border-t border-[#E2E5EA]/70 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] md:text-[15px] text-[#17212B]/80">
              <div className="flex items-start gap-3">
                <Compass size={20} className="text-[#2855D9] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#17212B]">문제 정의 중심 연구</p>
                  <p className="text-[#17212B]/70 leading-[1.6]">구체적인 연구 질문과 가설에 입각한 비교 실험 설계</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileCheck size={20} className="text-[#2855D9] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#17212B]">재현 가능한 검증</p>
                  <p className="text-[#17212B]/70 leading-[1.6]">엄격한 대상자 분할, 외부 데이터 평가 및 한계 분석</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (on >= 1024px) / Below Text (on < 1024px): Research Hero Illustration */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-[16px] border border-[#E2E5EA] p-3 sm:p-4 shadow-2xs">
              <div className="rounded-[12px] overflow-hidden bg-[#F7F8FA] border border-[#E2E5EA]/60 flex items-center justify-center">
                <img
                  src="/images/research-hero.png"
                  alt="생체신호 파형과 유체 흐름을 표현한 추상 일러스트"
                  className="w-full h-auto object-contain block select-none"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="pt-3 px-1 text-center">
                <p className="text-[12px] sm:text-[13px] text-[#17212B]/60 font-medium">
                  생체신호 파형과 유체 흐름을 표현한 연구 개념 일러스트
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
