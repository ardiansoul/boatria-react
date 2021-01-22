import React from "react";

function Header() {
  return (
    <div className="w-full h-36 bg-white">
      <h3 className="font-bold text-black">
        Boat<span className="text-orange-500">Ria</span>
      </h3>
      <div>
        <h3>Berlibur</h3>
        <h3>Paket Wisata</h3>
        <button>Masuk</button>
      </div>
    </div>
  );
}

export default Header;
