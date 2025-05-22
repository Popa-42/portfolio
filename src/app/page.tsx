export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4">
      <h1
        className={`
          flex items-center justify-center gap-4 transition-all duration-300 text-shadow-black/15 text-shadow-md
          hover:scale-105 hover:text-shadow-lg
          dark:text-shadow-white/10
        `}
      >
        Hey there
      </h1>
      <p>My website is still under construction.</p>
      <div className="text-muted-foreground text-xs">I am working on its completion, so please be patient.</div>
    </div>
  );
}
