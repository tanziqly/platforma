import { ProductList } from "@widgets/ProductList";

import LearnImg from "../assets/LearnImg.png";
import { BookOpen } from "lucide-react";
import { Button } from "@shared/ui/button";
import { ServiceHelper } from "@pages/Home/ui/ServiceHelper";

export const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1440px] w-full px-5 flex flex-col gap-4">
        <ServiceHelper />
        <ProductList variant="latest" title="Последние сервисы" />
        <div className="flex lg:py-0 py-8 justify-between px-5 items-center">
          <div className="flex flex-col gap-5">
            <h2 className="sm:text-2xl text-xl font-semibold">
              Обучение пользования продуктами
            </h2>
            <span className="text-[#282828] max-w-[800px] text-base sm:text-xl">
              На нашем портале предусмотрено обучение для новых пользователей.
              Обучение представляет собой описание процесса работы с каждым из
              продуктов. Пройдите обучение по интересующему вас продукту по
              ссылке ниже.
            </span>
            <Button className="w-fit">
              Пройти обучение <BookOpen />
            </Button>
          </div>
          <img className="lg:block hidden" src={LearnImg} alt="" />
        </div>
      </div>
    </div>
  );
};
