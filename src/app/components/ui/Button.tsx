import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  download?: boolean;
  type?: "button" | "submit" | "reset";
  withShineEffect?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  download,
  type = "button",
  withShineEffect = false,
  fullWidth = true,
}: ButtonProps) {
  const baseClasses = "font-semibold py-2.5 px-6 text-lg rounded-lg transition-all hover:scale-105 border-2 border-transparent break-words text-center";
  const widthClasses = fullWidth ? "w-full sm:w-auto" : "w-auto";
  
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary"
  };

  const finalClassName = `${baseClasses} ${widthClasses} ${variantClasses[variant]} ${className}`;

  const renderContent = () => {
    if (variant === "secondary") {
      return (
        <>
          <span className="relative z-10">{children}</span>
          {withShineEffect && (
            <span
              className="absolute left-[-75%] top-0 w-[80%] h-full bg-gradient-to-r from-transparent via-white/90 to-transparent opacity-80 blur-[1px] animate-shine pointer-events-none"
              aria-hidden="true"
            />
          )}
        </>
      );
    }
    return children;
  };

  // Si c'est un lien
  if (href) {
    return (
      <Link href={href} className={finalClassName} download={download}>
        {renderContent()}
      </Link>
    );
  }

  // Si c'est un bouton
  return (
    <button type={type} onClick={onClick} className={finalClassName}>
      {renderContent()}
    </button>
  );
}
