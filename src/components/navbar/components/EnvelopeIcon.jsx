import React from "react";
import { IconContext } from "react-icons";
import { BiEnvelope } from "react-icons/bi";

export default function EnvelopeIcon() {
  return (
    <>
      <IconContext.Provider value={{ color: "whitesmoke", size: "60px" }}>
        <BiEnvelope />
      </IconContext.Provider>
    </>
  );
}
