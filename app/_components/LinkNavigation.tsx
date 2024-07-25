import Link from "next/link";
import { ReactNode } from "react";

interface LinkNavigationProps {
  to: string;
  onClickHandler?: () => void;
  children: ReactNode;
}

export default function LinkNavigation({
  to,
  onClickHandler,
  children,
}: LinkNavigationProps) {
  return (
    <Link
      href={to}
      className="text-lg font-medium hover:text-primary-500"
      onClick={onClickHandler}
    >
      {children}
    </Link>
  );
}
