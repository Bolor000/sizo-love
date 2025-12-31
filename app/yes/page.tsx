"use client";

export default function Home() {
  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <div className="flex justify-center w-full px-6 pl-9">
        <img src="/happy.png" alt="shinee" className="h-auto" />
        <img src="/cute.png" alt="bidenhoyr" className="h-auto" />
        
      </div>
      <div className="text-xl md:text-2xl lg:text-4xl text-center px-6">
        Тиймээ, чи миний найз охин боллоо!
        <br />
        Баярлалаа ❤️ хайртай шүү 😍
      </div>

      <div className="flex justify-center w-full px-6 pl-9">
        <img src="/shinee.png" alt="shinee" className="h-auto" />
        <img src="/bidhoyr.png" alt="bidenhoyr" className="h-auto" />
        <img src="/malgai.png" alt="bi" className="h-auto" />
      </div>
    </div>
  );
}
