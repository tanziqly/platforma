import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";

import RobotImg from "../assets/robot.png";
import { Forward } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export const ServiceHelper = () => {
  return (
    <div className="w-full py-6 px-4 sm:px-16 mt-5  rounded-[12px] bg-linear-to-b from-[#0239C9] to-[#7399FB]">
      <div className="flex justify-between">
        <div className="">
          <div>
            <h1 className="font-bold text-xl sm:text-[36px] mb-2 text-white">
              Не можете определиться с выбором сервиса?
            </h1>
            <span className="text-base sm:text-xl text-white">
              В нашем <span className="underline text-secondary">чате</span> вы
              найдёте описание всех наших сервисов и сможете быстро разобраться,
              что и для чего подходит.
            </span>
            <div className="flex mt-6 gap-2">
              <Input
                className="bg-white text-[18px] placeholder:text-neutral-500"
                placeholder="Найди сервис, где я могу сгенерировать изображение"
              />
              <Button className="w-16 cursor-pointer">
                <Forward />
              </Button>
            </div>
          </div>
        </div>
        <img className="sm:block hidden" src={RobotImg} alt="robot" />
      </div>
      <Link
        to="/chat"
        className="w-full text-white font-semibold items-end flex gap-2 justify-center"
      >
        Развернуть чат <ChevronDown className="w-5 h-5" />
      </Link>
    </div>
  );
};
