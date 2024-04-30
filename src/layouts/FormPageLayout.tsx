import { ReactNode } from "react";
import PageContainer from "../components/PageContainer";
import Hints from "../components/Hints";
import { useLocation } from "react-router-dom";

interface FormPageLayoutProps {
  children?: ReactNode;
  progress: number;
}

export default function FormPageLayout({
  children,
  progress,
}: FormPageLayoutProps) {
  const location = useLocation();
  return (
    <>
      <div className="flex min-h-[calc(100vh-5rem)] w-full flex-col items-center">
        <progress
          className="progress progress-primary my-4 w-56 md:my-8"
          value={progress}
          max="100"
        ></progress>
        <PageContainer>{children}</PageContainer>
      </div>
      {location.pathname !== "/form10" && <Hints />}
    </>
  );
}
