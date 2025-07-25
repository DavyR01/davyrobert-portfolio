"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-screen bg-[#e6e458] flex flex-col items-center justify-center overflow-hidden perspective-[1200px] text-[#fafafa]">
      {/* Ombre derrière le 404 */}
      <span
        className="absolute z-0 text-[clamp(5rem,40vmin,20rem)] font-extrabold blur-[1.5vmin] scale-[1.05] tracking-[1rem] translate-y-[12%] select-none"
        style={{
          color: "#000",
          transform:
            "scale(1.05) translateY(12%) translate3d(0, 0, -10vmin)",
          animation: "swing 2s infinite alternate ease-in-out",
        }}
      >
        404
      </span>

      {/* Texte principal */}
      <h1
        className="relative z-10 text-[clamp(5rem,40vmin,20rem)] font-extrabold tracking-[1rem] bg-clip-text text-transparent select-none"
        style={{
          animation: "swing 2s infinite alternate ease-in-out",
        }}
      >
        404
      </h1>

      {/* Cloak / Halo sombre animé */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[250vmax] w-[250vmax] -translate-x-1/2 -translate-y-1/2">
          <div
            className="h-full w-full origin-[50%_30%]"
            style={{
              background:
                "radial-gradient(40% 40% at 50% 42%, transparent, #000 35%)",
              transform: "rotate(calc(var(--swing-x, 0) * -0.25deg))",
              animation: "swing 2s infinite alternate-reverse ease-in-out",
            }}
          />
        </div>
      </div>

      {/* Texte d'explication + bouton */}
      <div className="relative z-10 text-center px-4 mt-6 max-w-[90vw] text-[#fafafa]">
        <h3 className="text-2xl font-semibold text-[#e6e6e6] mb-2">
          We can’t find that page
        </h3>
        <p className="mb-10 text-[#fafafa]">
          We’re fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on its behalf.
        </p>

        <Link
          href="/"
          className="inline-block px-8 py-3 uppercase tracking-wide text-sm font-medium bg-[#7a7a7a] text-[#0a0a0a] hover:bg-[#fafafa] hover:text-black transition"
        >
          Home
        </Link>
      </div>

      {/* Styles CSS pour animations et variables */}
      <style jsx>{`
        :root {
          --swing-x: 0;
          --swing-y: 0;
        }

        @property --swing-x {
          syntax: "<integer>";
          inherits: false;
          initial-value: 0;
        }

        @property --swing-y {
          syntax: "<integer>";
          inherits: false;
          initial-value: 0;
        }

        @keyframes swing {
          0% {
            --swing-x: -100;
            --swing-y: -100;
          }
          50% {
            --swing-y: 0;
          }
          100% {
            --swing-y: -100;
            --swing-x: 100;
          }
        }
      `}</style>
    </section>
  );
}
