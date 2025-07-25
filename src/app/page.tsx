'use client'

import React, { Suspense } from "react";
import HomeContent from "./HomeContent";


export default function Home() {
  return (
    <main className="flex-1 px-2 sm:px-8 pb-20 gap-16 font-grotesk font-[800] dark:bg-[var(--bg-dark)] dark:text-[var(--text-color-light)] text-[var(--text-color-dark)]">
      <Suspense fallback={<div>Chargement...</div>}>
        <HomeContent />
      </Suspense>
    </main>
  );
}