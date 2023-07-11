import React from "react";
import "../styles/spinner.css";

export default function Loading() {
  return (
    <div className="spinner-container"style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="loading-spinner"  >
      </div>
    </div>
  );
}