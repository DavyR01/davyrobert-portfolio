'use client'

import React from 'react'
import iconColors from '@/utils/colors'

type IconDisplayProps = {
  icon: React.ReactNode
  label: string
  sizeClass: string
}

const IconDisplay: React.FC<IconDisplayProps> = ({ icon, label, sizeClass }) => {
  const lower = label.toLowerCase()
  const specialCases = ['vercel', 'symfony']

  if (specialCases.includes(lower)) {
    // return <span className={`${sizeClass} text-black dark:text-white`}>{icon}</span>
    return <span className={`${sizeClass}`}>{icon}</span>
  }

  return (
    <span className={sizeClass} style={{ color: (iconColors)[lower] || 'var(--primary-color)' }}>
      {icon}
    </span>
  )
}

export default IconDisplay


