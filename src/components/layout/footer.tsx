export function SiteFooter() {
  return (
    <footer className="border-grid h-15 border-t py-6 md:py-0">
      <div className="flex items-center justify-center">
        <div className="container py-4">
          <div
            className={`
              text-muted-foreground flex items-center justify-center text-sm leading-loose text-balance
              md:text-left
            `}
          >
            Made with 💙 by Popa
          </div>
        </div>
      </div>
    </footer>
  );
}
