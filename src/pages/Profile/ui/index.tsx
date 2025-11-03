import { useState } from "react";
import { Button } from "@shared/ui/button";
import { ProductList } from "@widgets/ProductList";
import { Modal } from "./Modal";

export const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full justify-center mb-10">
      <div className="max-w-[1440px] w-full flex flex-col gap-8">
        {/* --- Профиль --- */}
        <div className="flex flex-col sm:flex-row w-full items-center sm:items-start gap-4 sm:gap-6 px-4 sm:px-8 py-4 bg-gray-100 rounded-2xl shadow-sm text-center sm:text-left">
          {/* Аватар */}
          <div className="w-20 h-20 rounded-full bg-blue-600 border-4 border-white shadow mx-auto sm:mx-0"></div>

          {/* Инфо о пользователе */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row items-center sm:items-baseline justify-center sm:justify-start gap-1 sm:gap-2">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                Новиков Михаил Генадьевич
              </h2>
              <span className="text-neutral-500 text-sm">@m.gendievich</span>
            </div>
            <p className="text-neutral-500 text-sm">example@mail.com</p>
            <p className="mt-1 text-sm sm:text-base">
              г. Липецк, предприниматель
            </p>
          </div>

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-col gap-2 w-full sm:w-auto mt-3 sm:mt-0">
            <Button
              onClick={() => setOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
            >
              Редактировать профиль
            </Button>
            <Button className="bg-gray-700 hover:bg-gray-800 text-white w-full sm:w-auto">
              Выйти из аккаунта
            </Button>
          </div>
        </div>

        <ProductList title="История сервисов" variant="history" />
        <ProductList title="Рекомендуем попробовать" variant="recomendations" />

        {/* Передаём состояние */}
        <Modal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};
