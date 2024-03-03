import * as React from "react";

type PropType = {
  children: React.ReactNode;
};

const Button = ({ children }: PropType) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "1.2rem",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "blue",
        color: "white",
        border: "none",
      }}
    >
      {children}
    </button>
  );
};

export { Button };
