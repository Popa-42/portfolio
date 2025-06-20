import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className={`
        fixed top-0 left-0 flex h-16 w-full items-center justify-between border-b border-border bg-background/90 px-4
        backdrop-blur-lg
      `}
    >
      <div className="text-xl font-semibold">Popa&apos;s Website</div>
      <nav className="flex">
        <Link href="https://s.p0pa.de/gh">
          <Button size="icon" variant="ghost">
            <Image className="dark:hidden" src="/assets/images/github.svg" alt="GitHub logo" width={16} height={16} />
            <Image
              className="hidden dark:inline-block"
              src="/assets/images/github_white.svg"
              alt="GitHub logo"
              width={16}
              height={16}
            />
          </Button>
        </Link>
        <Link href="https://s.p0pa.de/yt">
          <Button size="icon" variant="ghost" className="text-foreground">
            <Image className="dark:hidden" src="/assets/images/youtube.svg" alt="YouTube logo" width={16} height={16} />
            <Image
              className="hidden dark:inline-block"
              src="/assets/images/youtube_white.svg"
              alt="YouTube logo"
              width={16}
              height={16}
            />
          </Button>
        </Link>
        <Link href="https://s.p0pa.de/spotify">
          <Button size="icon" variant="ghost" className="text-foreground">
            <Image className="dark:hidden" src="/assets/images/spotify.svg" alt="Spotify logo" width={16} height={16} />
            <Image
              className="hidden dark:inline-block"
              src="/assets/images/spotify_white.svg"
              alt="Spotify logo"
              width={16}
              height={16}
            />
          </Button>
        </Link>
      </nav>
    </header>
  );
}
