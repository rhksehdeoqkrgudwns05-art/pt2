import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioProject } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import {
  ChevronDown,
  ChevronUp,
  Maximize2,
  HelpCircle,
  Cpu,
  CheckCircle,
  FileText,
  AlertCircle,
  UserCheck,
  ExternalLink,
  Github,
  Target,
  Sparkles,
  Database
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  // Store expanded state for each project ID
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'ecg-ssl': true, // Expanded by default so the user sees the rich structure immediately
    'pinn-blood-flow': false,
    'study-quiz-helper': true
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<PortfolioProject | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleExpandAll = () => {
    const next: Record<string, boolean> = {};
    PORTFOLIO_PROJECTS.forEach((p) => {
      next[p.id] = true;
    });
    setExpandedIds(next);
  };

  const handleCollapseAll = () => {
    const next: Record<string, boolean> = {};
    PORTFOLIO_PROJECTS.forEach((p) => {
      next[p.id] = false;
    });
    setExpandedIds(next);
  };

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'bio') return proj.id === 'ecg-ssl';
    if (activeCategory === 'physics') return proj.id === 'pinn-blood-flow';
    if (activeCategory === 'web') return proj.id === 'study-quiz-helper';
    return true;
  });

  const allExpanded = PORTFOLIO_PROJECTS.every((p) => expandedIds[p.id]);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-[#E2E5EA]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <div className="text-[13px] font-medium text-[#2855D9] tracking-wider uppercase mb-2">
            Research & Web Projects
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-[28px] md:text-[32px] font-bold text-[#17212B] tracking-tight">
                연구 및 개발 프로젝트
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#17212B]/75 leading-[1.7] mt-2 max-w-2xl">
                가설 수립과 실험 설계를 거친 의공학 연구 프로젝트부터, 학습 경험을 돕는 웹 애플리케이션 개발까지의 프로젝트 모음입니다.
              </p>
            </div>

            {/* Quick Action: Expand/Collapse All */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={allExpanded ? handleCollapseAll : handleExpandAll}
                className="min-h-[44px] px-4 rounded-[8px] border border-[#E2E5EA] bg-white text-[14px] font-medium text-[#17212B] hover:bg-[#F2F4F8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9]"
              >
                {allExpanded ? '모든 프로젝트 접기' : '모든 프로젝트 펼치기'}
              </button>
            </div>
          </div>
        </div>

        {/* Filter Controls (Segmented Tabs with functional click handlers) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-white border border-[#E2E5EA] rounded-[10px] w-fit">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`min-h-[40px] px-4 text-[14px] font-medium rounded-[8px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9] ${
              activeCategory === 'all'
                ? 'bg-[#2855D9] text-white shadow-xs'
                : 'text-[#17212B]/75 hover:text-[#17212B] hover:bg-[#F7F8FA]'
            }`}
          >
            전체 프로젝트 (3)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('bio')}
            className={`min-h-[40px] px-4 text-[14px] font-medium rounded-[8px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9] ${
              activeCategory === 'bio'
                ? 'bg-[#2855D9] text-white shadow-xs'
                : 'text-[#17212B]/75 hover:text-[#17212B] hover:bg-[#F7F8FA]'
            }`}
          >
            생체신호 AI (1)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('physics')}
            className={`min-h-[40px] px-4 text-[14px] font-medium rounded-[8px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9] ${
              activeCategory === 'physics'
                ? 'bg-[#2855D9] text-white shadow-xs'
                : 'text-[#17212B]/75 hover:text-[#17212B] hover:bg-[#F7F8FA]'
            }`}
          >
            물리 기반 의료 모델링 (1)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('web')}
            className={`min-h-[40px] px-4 text-[14px] font-medium rounded-[8px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9] ${
              activeCategory === 'web'
                ? 'bg-[#2855D9] text-white shadow-xs'
                : 'text-[#17212B]/75 hover:text-[#17212B] hover:bg-[#F7F8FA]'
            }`}
          >
            학습 도구 / 웹 (1)
          </button>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {filteredProjects.map((project) => {
            const isExpanded = !!expandedIds[project.id];
            const isWeb = project.projectType === 'web';

            return (
              <article
                key={project.id}
                className="bg-white rounded-[16px] border border-[#E2E5EA] overflow-hidden project-card-interactive"
              >
                {/* Project Card Summary Area (항상 표시: 제목, 짧은 설명, 담당 역할) */}
                <div className="p-6 md:p-8">
                  {/* Category tag - clean unboxed typography */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[13px] font-semibold text-[#2855D9] uppercase tracking-wider">
                      {project.category}
                    </span>
                    {isWeb && (
                      <span className="text-[12px] font-medium text-[#0F766E] bg-[#F0FDFA] px-2.5 py-0.5 rounded-[6px] border border-[#CCFBF1]">
                        공개 웹앱
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] md:text-[26px] font-bold text-[#17212B] tracking-tight mb-3">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-[16px] md:text-[18px] text-[#17212B]/85 leading-[1.7] mb-6">
                    {project.shortDescription}
                  </p>

                  {/* Summary Details: Role summary */}
                  <div className="p-4 md:p-5 rounded-[8px] bg-[#F7F8FA] border border-[#E2E5EA] mb-6">
                    <div className="text-[13px] font-semibold text-[#17212B]/60 mb-1 flex items-center gap-1.5">
                      <UserCheck size={16} className="text-[#2855D9]" aria-hidden="true" />
                      <span>{isWeb ? '제작 과정 및 역할' : '담당 역할'}</span>
                    </div>
                    <p className="text-[15px] md:text-[16px] font-medium text-[#17212B] leading-[1.7]">
                      {project.role}
                    </p>
                  </div>

                  {/* Action Buttons: Min-height 48px, border-radius 8px */}
                  <div className="flex flex-wrap items-center gap-3">
                    {/* For web project: dedicated Site & Code links */}
                    {isWeb && (
                      <>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[48px] px-5 py-2.5 rounded-[8px] font-medium text-[15px] flex items-center gap-2 transition-colors bg-[#0F766E] hover:bg-[#115E59] text-white shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2 whitespace-nowrap"
                        >
                          <span>사이트 보기</span>
                          <ExternalLink size={16} aria-hidden="true" />
                        </a>

                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[48px] px-5 py-2.5 rounded-[8px] font-medium text-[15px] flex items-center gap-2 transition-colors border border-[#E2E5EA] bg-white hover:bg-[#F2F4F8] text-[#17212B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9] whitespace-nowrap"
                        >
                          <Github size={16} aria-hidden="true" />
                          <span>코드 보기</span>
                        </a>
                      </>
                    )}

                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      aria-expanded={isExpanded}
                      className="min-h-[48px] px-5 py-2.5 rounded-[8px] font-medium text-[15px] flex items-center gap-2 transition-colors border border-[#E2E5EA] bg-white hover:bg-[#F2F4F8] text-[#17212B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9] whitespace-nowrap"
                    >
                      <span>{isExpanded ? '상세 설명 닫기' : '상세 설명 보기'}</span>
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedProjectForModal(project)}
                      className="min-h-[48px] px-5 py-2.5 rounded-[8px] font-medium text-[15px] flex items-center gap-2 transition-colors bg-[#2855D9] hover:bg-[#1E44B8] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9] focus-visible:ring-offset-2 whitespace-nowrap"
                    >
                      <Maximize2 size={16} aria-hidden="true" />
                      <span>전체 화면으로 읽기</span>
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed Sections */}
                {isExpanded && (
                  <div className="border-t border-[#E2E5EA] bg-[#FAFBFC] p-6 md:p-8 space-y-8 animate-in fade-in duration-200">
                    <div className="text-[14px] font-bold text-[#17212B] pb-2 border-b border-[#E2E5EA]/70 flex items-center justify-between">
                      <span>{isWeb ? '프로젝트 상세 설명 및 기능 안내' : '연구 상세 설명 및 검증 보고'}</span>
                      <span className="text-[13px] font-normal text-[#17212B]/60">전체 내용 보존</span>
                    </div>

                    {isWeb ? (
                      /* Web Project Detail Breakdown */
                      <>
                        {/* 1. 제작 목적 */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                            <Target size={18} className="text-[#2855D9]" aria-hidden="true" />
                            <h4>제작 목적</h4>
                          </div>
                          <div className="p-4 md:p-5 rounded-[8px] bg-white border border-[#E2E5EA] text-[#17212B] font-medium text-[15px] md:text-[16px] leading-[1.7]">
                            {project.purpose}
                          </div>
                        </div>

                        {/* 2. 주요 기능 */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                            <Sparkles size={18} className="text-[#2855D9]" aria-hidden="true" />
                            <h4>주요 기능</h4>
                          </div>
                          <div className="p-4 md:p-5 rounded-[8px] bg-white border border-[#E2E5EA] text-[#17212B]/90 text-[15px] md:text-[16px] leading-[1.7]">
                            {project.features}
                          </div>
                        </div>

                        {/* 3. 제작 과정과 역할 */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                            <UserCheck size={18} className="text-[#2855D9]" aria-hidden="true" />
                            <h4>제작 과정과 역할</h4>
                          </div>
                          <div className="p-4 md:p-5 rounded-[8px] bg-white border border-[#E2E5EA] text-[#17212B]/90 text-[15px] md:text-[16px] leading-[1.7]">
                            {project.processAndRole}
                          </div>
                        </div>

                        {/* 4. 현재 범위 및 저장 방식 */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                            <Database size={18} className="text-[#2855D9]" aria-hidden="true" />
                            <h4>현재 범위 및 저장 방식</h4>
                          </div>
                          <div className="p-4 md:p-5 rounded-[8px] bg-white border border-[#E2E5EA] text-[#17212B]/90 text-[15px] md:text-[16px] leading-[1.7]">
                            {project.scopeAndStorage}
                          </div>
                        </div>
                      </>
                    ) : (
                      /* Research Project Detail Breakdown */
                      <>
                        {/* 1. 연구 질문 */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                            <HelpCircle size={18} className="text-[#2855D9]" aria-hidden="true" />
                            <h4>연구 질문</h4>
                          </div>
                          <div className="p-4 md:p-5 rounded-[8px] bg-white border border-[#E2E5EA] text-[#17212B] font-medium text-[15px] md:text-[16px] leading-[1.7]">
                            {project.researchQuestion}
                          </div>
                        </div>

                        {/* 2. 연구 방법 */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                            <Cpu size={18} className="text-[#2855D9]" aria-hidden="true" />
                            <h4>연구 방법</h4>
                          </div>
                          <div className="p-4 md:p-5 rounded-[8px] bg-white border border-[#E2E5EA] text-[#17212B]/90 text-[15px] md:text-[16px] leading-[1.7]">
                            {project.methodology}
                          </div>
                        </div>

                        {/* 3. 검증 과정 */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                            <CheckCircle size={18} className="text-[#2855D9]" aria-hidden="true" />
                            <h4>검증 과정</h4>
                          </div>
                          <div className="p-4 md:p-5 rounded-[8px] bg-white border border-[#E2E5EA] text-[#17212B]/90 text-[15px] md:text-[16px] leading-[1.7]">
                            {project.verification}
                          </div>
                        </div>

                        {/* 4. 산출물 */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                            <FileText size={18} className="text-[#2855D9]" aria-hidden="true" />
                            <h4>산출물</h4>
                          </div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1">
                            {project.deliverables.map((item, idx) => (
                              <li
                                key={idx}
                                className="p-3.5 rounded-[8px] bg-white border border-[#E2E5EA] text-[14px] md:text-[15px] font-medium text-[#17212B] flex items-center gap-2 shadow-2xs"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2855D9] shrink-0" aria-hidden="true" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 5. 배운 점과 한계 */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                            <AlertCircle size={18} className="text-[#2855D9]" aria-hidden="true" />
                            <h4>배운 점과 한계</h4>
                          </div>
                          <div className="p-4 md:p-5 rounded-[8px] bg-white border border-[#E2E5EA] text-[#17212B]/90 text-[15px] md:text-[16px] leading-[1.7]">
                            {project.learningsAndLimitations}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Bottom collapse button for convenient navigation */}
                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={() => toggleExpand(project.id)}
                        className="text-[14px] font-medium text-[#2855D9] hover:text-[#1E44B8] flex items-center gap-1.5 py-1 px-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9]"
                      >
                        <ChevronUp size={16} />
                        <span>상세 내용 접기</span>
                      </button>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* Full Modal Reader */}
      <ProjectDetailModal
        project={selectedProjectForModal}
        onClose={() => setSelectedProjectForModal(null)}
      />
    </section>
  );
};
