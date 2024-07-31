import { ReactElement, ReactNode } from "react";

interface PageHeaderProps {
  children: ReactNode;
}

export default function PageHeader({
  children,
}: PageHeaderProps): ReactElement {
  return (
    <h1 className="text-4xl col-span-1 md:col-span-2 lg:col-span-3 text-center">
      {children}
    </h1>
  );
}
