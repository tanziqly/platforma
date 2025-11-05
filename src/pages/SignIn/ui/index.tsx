import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import rightpng from "../assets/right-png.png"
export const SignIn = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      <main className="flex flex-1 items-center justify-center px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full gap-16">
          
          {/*Left*/}
          <div className="w-full  max-w-md bg-white shadow-md rounded-2xl p-8 border border-gray-100">
            <div className="flex flex-col items-center">
              <img src={logo} alt="Логотип" 
              className="mb-4 w-[243px] h-[97px] object-contain" />
              <h2 className="text-xl font-semibold mb-6">Вход</h2>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-800 text-sm font-medium mb-1">
                  Эл.адрес
                </label>
                <input
                type="email"
                placeholder="Введите эл. адрес"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              </div>

              <div>
                <label className="block text-gray-800 text-sm font-medium mb-1">
                  Пароль
                </label>
                <input
                type="password"
                placeholder="Введите пароль"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              </div>
              
              
              <div className="text-right text-sm">
                <a href="#" className="text-blue-600 hover:underline">
                  Забыли пароль?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Вход
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
              Еще нет аккаунта?{" "}
              <Link to="/sign-up" className="text-blue-600 hover:underline">
                Регистрация
              </Link>
            </p>
          </div>

          {/*right png*/}
          <div className="w-full flex justify-center">
            <img
              src={rightpng}
              alt="Рабочее место"
              className="hidden md:block w-1259px max-w-full object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
