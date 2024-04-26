import { ReactNode } from "react";
import PageContainer from "../components/PageContainer";

interface FormPageLayoutProps {
  children?: ReactNode;
  progress: number;
}

export default function FormPageLayout({
  children,
  progress,
}: FormPageLayoutProps) {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] w-full flex-col items-center">
      <progress
        className="progress progress-primary my-8 w-56"
        value={progress}
        max="100"
      ></progress>
      <PageContainer>{children}</PageContainer>
    </div>
  );
}
