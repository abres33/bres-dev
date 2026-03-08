import { CursorDrivenParticleTypography } from "./cursor-driven-particles-typography";

export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#000",
        color: "#fff",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <CursorDrivenParticleTypography
        text="Bres.dev"
        fontSize={160}
        particleDensity={5}
        dispersionStrength={20}
        color="#ffffff"
      />
    </div>
  );
}
