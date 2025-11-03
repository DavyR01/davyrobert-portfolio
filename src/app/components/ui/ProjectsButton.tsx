import { useTranslations } from 'next-intl';
import React from 'react';

const ProjectsButton = () => {
    const t = useTranslations('presentation');
    return (
        <div className="w-full">
            {/* Button projects redirection */}
          <button
             onClick={() => {
                const projectsSection = document.getElementById('projets');
                if (projectsSection) {
                   projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
             }}
             className="w-full flex items-center justify-center gap-2 px-4 py-2 text-base font-medium transition-all duration-200 rounded border-[2.5px] shadow-sm hover:bg-[--bg-project-button] border-[--border-project-button] text-[--text-project-button] hover:shadow-md hover:text-[--primary-color] hover:font-bold hover:border-[--primary-color]"
          >
                <span>{t('viewProjects')}</span>
                <svg className="w-4 h-4 -ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 19l-7-7 7-7" />
                </svg>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}

export default ProjectsButton
