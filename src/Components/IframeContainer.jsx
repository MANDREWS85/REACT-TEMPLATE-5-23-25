export default function IframeContainer({src,height}) {
  const name = "IframeContainer";

  return (
    <div>
      <iframe
        src={src}
        title={name}
        style={{
          width: "100%",
          height: height,
          border: "0px solid #ccc",
          borderRadius: "8px",
        }}
        allowFullScreen
      />
    </div>
  );
}