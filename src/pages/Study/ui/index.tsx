import { Product } from "@entities/Product";
import { Button } from "@shared/ui/button";

export const Study = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-[1440px] mx-5 w-full">
        <h2 className="text-2xl my-5 font-semibold">Обучение</h2>
        <div className="flex lg:flex-row flex-col items-center gap-10">
          <Product
            title="Нейрошлюха"
            image=""
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <div className="flex flex-col gap-6">
            <div className="border px-8 py-6 flex flex-col gap-4 rounded-[8px]">
              <h3 className="font-semibold text-2xl sm:text-[32px]">
                Описание сервиса
              </h3>
              <div className="flex flex-col gap-2 text-neutral-500">
                <span>
                  Современный мир нейросетей огромен и разрознен. Каждый день
                  появляются новые инструменты, а на их изучение и выбор уходят
                  часы. Нейрошлюз решает эту проблему.
                </span>
                <span>
                  Мы собрали для вас самые мощные и полезные нейронные сети в
                  единой, удобной платформе. Вам больше не нужно помнить десятки
                  логинов, платить за разные подписки или ломать голову, какая
                  нейросеть справится лучше.
                </span>
              </div>
            </div>
            <div className="border px-8 py-6 flex flex-col gap-4 rounded-[8px]">
              <h3 className="font-semibold text-2xl sm:text-[32px]">
                Документация
              </h3>
              <div className="flex flex-col gap-2 text-neutral-500">
                <span>
                  Ниже представлена подробная инструкция пользования сервисом.
                </span>
                <span>
                  Для просмотра скачайте документ в формате “.docx”. В нем
                  подробно описаны действия, которые нужно выполнить в
                  зависимости от вашей цели.
                </span>
              </div>
              <Button>Скачать файл</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
