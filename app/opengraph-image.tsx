import { ImageResponse } from "next/og";

export const alt = "Logan Parke, full-stack engineer for product and growth";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F5EF",
          color: "#1A2820",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 999,
                background: "#B8860B",
              }}
            />
            Logan Parke
          </div>
          <div style={{ display: "flex", fontSize: 22, opacity: 0.65 }}>
            loganparke.com
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "56px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 800,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 68,
                fontWeight: 700,
                letterSpacing: "-2px",
                lineHeight: 1.05,
              }}
            >
              Full-stack engineer for product and growth.
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontSize: 29,
                lineHeight: 1.35,
                opacity: 0.72,
              }}
            >
              Web systems, MarTech stacks, landing pages, and SaaS products.
            </div>
          </div>

          <div
            style={{
              width: 214,
              height: 214,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 42,
              background: "#1A2820",
              color: "#F7F5EF",
              fontSize: 82,
              fontWeight: 700,
              boxShadow: "12px 12px 0 #B8860B",
            }}
          >
            LP
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            opacity: 0.58,
          }}
        >
          <span>Web systems</span>
          <span style={{ color: "#B8860B" }}>•</span>
          <span>MarTech</span>
          <span style={{ color: "#B8860B" }}>•</span>
          <span>Product</span>
        </div>
      </div>
    ),
    size,
  );
}
