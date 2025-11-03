import { Button } from "@shared/ui/button";
import { ChatInput } from "@widgets/ChatInput/ui";
import { ChatMessages } from "@widgets/ChatMessages";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const Chat = () => {
  return (
    <div className="h-screen mt-4 flex flex-col items-center w-full">
      <div className="max-w-[1440px] w-full">
        <div className="flex md:border-b-0 border-b md:flex-row flex-col-reverse md:items-normal items-center">
          <div className="flex gap-2">
            <Link to="/" className=" flex items-center gap-1">
              <Button variant={"ghost"}>
                <ChevronLeft />
                Вернуться назад
              </Button>
            </Link>
          </div>
          <span className="md:absolute md:left-1/2 transform -translate-x-1/2 text-xl md:text-[40px] font-bold">
            ИИ - робот
          </span>
        </div>
      </div>
      <div className="flex-1 max-w-[800px] px-12 w-full overflow-y-auto">
        <ChatMessages />
      </div>

      <div className=" px-4 w-full flex justify-center py-3">
        <ChatInput />
      </div>
    </div>
  );
};
