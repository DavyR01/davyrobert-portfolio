import React from 'react';

export function Favicons() {
  return (
    <>
      {/* Favicons adaptatifs selon le thème du système */}
      <link
        rel="icon"
        type="image/png"
        href="/assets/logos/davy-logo-black-trans.png"
        media="(prefers-color-scheme: light)"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/assets/logos/davy-logo-white-trans.png"
        media="(prefers-color-scheme: dark)"
        sizes="32x32"
      />
      
      {/* Pour les appareils Apple */}
      <link 
        rel="apple-touch-icon" 
        sizes="180x180" 
        href="/assets/logos/davy-logo-black-trans.png" 
      />
      
      {/* Pour les appareils Android et Chrome */}
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Paramètres de cache pour forcer le rafraîchissement */}
      <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />
      
      {/* Lien vers la feuille de style des icônes Devicon */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />
    </>
  );
}
