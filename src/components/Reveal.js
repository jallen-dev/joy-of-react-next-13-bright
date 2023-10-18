"use client";
import React from "react";

export function Reveal({ children }) {
  const [shown, setShown] = React.useState(false);

  if (!shown) {
    return (
      <div className="reveal">
        <button onClick={() => setShown(true)}>Reveal Content</button>
      </div>
    );
  }

  return <>{children}</>;
}
