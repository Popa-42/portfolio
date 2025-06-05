import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-background h-fit min-h-15 w-full border-t py-6 md:py-0">
      <div className="flex h-full min-h-15 items-center justify-center">
        <div className="container px-4">
          <div
            className={`
              text-muted-foreground grid items-center gap-2 text-sm leading-loose text-balance
              md:grid-cols-3 md:text-left
            `}
          >
            <span className="text-center md:text-start">
              © {new Date().getFullYear()} Popa-42. All rights reserved.
            </span>
            <span className="text-center">
              Made with 💜 by <Link href="/">Popa</Link>.
            </span>
            <span className="space-x-2 text-center md:text-end">
              <Link href="https://github.com/Popa-42" target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
              <span>|</span>
              <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                Useless link
              </Link>
              <span>|</span>
              <Link href="https://example.org" target="_blank" rel="noopener noreferrer">
                Another one
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
