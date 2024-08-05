import Link from "next/link";
import { ReactNode } from "react";

interface LinkNavigationProps {
  to: string;
  onClickHandler?: () => void;
  className?: string;
  children: ReactNode;
}

export default function LinkNavigation({
  to,
  onClickHandler,
  className,
  children,
}: LinkNavigationProps) {
  return (
    <Link
      href={to}
      className={`text-lg font-medium hover:text-primary-500 ${className}`}
      onClick={onClickHandler}
    >
      {children}
    </Link>
  );
}
