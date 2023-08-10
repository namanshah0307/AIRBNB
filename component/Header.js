import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header>
      {/* left */}
      <div className="relative flex items-center">
        <Image
          src="https://links.papareact.com/qd3"
          alt="airbnb logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle */}
      <div></div>

      {/* Right */}
      <div></div>
    </header>
  );
}

export default Header;
