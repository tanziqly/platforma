import { useRef } from "react";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";

export const Team = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
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
          className="absolute top-1/2 left-0 -translate-x-6 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition"
        >
          <img src={arrowLeft} alt="Влево" className="w-5 h-5" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 translate-x-6 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition"
        >
          <img src={arrowRight} alt="Вправо" className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth p-4 no-scrollbar"
        >
          <div className="min-w-[330px] sm:min-w-[228px] bg-white p-6 rounded-xl shadow hover:shadow-lg transition relative" style={{ top: "0px" }}>
            <div className="w-32 h-32 rounded-full bg-blue-300 mx-auto"></div>
            <h3 className="text-center mt-4 font-semibold">Григорий Алекгаторович</h3>
            <p className="text-center text-sm text-gray-500">Специалист</p>
          </div>

          <div className="min-w-[330px] sm:min-w-[228px] bg-white p-6 rounded-xl shadow hover:shadow-lg transition relative" style={{ top: "20px" }}>
            <div className="w-32 h-32 rounded-full bg-blue-300 mx-auto"></div>
            <h3 className="text-center mt-4 font-semibold">Мария Иванова</h3>
            <p className="text-center text-sm text-gray-500">Дизайнер</p>
          </div>

          <div className="min-w-[330px] sm:min-w-[228px] bg-white p-6 rounded-xl shadow hover:shadow-lg transition relative" style={{ top: "40px" }}>
            <div className="w-32 h-32 rounded-full bg-blue-300 mx-auto"></div>
            <h3 className="text-center mt-4 font-semibold">Алексей Петров</h3>
            <p className="text-center text-sm text-gray-500">Разработчик</p>
          </div>

          <div className="min-w-[330px] sm:min-w-[228px] bg-white p-6 rounded-xl shadow hover:shadow-lg transition relative" style={{ top: "60px" }}>
            <div className="w-32 h-32 rounded-full bg-blue-300 mx-auto"></div>
            <h3 className="text-center mt-4 font-semibold">Елена Смирнова</h3>
            <p className="text-center text-sm text-gray-500">Менеджер</p>
          </div>

          <div className="min-w-[330px] sm:min-w-[228px] bg-white p-6 rounded-xl shadow hover:shadow-lg transition relative" style={{ top: "40px" }}>
            <div className="w-32 h-32 rounded-full bg-blue-300 mx-auto"></div>
            <h3 className="text-center mt-4 font-semibold">Дмитрий Кузнецов</h3>
            <p className="text-center text-sm text-gray-500">Аналитик</p>
          </div>

          <div className="min-w-[330px] sm:min-w-[228px] bg-white p-6 rounded-xl shadow hover:shadow-lg transition relative" style={{ top: "20px" }}>
            <div className="w-32 h-32 rounded-full bg-blue-300 mx-auto"></div>
            <h3 className="text-center mt-4 font-semibold">Анна Лебедева</h3>
            <p className="text-center text-sm text-gray-500">Маркетолог</p>
          </div>
        </div>
      </div>

      <p className="w-full mx-auto mt-6 text-left font-normal font-roboto leading-tight text-[#B2B2B2] text-sm sm:text-base bg-white p-4 rounded-xl outline-2 outline-gray-100 shadow">
        Наша команда находится в процессе создания современной платформы, призванной сделать работу с сервисами, представленными здесь, простой и доступной для работы. Мы верим в силу технологий и их способность менять мир к лучшему. Скоро мы с радостью поделимся с вами нашей полной историей, ценностями и людьми, которые стоят за этим проектом.
      </p>
    </section>
  );
};
