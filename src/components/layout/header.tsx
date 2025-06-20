"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 z-10 flex w-full items-center justify-center py-4">
      <div className="container flex h-full w-full items-center justify-between gap-4 px-4">
        <div className="">
          <Link href="/">
            <Button variant="outline" size="lg">
              <Image
                src="https://files.p0pa.de/api/public/dl/_Lj1QAm0?inline=true"
                alt="Logo"
                width={20}
                height={20}
                className="rounded-full"
              />
              Popa
            </Button>
          </Link>
        </div>
        <div className="h-0 w-full border-b border-dashed border-foreground/25" />
        <nav className="flex rounded-md backdrop-blur-sm">
          <Button
            size="icon"
            variant="outline"
            className={`
              size-10 backdrop-blur-none
              not-first:rounded-s-none not-first:border-s-0
              not-last:rounded-e-none not-last:border-e-0
            `}
            onClick={() => router.push("https://s.p0pa.de/gh")}
          >
            <Image
              draggable={false}
              className="dark:hidden"
              src="/assets/images/github.svg"
              alt="GitHub logo"
              width={17}
              height={17}
            />
            <Image
              draggable={false}
              className="hidden dark:inline-block"
              src="/assets/images/github_white.svg"
              alt="GitHub logo"
              width={17}
              height={17}
            />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className={`
              size-10 backdrop-blur-none
              not-first:rounded-s-none not-first:border-s-0
              not-last:rounded-e-none not-last:border-e-0
            `}
            onClick={() => router.push("https://s.p0pa.de/yt")}
          >
            <Image
              draggable={false}
              className="dark:hidden"
              src="/assets/images/youtube.svg"
              alt="YouTube logo"
              width={17}
              height={17}
            />
            <Image
              draggable={false}
              className="hidden dark:inline-block"
              src="/assets/images/youtube_white.svg"
              alt="YouTube logo"
              width={17}
              height={17}
            />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className={`
              size-10 backdrop-blur-none
              not-first:rounded-s-none not-first:border-s-0
              not-last:rounded-e-none not-last:border-e-0
            `}
            onClick={() => router.push("https://s.p0pa.de/spotify")}
          >
            <Image
              draggable={false}
              className="dark:hidden"
              src="/assets/images/spotify.svg"
              alt="Spotify logo"
              width={17}
              height={17}
            />
            <Image
              draggable={false}
              className="hidden dark:inline-block"
              src="/assets/images/spotify_white.svg"
              alt="Spotify l7go"
              width={17}
              height={17}
            />
          </Button>
        </nav>
      </div>
    </header>
  );
}
