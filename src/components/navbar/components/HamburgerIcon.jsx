import { IconContext } from "react-icons";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
export default function HamburgerIcon() {
  return (
    <>
      <IconContext.Provider
        value={{
          color: "whitesmoke",
          size: "40px",
        }}
      >
        <div>
          <GiHamburgerMenu />
        </div>
      </IconContext.Provider>
    </>
  );
}
