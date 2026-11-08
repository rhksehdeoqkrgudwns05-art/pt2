import React from 'react';
import { ACTIVITIES } from '../data/portfolioData';
import { GitFork, BookOpen } from 'lucide-react';

export const ActivitiesSection: React.FC = () => {
  const getActivityIcon = (id: string) => {
    switch (id) {
      case 'medical-ai-project':
        return <GitFork size={22} className="text-[#2855D9]" aria-hidden="true" />;
      case 'biomedical-study':
        return <BookOpen size={22} className="text-[#2855D9]" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <section id="activities" className="py-16 md:py-20 border-b border-[#E2E5EA]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="mb-8 md:mb-12">
          <div className="text-[13px] font-medium text-[#2855D9] tracking-wider uppercase mb-2">
            Academic Activities
          </div>
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#17212B] tracking-tight">
            활동 경험
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#17212B]/75 leading-[1.7] mt-2 max-w-2xl">
            가설 수립부터 파이프라인 구축, 논문 재현과 실패 원인 분석까지 이어진 연구 수행 경험입니다.
          </p>
        </div>

        {/* 2 Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACTIVITIES.map((activity) => (
            <article
              key={activity.id}
              className="bg-white rounded-[16px] border border-[#E2E5EA] p-6 md:p-8 flex flex-col justify-between transition-all hover:border-[#2855D9]/40"
            >
              <div>
                {/* Header row with editorial index and functional icon */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E2E5EA]/70">
                  <span className="text-[15px] font-mono font-semibold text-[#2855D9] tabular-nums">
                    {activity.index}
                  </span>
                  <div>{getActivityIcon(activity.id)}</div>
                </div>

                {/* Title */}
                <h3 className="text-[20px] md:text-[22px] font-bold text-[#17212B] tracking-tight mb-3">
                  {activity.title}
                </h3>

                {/* Role - clean unboxed typography */}
                <div className="mb-4 pb-4 border-b border-[#E2E5EA]/50">
                  <div className="text-[13px] font-medium text-[#17212B]/60 mb-0.5">
                    담당 역할
                  </div>
                  <div className="text-[16px] font-semibold text-[#2855D9]">
                    {activity.role}
                  </div>
                </div>

                {/* Content: 한 일 */}
                <div>
                  <div className="text-[13px] font-medium text-[#17212B]/60 mb-1.5">
                    주요 수행 내용
                  </div>
                  <p className="text-[15px] md:text-[16px] text-[#17212B]/85 leading-[1.7]">
                    {activity.description}
                  </p>
                </div>
              </div>

              {/* Research Footnote */}
              <div className="pt-6 mt-6 border-t border-[#E2E5EA]/50 text-[13px] text-[#17212B]/60">
                {activity.id === 'medical-ai-project' && '실험 재현성 및 파이프라인 모듈화'}
                {activity.id === 'biomedical-study' && '모델 가정 검증 및 재현 실패 사례 도출'}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
