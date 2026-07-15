import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV - Mohammed Aslam S",
  description: "Software Engineer | Blockchain & AI Specialist - View my CV",
};

export default function CVPage() {
  return (
    <main className="min-h-screen bg-background">
      <article className="notion-page">
        <div className="notion-page-icon">📄</div>
        <h1 className="text-[40px] leading-[1.2] font-bold tracking-tight text-foreground mt-6">
          Curriculum Vitae
        </h1>
        <p className="text-lg text-text-muted mt-2">
          Download or view my full CV below.
        </p>

        <hr className="notion-divider" />

        <div className="flex flex-wrap gap-3">
          <a
            href="/Mohammed_Aslam_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-foreground text-background rounded-md hover:opacity-80 transition-opacity"
          >
            Download CV
          </a>
          <a
            href="/Mohammed_Aslam_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-md hover:bg-hover transition-colors"
          >
            Open in New Tab
          </a>
        </div>
      </article>

      <div className="max-w-4xl mx-auto px-4 pb-24">
        <iframe
          src="/Mohammed_Aslam_CV.pdf"
          className="w-full h-[80vh] border border-border rounded-lg"
          title="Mohammed Aslam - CV"
        />
      </div>
    </main>
  );
}
