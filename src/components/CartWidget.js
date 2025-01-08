import React from "react";

const CartWidget = () => {
  return (
    <div className="flex items-center">
      <i className="fas fa-shopping-cart text-xl"></i> {/* Ícone do carrinho */}
      <span className="ml-2 text-sm font-semibold">4</span>{" "}
      {/* Quantidade de itens no carrinho */}
    </div>
  );
};

export default CartWidget;
