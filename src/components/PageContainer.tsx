import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="flex min-h-[calc(100vh-9rem)] w-full flex-col items-center justify-center px-4 md:px-8">
      {children}
    </div>
  );
}
