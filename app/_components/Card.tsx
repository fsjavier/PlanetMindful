// components/ui/card.tsx
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface CardHeaderProps {
  children: ReactNode;
}

interface CardTitleProps {
  children: ReactNode;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }: CardHeaderProps) {
  return <div className="mb-4">{children}</div>;
}

export function CardTitle({ children }: CardTitleProps) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={`${className}`}>{children}</div>;
}
