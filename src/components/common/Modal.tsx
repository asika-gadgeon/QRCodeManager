import React from "react";

interface ModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ open, title, children, onClose }: ModalProps) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "450px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#7b1e8b",
            padding: "14px 20px",
          }}
        >
          <h3 style={styles.title}>{title}</h3>
        </div>

        {/* Body */}
        <div style={{ padding: "20px" }}>{children}</div>

        {/* Footer */}
        <div
          style={{
            padding: "10px 20px",
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <button style={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  title: {
    margin: 0,
    color: "#fff",
    fontWeight: 600,
    fontSize: "18px",
    textAlign: "left",
  },

  cancelButton: {
    background: "#7b1e8b",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    width: "120px",
  },
};
