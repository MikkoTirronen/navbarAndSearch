import React from "react";
import "../../styling.scss";
import EnvelopeIcon from "../navbar/components/EnvelopeIcon";

export default function HeaderComponent() {
  return (
    <div className="header">
      <div className="logo">
        <EnvelopeIcon />
      </div>
      <h1>Digitalist</h1>
    </div>
  );
}
