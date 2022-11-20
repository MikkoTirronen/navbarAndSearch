import React from "react";
import "../../sass/styling.scss";
import EnvelopeIcon from "../navbar/components/EnvelopeIcon";

export default function HeaderComponent() {
  return (
    <div className="HEADER">
      <div className="rotate_logo">
        <EnvelopeIcon />
      </div>
      <h1>Digitalist</h1>
    </div>
  );
}
