"use client";

export default function Page() {
  const yesClick = () => {
    alert("Yay! 💖🥰");
  };

  const noClick = () => {
    alert("😢 Try again...");
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
        <h1 style={{ fontSize: "42px", marginBottom: "30px" }}>
          <span style={{ opacity: 0.7 }}>私の彼女になってくれますか？</span>
        </h1>

        <div style={{ marginBottom: "30px" }}>
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
            }}
          >
            YES!
          </button>

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
        </div>

        <img
          src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
          alt="funny gif"
          style={{
            width: "220px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        />

        <div style={{ marginTop: "20px", fontSize: "14px", opacity: 0.8 }}>
          bemygirlfriend.netlify.app
        </div>
      </div>
    </main>
  );
}
