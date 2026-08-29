export function Footer() {
  return (
    <footer className="border-t border-hairline mt-section md:mt-section">
      <div className="mx-auto max-w-content px-6 md:px-container-pad py-12 md:py-16">
        <div className="flex flex-col gap-4 text-caption md:text-caption text-muted">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <a
              href="mailto:logan.c.parke@gmail.com"
              className="text-ink underline underline-offset-[3px] decoration-hairline hover:text-accent transition-colors duration-150"
            >
              logan.c.parke@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/logan-parke/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline transition-colors duration-150"
            >
              LinkedIn ↗
            </a>
          </div>
          <p className="text-small">
            © {new Date().getFullYear()} Logan Parke. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
