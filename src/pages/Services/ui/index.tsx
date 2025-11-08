import { ProductIcon } from "@entities/Product/ui";
import { Button } from "@shared/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
   <section className="w-full max-w-7xl mx-auto px-4 py-10 bg-[radial-gradient(circle_at_center,#EEF3FF_0%,#F8FAFF_40%,#FFFFFF_100%)]">


      {/* Заголовок */}
      <h1 className="text-2xl sm:text-3xl font-semibold mb-8">
        Обучение
      </h1>

      {/* Верхняя часть: карточка + описание */}
     <div className="flex flex-col xl:flex-row gap-6 mb-8 items-start w-full">
  {/* Карточка слева — фиксированная ширина, не растягивается */}
  <div
  className="w-full max-w-[280px] mx-auto xl:mx-0 xl:mr-auto flex flex-col p-[18px] border border-[#D9D9D9] rounded-[12px]
  bg-[radial-gradient(circle_at_center,#FFFFFF_0%,#DEE3F2_40%,#FFFFFF_100%)]"
>
  <div className="flex items-center justify-between mb-2">
      <ProductIcon />
      <span className="font-semibold text-[#313131] text-xl"></span>
      <ProductIcon>
        <Link to="/">?</Link>
      </ProductIcon>
    </div>
    <div className="flex flex-col gap-4">
      <span className="text-[#97989B] leading-5 h-[70px]"></span>
      <hr className="border-[#DADCE4]" />
    </div>
    <div className="w-full flex justify-center my-4">
      <img className="w-[120px] h-[120px]" />
    </div>
    <Button className="bg-white hover:bg-neutral-100 cursor-pointer text-[#60A0FF]">
      Попробовать <ArrowUpRight />
    </Button>
  </div>

  {/* Описание справа — занимает оставшееся пространство */}
  <div className="w-full flex-1 space-y-6">
    <div className="bg-white p-6 rounded-xl shadow text-gray-700 space-y-3">
      <h2 className="text-xl font-semibold">Описание сервиса</h2>
      <p>
        Современный мир нейросетей огромен и разрознен. Каждый день появляются новые инструменты, а на их изучение и выбор уходят часы. Нейрошлюз решает эту проблему.
      </p>
      <p>
        Мы собрали для вас самые мощные и полезные нейронные сети в единой, удобной платформе. Вам больше не нужно помнить десятки логинов, платить за разные подписки или ломать голову, какая нейросеть справится лучше.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold">Документация</h2>
      <p className="text-gray-600 text-sm">
        Ниже представлена подробная <span className="text-blue-600 underline cursor-pointer">инструкция</span> пользования сервисом.
      </p>
      <p className="text-gray-600 text-sm">
        Для просмотра скачайте документ в формате “.docx”. В нем подробно описаны действия, которые нужно выполнить в зависимости от вашей цели.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition text-sm">
        Скачать файл
      </button>
    </div>
  </div>
</div>



    </section>
  );
};
