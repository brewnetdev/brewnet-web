import { ImageResponse } from "next/og";

export const alt = "Brewnet — Your Home Server, Brewed Fresh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const services = [
  { name: "DOCKER", color: "#10B981" },
  { name: "NAS", color: "#3B82F6" },
  { name: "GIT", color: "#60A5FA" },
  { name: "MONITOR", color: "#FCD34D" },
  { name: "CI/CD", color: "#06B6D4" },
];

export default async function Image() {
  const fontBold = await fetch(
    "https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/ttf/JetBrainsMono-Bold.ttf",
  ).then((res) => res.arrayBuffer());

  const fontRegular = await fetch(
    "https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/ttf/JetBrainsMono-Regular.ttf",
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0D1117",
          padding: "56px 64px",
          fontFamily: "JetBrains Mono",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(19,25,32,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(19,25,32,0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ fontSize: 56, color: "#F59E0B", fontWeight: 700, display: "flex" }}>
            ☕ BREWNET
          </div>
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#8B949E",
            marginTop: 8,
            fontWeight: 400,
            display: "flex",
          }}
        >
          Your Home Server, Brewed Fresh
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 380,
            height: 2,
            background: "linear-gradient(90deg, #D97706, transparent)",
            marginTop: 16,
            display: "flex",
          }}
        />

        {/* Terminal box */}
        <div
          style={{
            marginTop: 36,
            backgroundColor: "#0A0E14",
            border: "1.5px solid #30363D",
            borderRadius: 12,
            padding: "28px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            maxWidth: 620,
          }}
        >
          {/* Terminal dots */}
          <div style={{ display: "flex", gap: "8px", marginBottom: 4 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#f85149",
                display: "flex",
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#d29922",
                display: "flex",
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#3fb950",
                display: "flex",
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "10px", fontSize: 18 }}>
            <span style={{ color: "#10B981" }}>$</span>
            <span style={{ color: "#E6EDF3" }}>brewnet init</span>
          </div>
          <div style={{ display: "flex", gap: "10px", fontSize: 18 }}>
            <span style={{ color: "#F59E0B" }}>⚡</span>
            <span style={{ color: "#FCD34D" }}>17 services ready</span>
          </div>
          <div style={{ display: "flex", gap: "10px", fontSize: 18 }}>
            <span style={{ color: "#10B981" }}>✓</span>
            <span style={{ color: "#10B981" }}>Network brewnet: READY</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Service nodes */}
          <div style={{ display: "flex", gap: "28px" }}>
            {services.map((svc) => (
              <div key={svc.name} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: svc.color,
                    display: "flex",
                  }}
                />
                <span style={{ fontSize: 14, color: "#8B949E" }}>{svc.name}</span>
              </div>
            ))}
          </div>
          <span style={{ fontSize: 18, color: "#F59E0B", fontWeight: 700, display: "flex" }}>
            brewnet.dev
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "JetBrains Mono", data: fontBold, weight: 700 as const },
        { name: "JetBrains Mono", data: fontRegular, weight: 400 as const },
      ],
    },
  );
}
