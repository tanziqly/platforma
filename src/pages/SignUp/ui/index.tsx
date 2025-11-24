import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import rightpng from "../assets/right-png.png"

export const SignUp = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
     
      
      <main className="flex flex-1 items-center justify-center px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full gap-16">
          {/* left*/}
          <div className="w-full  max-w-md bg-white shadow-md rounded-2xl p-6 border border-gray-100">
            <div className="flex flex-col items-center mb-2">
              <img src={logo} alt="Логотип" 
              className=" mb-0.2 w-[150px] h-[60px] object-contain md:w-[243px] md:h-[97px]" />
              <div className="w-full border-b border-[#E5E7EB] mb-4 "></div>
              
              <h2 className="text-xl font-semibold text-gray-900">
                Регистрация
              </h2>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-800 text-sm font-medium mb-1">
                  Имя
                </label>
                <input
                  type="text"
                  placeholder="Введите имя"
                  className="w-full px-4 py-2 bg-[#F0F0F0] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block  text-gray-800 text-sm font-medium mb-1">
                  Фамилия
                </label>
                <input
                  type="text"
                  placeholder="Введите фамилию"
                  className="w-full px-4 bg-[#F0F0F0] py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-800 text-sm font-medium mb-1">
                  Отчество
                </label>
                <input
                  type="text"
                  placeholder="Введите отчество"
                  className="w-full px-4 py-2 bg-[#F0F0F0] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-800 text-sm font-medium mb-1">
                  Эл. адрес
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full px-4 py-2 bg-[#F0F0F0] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-800 text-sm font-medium mb-1">
                  Пароль
                </label>
                <input
                  type="password"
                  placeholder="Введите пароль"
                  className="w-full px-4 py-2 bg-[#F0F0F0] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-800 text-sm font-medium mb-1">
                  Повторите пароль
                </label>
                <input
                  type="password"
                  placeholder="Повторите пароль"
                  className="w-full px-4 py-2 bg-[#F0F0F0] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Регистрация
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
              Уже есть аккаунт?{" "}
              <Link to="/sign-in" className="text-blue-600 hover:underline">
                Войти
              </Link>
            </p>
          </div>

          {/* right png */}
          <div className="w-full flex justify-center">
            <img
              src={rightpng}
              alt="Рабочее место"
              className="hidden md:block w-[959px] max-w-full object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
