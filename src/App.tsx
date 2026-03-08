import { CursorDrivenParticleTypography } from "./cursor-driven-particles-typography";

export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CursorDrivenParticleTypography
        text="Bres.dev"
        fontSize={160}
        particleDensity={5}
        dispersionStrength={20}
      />
    </div>
  );
}
