import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="flex min-h-[calc(100vh-2rem)] w-full grow flex-col items-center justify-center px-8">
      {children}
    </div>
  );
}
