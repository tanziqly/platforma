import { useRef, useState, useEffect } from "react";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";

export const Team = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalCards = 8;
  const visibleCards = 4;
  const maxStartIndex = totalCards - visibleCards + 1;

  const scrollToIndex = (index: number) => {
    if (scrollRef.current && !isAnimating) {
      setIsAnimating(true);
      const cardWidth = 330;
      const gap = 24;
      const targetScroll = index * (cardWidth + gap);

      scrollRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
      setVisibleStartIndex(index);

      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const scrollLeft = () => {
    if (visibleStartIndex > 0) {
      scrollToIndex(visibleStartIndex - 1);
    }
  };

  const scrollRight = () => {
    if (visibleStartIndex < maxStartIndex) {
      scrollToIndex(visibleStartIndex + 1);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current && !isAnimating) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = 330;
      const gap = 24;
      const scrollPosition = scrollLeft / (cardWidth + gap);
      const newIndex = Math.min(maxStartIndex, Math.round(scrollPosition));
      setVisibleStartIndex(newIndex);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const getSmoothMargin = (index: number) => {
    const positionInView = index - visibleStartIndex;

    if (positionInView >= 0 && positionInView < visibleCards) {
      return positionInView * 12;
    }

    return 0;
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-6">
        <h2 className="text-3xl sm:text-4xl font-semibold">Наша команда</h2>
        <p className="text-[#CCCCCC] mt-1">
          Познакомьтесь с нашими замечательными участниками!
        </p>
      </div>

      <div className="relative p-2">
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 -translate-x-6 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={visibleStartIndex === 0 || isAnimating}
        >
          <img src={arrowLeft} alt="Влево" className="w-5 h-5" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 translate-x-6 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={visibleStartIndex === maxStartIndex || isAnimating}
        >
          <img src={arrowRight} alt="Вправо" className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth p-4 no-scrollbar"
          style={{
            maxWidth: "calc(4 * 330px + 3 * 24px)",
          }}
        >
          {Array.from({ length: totalCards }).map((_, index) => (
            <div
              key={index}
              className="min-w-[330px] h-fit border bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 ease-in-out relative"
              style={{
                marginTop: `${getSmoothMargin(index)}px`,
                transition:
                  "margin-top 0.3s ease-in-out, transform 0.3s ease-in-out",
                transform: `translateY(${
                  getSmoothMargin(index) > 0 ? "-2px" : "0px"
                })`,
              }}
            >
              <div className="w-32 h-32 rounded-full bg-blue-300 mx-auto"></div>
              <h3 className="text-center mt-4 font-semibold">
                Григорий Алекгаторович {index + 1}
              </h3>
              <p className="text-center text-sm text-gray-500">Специалист</p>
            </div>
          ))}
        </div>

        {/* Индикатор прогресса */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxStartIndex + 1 }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => scrollToIndex(dotIndex)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                visibleStartIndex === dotIndex
                  ? "bg-blue-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>

      <p className="w-full mx-auto mt-6 text-left font-normal font-roboto leading-tight text-[#B2B2B2] text-sm sm:text-base bg-white p-4 rounded-xl outline-2 outline-gray-100 shadow">
        Наша команда находится в процессе создания современной платформы,
        призванной сделать работу с сервисами, представленными здесь, простой и
        доступной для работы. Мы верим в силу технологий и их способность менять
        мир к лучшему. Скоро мы с радостью поделимся с вами нашей полной
        историей, ценностями и людьми, которые стоят за этим проектом.
      </p>
    </section>
  );
};
