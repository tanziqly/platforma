import { Button } from "@shared/ui/button";
import { ProductList } from "@widgets/ProductList";
import { ArrowDownWideNarrow } from "lucide-react";

export const Products = () => {
  return (
    <div className="flex w-full justify-center mt-9 mb-10">
      <div className="max-w-[1440px] w-full flex flex-col gap-8">
        <div className="px-5">
          <h2 className="text-2xl font-semibold mb-4">Сервисы</h2>
          <div className="flex w-full justify-between sm:flex-row flex-col gap-4">
            <span className="text-neutral-500 max-w-[957px] w-full">
              Здесь вы можете выбрать сервис, который вам нужен, к каждому
              сервису идет краткое описание, просто нажмите на кнопку и
              используйте то, что вам нужно!
            </span>
            <Button>
              Сортировать
              <ArrowDownWideNarrow />
            </Button>
            
          </div>
        </div>
        <ProductList title="" variant="all" />
      </div>
    </div>
  );
};
