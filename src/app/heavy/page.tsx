export default function HeavyPage() {
  return (
    <div>
      <h1>Heavy Page for Testing</h1>
      <div style={{ height: "3000px" }}>
        {Array(500)
          .fill(null)
          .map((_, i) => (
            <div key={i} style={{ fontSize: "24px", margin: "20px" }}>
              Item {i}
            </div>
          ))}
      </div>
      <img
        src="https://res-console.cloudinary.com/priyanshi/media_explorer_thumbnails/4797bae94e004c0af87322a59ce4566c/detailed"
        width="100%"
        height="auto"
        alt="big"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              const start = Date.now();
              while (Date.now() - start < 1000) {} // block thread
            `,
        }}
      />
    </div>
  );
}
