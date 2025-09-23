import React from 'react'
import { useTranslations } from 'next-intl'

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
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-white dark:text-gray-400 hover:text-[--tertiary-color] dark:hover:text-[--tertiary-color] hover:font-extrabold transition-all duration-200 bg-gray-600/70 dark:bg-gray-800/50 hover:bg-gray-800/90 dark:hover:bg-gray-900/70 rounded-lg border-2 border-gray-500/40 dark:border-gray-700/50 hover:border-[--tertiary-color]/50 shadow-sm hover:shadow-md"
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
