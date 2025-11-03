import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";
import { SendHorizonal, File, Smile } from "lucide-react";

export const ChatInput = () => {
  return (
    <div className="flex gap-2 m-4 px-4 py-2 dark:bg-[#202838] shadow-2xl dark:shadow-none rounded-sm max-w-[656px] w-full">
      <Input
        placeholder="Начните вводить..."
        className="flex-1 focus-visible:ring-0 placeholder:text-base text-base bg-none border-0"
      />

      <Button variant="ghost" size="icon" className="hover:bg-transparent">
        <SendHorizonal className="size-6" />
      </Button>
    </div>
  );
};
