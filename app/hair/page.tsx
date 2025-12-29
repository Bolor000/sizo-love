"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [open, setOpen] = useState(false);
  const { push } = useRouter();

  return (
    <div className="container">
      {!open && (
        <>
          <p className="hint">Зүрхэн дээр дараад үздэээ 🥰</p>
          <div className="heart" onClick={() => setOpen(true)}>
            ❤️
          </div>
        </>
      )}

      {open && (
        <div className="card">
          <h1>사랑하는 당신에게 바치는 마음의 말 ,</h1>
          <p>
            처음에는 이런 감정이 생길 줄 몰랐어요. 하지만 어느 순간부터 제 하루
            속에는 항상 당신이 있었습니다. 아침에 일어나도, 하루를 보내면서도,
            잠들기 전에도 자꾸만 당신 생각이 났어요. 당신과 함께 있을 때면
            마음이 편안해지고 작은 일에도 웃게 됩니다. 당신의 말 한마디, 미소
            하나가 저에게는 큰 힘이 됩니다. 이 감정을 더 이상 숨기고 싶지
            않았어요.
          </p>
          <p>
            처음에는 이런 감정이 생길 줄 몰랐어요. 하지만 어느 순간부터 제 하루
            속에는 항상 당신이 있었습니다. 아침에 일어나도, 하루를 보내면서도,
            잠들기 전에도 자꾸만 당신 생각이 났어요. 당신과 함께 있을 때면
            마음이 편안해지고 작은 일에도 웃게 됩니다. 당신의 말 한마디, 미소
            하나가 저에게는 큰 힘이 됩니다. 이 감정을 더 이상 숨기고 싶지
            않았어요. 그래서 용기를 내어 말하고 싶습니다. 저는 당신을
            좋아합니다. 아니, 사랑합니다. 앞으로 어떤 날들이 기다리고 있을지는
            모르지만 당신과 함께라면 어떤 순간도 소중할 것 같아요. 제 진심이
            당신에게 전해지기를 바랍니다.
          </p>

          <p className="sign">
            <br />
            사랑에서 ˚ʚ♡ɞ˚
          </p>

          <div className="video-container">
            <video width="100%" controls>
              <source src="/videos/miniLove.mp4" type="video/mp4" />
              Таны браузер видео тоглуулж чадахгүй байна.
            </video>
          </div>

          <div className="small-heart">❤️</div>
          <button
            onClick={() => push("/last")}
            className="flex pl-70 text-pink-950"
          >
            ｡ﾟﾟ･｡･ﾟﾟ｡ ﾟ。 энд дараарай
          </button>
        </div>
      )}

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: "Georgia", serif;
          padding: 20px;
        }

        .hint {
          margin-bottom: 20px;
          color: #f3cbd6;
        }

        .heart {
          font-size: 60px;
          cursor: pointer;
          animation: beat 1.5s infinite ease-in-out;
        }

        @keyframes beat {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
          }
        }

        .card {
          background: #fdf2f5;
          color: #5a1025;
          padding: 40px;
          max-width: 600px;
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
          animation: fadeIn 0.8s ease;
        }

        .card h1 {
          margin-bottom: 20px;
          color: #7b1e3a;
          font-size: 28px;
        }

        .card p {
          margin-bottom: 15px;
          line-height: 1.6;
          font-size: 16px;
        }

        .sign {
          margin-top: 20px;
          font-style: italic;
        }

        .small-heart {
          text-align: center;
          font-size: 32px;
          margin-top: 20px;
        }

        .video-container {
          margin-top: 20px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .card {
            padding: 25px;
          }

          .card h1 {
            font-size: 22px;
          }

          .card p {
            font-size: 14px;
          }

          .heart {
            font-size: 50px;
          }

          .small-heart {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .card {
            padding: 20px;
          }

          .card h1 {
            font-size: 18px;
          }

          .card p {
            font-size: 13px;
          }

          .heart {
            font-size: 40px;
          }

          .small-heart {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}
