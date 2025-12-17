interface Props {
  label: string;
  onClick: () => void;
}

export default function Button({ label, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "#7b1e8b",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        marginBottom: "20px",
      }}
    >
      <span style={{ fontSize: "18px" }}>+</span> {label}
    </button>
  );
}
