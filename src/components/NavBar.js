import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="bg-gray-600 p-4 flex justify-between items-center text-white">
      <div className="text-lg font-bold">Minha Loja</div>
      <ul className="flex space-x-4">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Produtos</li>
        <li className="hover:underline cursor-pointer">Sobre</li>
        <li className="hover:underline cursor-pointer">Contato</li>
      </ul>
      <CartWidget /> {/* Incluindo o CartWidget */}
    </nav>
  );
};

export default NavBar;
