"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <div className="text-xl md:text-2xl lg:text-4xl text-center">
        Тиймээ, чи миний найз охин боллоо!<br />
        Баярлалаа ❤️, хайртай шүү 😍</div>
      <div className="w-80 md:w-86 lg:w-84">
        <div
          className="tenor-gif-embed"
          data-postid="1106600649183018975"
          data-share-method="host"
          data-aspect-ratio="1.20979"
          data-width="100%"
        >
          <a href="https://tenor.com/view/cinamoroll-gif-1106600649183018975">
            Cinamoroll Sticker
          </a>
          from{" "}
        </div>{" "}
      </div>
      <script
        type="text/javascript"
        async
        src="https://tenor.com/embed.js"
      ></script>
    </div>
  );
}
