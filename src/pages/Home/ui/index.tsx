import { Product } from "@entities/Product";

export const Home = () => {
  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="max-w-[1440px] flex justify-between w-full">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};
