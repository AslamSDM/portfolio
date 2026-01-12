import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV - Mohammed Aslam S",
  description: "Software Engineer | Blockchain & AI Specialist - View my CV",
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background">
      <iframe
        src="/Mohammed_Aslam_CV.pdf"
        className="w-full h-screen"
        title="Mohammed Aslam - CV"
      />
    </div>
  );
}
