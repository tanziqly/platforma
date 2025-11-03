import { Product } from "@entities/Product";
import type { FC } from "react";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProductListProps {
  title: string;
  variant: "all" | "recomendations" | "history" | "latest";
}

export const ProductList: FC<ProductListProps> = ({ title, variant }) => {
  const isGrid = variant === "all";
  const isCarousel = variant === "recomendations" || variant === "history";

  const scrollRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      pId: 1,
      title: "Нейрошлюз",
      description:
        "Сервис для интеграции возможностей ИИ в ваши приложения и процессы с помощью простого API.",
      image: "",
    },
    {
      pId: 2,
      title: "Нейрошлюз",
      description:
        "Сервис для интеграции возможностей ИИ в ваши приложения и процессы с помощью простого API.",
      image: "",
    },
    {
      pId: 3,
      title: "Нейрошлюз",
      description:
        "Сервис для интеграции возможностей ИИ в ваши приложения и процессы с помощью простого API.",
      image: "",
    },
    {
      pId: 4,
      title: "Нейрошлюз",
      description:
        "Сервис для интеграции возможностей ИИ в ваши приложения и процессы с помощью простого API.",
      image: "",
    },
    {
      pId: 5,
      title: "Нейрошлюз",
      description:
        "Сервис для интеграции возможностей ИИ в ваши приложения и процессы с помощью простого API.",
      image: "",
    },
    {
      pId: 6,
      title: "Нейрошлюз",
      description:
        "Сервис для интеграции возможностей ИИ в ваши приложения и процессы с помощью простого API.",
      image: "",
    },
    {
      pId: 7,
      title: "Нейрошлюз",
      description:
        "Сервис для интеграции возможностей ИИ в ваши приложения и процессы с помощью простого API.",
      image: "",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth * 0.9;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center w-full px-3 sm:px-5">
      <div className="max-w-[1440px] gap-3 flex flex-col w-full">
        <div className="flex gap-2 w-fit justify-between items-center">
          <h2 className="font-semibold text-2xl">{title}</h2>
          {isCarousel && (
            <div className="flex gap-2 items-center">
              <button
                onClick={() => handleScroll("left")}
                className="cursor-pointer h-8 w-8 bg-primary rounded-full flex justify-center items-center hover:bg-blue-600 transition"
              >
                <ArrowLeft className="text-white h-5" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="cursor-pointer h-8 w-8 bg-primary rounded-full flex justify-center items-center hover:bg-blue-600 transition"
              >
                <ArrowRight className="text-white h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Сетка Все сервисы */}
        {isGrid && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 justify-items-center sm:justify-items-start">
            {products.map((p) => (
              <Product key={p.pId} {...p} />
            ))}
          </div>
        )}

        {/* Последние (фиксированные 5 карточек) */}
        {!isGrid && !isCarousel && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {products.slice(0, 5).map((p) => (
              <Product key={p.pId} {...p} />
            ))}
          </div>
        )}

        {/* Карусель */}
        {isCarousel && (
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto snap-x scroll-smooth no-scrollbar py-2"
          >
            {products.map((p) => (
              <div
                key={p.pId}
                className="snap-start flex-shrink-0 w-[80%] sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%]"
              >
                <Product {...p} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
