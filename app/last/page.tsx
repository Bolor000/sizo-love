"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [yesSize, setYesSize] = useState(1);
  const [noCount, setNoCount] = useState(0);
   const router = useRouter();

  const yesClick = () => {
    router.push("/yes"); 
  };

  const noClick = () => {
    if (noCount < 3) {
      setYesSize((prev) => prev + 0.5); 
      setNoCount((prev) => prev + 1);
    }
  };

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center", color: "white" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "70px" }}>
          <span style={{ opacity: 0.7 }}>私の彼女になってくれますか？</span>
        </h1>

        <div style={{ marginBottom: "30px"}}>
          <button
            onClick={yesClick}
            style={{
              fontSize: "24px",
              padding: "15px 40px",
              margin: "10px",
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#7b2c3b",
              color: "white",
              cursor: "pointer",
              transform: `scale(${yesSize})`,
              transition: "transform 0.3s ease",
            }}
          >
            YES!
          </button>

          {noCount < 3 && (
            <button
              onClick={noClick}
              style={{
                fontSize: "24px",
                padding: "15px 40px",
                margin: "10px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#d63b3b",
                color: "white",
                cursor: "pointer",
              }}
            >
              no.
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
