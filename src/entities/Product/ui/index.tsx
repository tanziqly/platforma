import { Button } from "@shared/ui/button";

import { ArrowUpRight } from "lucide-react";

import AiProduct from "../assets/AiProduct.svg";

import { Link } from "react-router-dom";

interface ProductProps {
  title: string;
  description: string;
  image?: string;
}

export const Product = ({ title, description }: ProductProps) => {
  return (
    <div
      className="max-w-[280px] h-fit w-full flex flex-col p-[18px] border border-[#D9D9D9] rounded-[12px]
      bg-[radial-gradient(circle_at_center,#FFFFFF_0%,#DEE3F2_40%,#F5F5F5_100%)]"
    >
      <div className="flex items-center justify-between mb-2">
        <ProductIcon>
          <img src={AiProduct} />
        </ProductIcon>
        <span className="font-semibold text-[#313131] text-xl">{title}</span>
        <ProductIcon>
          <Link to="/">?</Link>
        </ProductIcon>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[#97989B] leading-5 h-[70px]">{description}</span>
        <hr className="border-[#DADCE4]" />
      </div>
      <div className="w-full flex justify-center my-4">
        <img src={title} className="w-[120px] h-[120px]" />
      </div>
      <Button className="bg-white hover:bg-neutral-100 cursor-pointer text-[#60A0FF]">
        Попробовать <ArrowUpRight />
      </Button>
    </div>
  );
};

interface ProductIconProps {
  children: React.ReactNode;
}

export const ProductIcon = ({ children }: ProductIconProps) => {
  return (
    <div className="bg-[#D3DFF5] w-7 h-7 rounded-[4px] font-semibold flex items-center justify-center border border-[#BAD2F7] text-[#60A0FF]">
      {children}
    </div>
  );
};
