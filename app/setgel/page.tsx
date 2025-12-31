"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <div className="text-xl md:text-2xl lg:text-4xl text-center px-6">
        Шинэ он гарлаа, би чамд сэтгэлийн үгүүдээ хэлэх гээд
      </div>

      <div className="w-50 md:w-56 lg:w-64">
        <img
          src="/bearish.gif"
          alt="Bearish"
          className="w-full h-auto"
        />
      </div>

      <button
        onClick={() => push("/hair")}
        className="px-6 py-3 rounded-full bg-[#7b1e3a] text-white font-semibold hover:scale-105 transition"
      >
        ❤️ Heart
      </button>

      <div className="text-center opacity-80">
        зүрхэн дээр дарж миний сэтгэлийг уншаарай
      </div>
    </div>
  );
}
