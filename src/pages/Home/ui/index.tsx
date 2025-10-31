import { ProductList } from "@widgets/ProductList";

export const Home = () => {
  return (
    <div>
      <ProductList variant="latest" title="Последние сервисы" />
    </div>
  );
};
