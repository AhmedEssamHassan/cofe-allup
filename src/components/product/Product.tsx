import React from "react";
import product from "../../assets/images/product1.png";
function Product() {
  return (
    <>
      <style>{`
     .product{

       animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1);
     }
    @keyframes pulse {
      from {
        opacity: 0;
        transform: translateY(10px)
      }
      to {
        opacity: 1;
        transform: translateY(0px)
      }
    }
    `}</style>
      <div className="product flex flex-col gap-3">
        <img src={product} className="w-full rounded-lg" alt="" />
        <h4 className="text-kernel md:text-lg lg:text-xl">Filli Tea </h4>
        <p className="text-main_color">AED 0</p>
      </div>
    </>
  );
}

export default Product;
