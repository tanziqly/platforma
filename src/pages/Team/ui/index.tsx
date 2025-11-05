// import { useRef } from "react";


export const Team = () => {
  return (
    
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Заголовок */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold">Наша команда</h2>
        <p className="text-gray-500 mt-2">
          Познакомьтесь с нашими замечательными участниками!
        </p>
      </div>

      {/* Container cards*/}
      <div className="relative flex items-center">
        {/* arrow */}
        <button className="sm:flex absolute left-0 -translate-x-6 bg-white p-2 rounded-full shadow">
          ←
        </button>

        {/* Cards */}
        <div className="p-2 flex overflow-x-auto gap-6 scroll-smooth no-scrollbar mx-auto">
          {[1,2,3,4].map((item) => (
            <div
              key={item}
              className="min-w-[330px] sm:min-w-[228px] bg-white p-6 rounded-xl  outline-2 outline-gray-100 shadow hover:shadow-lg transition"
            >
              <div className="w-32 h-32 rounded-full bg-blue-300 mx-auto"></div>
              <h3 className="text-center mt-4 font-semibold">Григорий Алекгаторович</h3>
              <p className="text-center text-sm text-gray-500">Специалист</p>
            </div>
          ))}
        </div>

        {/* arrow right */}
        <button className="p-3 sm:flex absolute right-0 translate-x-6 bg-white rounded-full shadow">
          →
        </button>
      </div>

     
      <p className="max-w-3xl mx-auto mt-10 text-left text-gray-500 text-sm sm:text-base">
        Наша команда находится в процессе создания современной платформы, призванной сделать работу с сервисами, представленными здесь, простой и доступной для работы.
        Мы верим в силу технологий и их способность менять мир к лучшему. 
        Скоро мы с радостью поделимся с вами нашей полной историей, ценностями и людьми, которые стоят за этим проектом.
      </p>
    </section>
  );
};
