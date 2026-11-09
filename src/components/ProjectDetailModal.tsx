import React, { useEffect } from 'react';
import {
  X,
  HelpCircle,
  UserCheck,
  Cpu,
  CheckCircle,
  FileText,
  AlertCircle,
  Target,
  Sparkles,
  Database,
  ExternalLink,
  Github
} from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#17212B]/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-3xl max-h-[90vh] rounded-[16px] border border-[#E2E5EA] shadow-xl flex flex-col overflow-hidden"
      >
        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-[#E2E5EA] flex items-start justify-between gap-4 bg-[#F7F8FA]/50">
          <div>
            <div className="text-[13px] font-semibold text-[#2855D9] uppercase tracking-wider mb-1.5">
              {project.category}
            </div>
            <h3 id="modal-project-title" className="text-[22px] md:text-[26px] font-bold text-[#17212B] tracking-tight">
              {project.title}
            </h3>
            <p className="text-[15px] md:text-[16px] text-[#17212B]/80 mt-1.5 leading-[1.6]">
              {project.shortDescription}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-[8px] border border-[#E2E5EA] bg-white text-[#17212B]/80 hover:text-[#17212B] hover:bg-[#F7F8FA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 text-[15px] md:text-[16px] leading-[1.7] text-[#17212B]/90">
          {project.projectType === 'web' ? (
            /* Web Project Detailed Sections */
            <>
              {/* Quick Action Links for Web Project */}
              <div className="p-4 rounded-[12px] bg-[#F7F8FA] border border-[#E2E5EA] flex flex-wrap items-center justify-between gap-3">
                <span className="text-[14px] font-semibold text-[#17212B]">
                  프로젝트 링크 바로가기
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-4 py-2 bg-[#0F766E] hover:bg-[#115E59] text-white text-[14px] font-medium rounded-[8px] transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-offset-2"
                  >
                    <span>사이트 보기</span>
                    <ExternalLink size={15} aria-hidden="true" />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-4 py-2 bg-white hover:bg-[#F2F4F8] text-[#17212B] text-[14px] font-medium rounded-[8px] border border-[#E2E5EA] transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9]"
                  >
                    <Github size={15} aria-hidden="true" />
                    <span>코드 보기</span>
                  </a>
                </div>
              </div>

              {/* 1. 제작 목적 */}
              <section className="space-y-2">
                <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                  <Target size={18} className="text-[#2855D9]" aria-hidden="true" />
                  <h4>제작 목적</h4>
                </div>
                <div className="p-4 rounded-[8px] bg-[#F7F8FA] border border-[#E2E5EA] text-[#17212B] font-medium leading-[1.7]">
                  {project.purpose}
                </div>
              </section>

              {/* 2. 주요 기능 */}
              <section className="space-y-2">
                <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                  <Sparkles size={18} className="text-[#2855D9]" aria-hidden="true" />
                  <h4>주요 기능</h4>
                </div>
                <p className="text-[#17212B]/85">{project.features}</p>
              </section>

              {/* 3. 제작 과정과 역할 */}
              <section className="space-y-2">
                <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                  <UserCheck size={18} className="text-[#2855D9]" aria-hidden="true" />
                  <h4>제작 과정과 역할</h4>
                </div>
                <p className="text-[#17212B]/85">{project.processAndRole}</p>
              </section>

              {/* 4. 현재 범위 */}
              <section className="space-y-2">
                <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                  <Database size={18} className="text-[#2855D9]" aria-hidden="true" />
                  <h4>현재 범위</h4>
                </div>
                <div className="p-4 rounded-[8px] bg-[#F7F8FA] border border-[#E2E5EA] text-[#17212B]/90 leading-[1.7]">
                  {project.scopeAndStorage}
                </div>
              </section>
            </>
          ) : (
            /* Research Project Detailed Sections */
            <>
              {/* 1. 연구 질문 */}
              <section className="space-y-2">
                <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                  <HelpCircle size={18} className="text-[#2855D9]" aria-hidden="true" />
                  <h4>연구 질문</h4>
                </div>
                <div className="p-4 rounded-[8px] bg-[#F7F8FA] border border-[#E2E5EA] text-[#17212B] font-medium leading-[1.7]">
                  {project.researchQuestion}
                </div>
              </section>

              {/* 2. 담당 역할 */}
              <section className="space-y-2">
                <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                  <UserCheck size={18} className="text-[#2855D9]" aria-hidden="true" />
                  <h4>담당 역할</h4>
                </div>
                <p className="text-[#17212B]/85">{project.role}</p>
              </section>

              {/* 3. 연구 방법 */}
              <section className="space-y-2">
                <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                  <Cpu size={18} className="text-[#2855D9]" aria-hidden="true" />
                  <h4>연구 방법</h4>
                </div>
                <p className="text-[#17212B]/85">{project.methodology}</p>
              </section>

              {/* 4. 검증 과정 */}
              <section className="space-y-2">
                <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                  <CheckCircle size={18} className="text-[#2855D9]" aria-hidden="true" />
                  <h4>검증 과정</h4>
                </div>
                <p className="text-[#17212B]/85">{project.verification}</p>
              </section>

              {/* 5. 산출물 */}
              <section className="space-y-2">
                <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                  <FileText size={18} className="text-[#2855D9]" aria-hidden="true" />
                  <h4>산출물</h4>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {project.deliverables.map((item, i) => (
                    <li
                      key={i}
                      className="px-3.5 py-2.5 rounded-[8px] bg-[#F7F8FA] border border-[#E2E5EA] text-[14px] md:text-[15px] font-medium text-[#17212B] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2855D9] shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 6. 배운 점과 한계 */}
              <section className="space-y-2">
                <div className="flex items-center gap-2 text-[16px] md:text-[17px] font-bold text-[#17212B]">
                  <AlertCircle size={18} className="text-[#2855D9]" aria-hidden="true" />
                  <h4>배운 점과 한계</h4>
                </div>
                <div className="p-4 rounded-[8px] bg-[#F7F8FA] border border-[#E2E5EA] text-[#17212B]/90 leading-[1.7]">
                  {project.learningsAndLimitations}
                </div>
              </section>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 md:p-6 border-t border-[#E2E5EA] flex items-center justify-between gap-3 bg-[#F7F8FA]/30">
          {project.projectType === 'web' ? (
            <div className="flex items-center gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-medium text-[#0F766E] hover:text-[#115E59] flex items-center gap-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded"
              >
                <span>웹앱 열기</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ) : (
            <div />
          )}

          <button
            type="button"
            onClick={onClose}
            className="min-h-[48px] px-6 bg-[#2855D9] hover:bg-[#1E44B8] text-white font-medium rounded-[8px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2855D9]"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
