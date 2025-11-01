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
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-base text-white dark:text-gray-200 hover:text-[--secondary-color] dark:hover:text-[--secondary-color] hover:font-extrabold transition-all duration-200 bg-gray-800/90 dark:bg-gray-800/50 hover:bg-gray-800/90 dark:hover:bg-gray-900/70 rounded border-2 border-gray-500/40 dark:border-gray-700/50 hover:border-[--secondary-color]/50 shadow-sm hover:shadow-md"
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
