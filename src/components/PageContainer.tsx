import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="h-[calc(100vh - 4rem)] flex w-full flex-col items-center justify-center px-4 md:px-8">
      {children}
    </div>
  );
}
