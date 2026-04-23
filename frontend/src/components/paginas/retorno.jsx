import { Link } from "react-router-dom";

function Retorno() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f7fa",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "560px",
          background: "#ffffff",
          borderRadius: "20px",
          padding: "40px 32px",
          boxShadow: "0 18px 45px rgba(17, 24, 39, 0.10)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            margin: "0 auto 20px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(37, 99, 235, 0.12)",
            color: "#2563EB",
            fontSize: "34px",
            fontWeight: "700",
          }}
        >
          ✓
        </div>

        <h1
          style={{
            margin: "0 0 12px",
            fontSize: "36px",
            lineHeight: "1.15",
            color: "#111827",
          }}
        >
          Gracias por tu compra
        </h1>

        <p
          style={{
            margin: "0 0 28px",
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#4B5563",
          }}
        >
          Estamos confirmándola en este momento. En breve podrás ver el estado actualizado.
        </p>

        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "220px",
            padding: "14px 24px",
            borderRadius: "999px",
            background: "#111828",
            color: "#FFFFFF",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "600",
            boxShadow: "0 10px 24px rgba(17, 24, 39, 0.18)",
          }}
        >
          Volver a home
        </Link>
      </div>
    </div>
  );
}

export default Retorno;