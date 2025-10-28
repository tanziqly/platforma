import { Link } from "react-router-dom";
import VK from "../assets/vk.svg";
import TG from "../assets/telegram.svg";
import OK from "../assets/ok.svg";

export const Footer = () => {
  return (
    <div className="text-[#B6BCEC] text-xl mx-5 px-28 py-12 rounded-t-[12px] max-w-[1440px] w-full bg-primary flex justify-between">
      <div className="flex flex-col gap-5">
        <Link to="/">Профиль</Link>
        <Link to="/">Регистрация</Link>
        <Link to="/">Помощь</Link>
        <Link to="/">О нас</Link>
      </div>
      <div className="flex flex-col gap-5">
        <Link to="/">Найти сервис</Link>
        <Link to="/">Обучение</Link>
        <Link to="/">Наши сервисы</Link>
        <Link to="/">Документы</Link>
      </div>
      <div className="flex justify-between max-w-[180px] w-full">
        <a href="#">
          <img src={TG} alt="telegram" />
        </a>
        <a href="#">
          <img src={VK} alt="vkontakte" />
        </a>
        <a href="#">
          <img src={OK} alt="odnoklassniki" />
        </a>
      </div>
    </div>
  );
};
