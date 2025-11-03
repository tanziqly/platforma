import { Loader2, User, Bot } from "lucide-react";

interface MessageBubbleProps {
  text: string;
  isUser?: boolean;
  isLoading?: boolean;
  timestamp?: Date;
}

export const MessageBubble = ({
  text,
  isUser = false,
  isLoading = false,
  timestamp,
}: MessageBubbleProps) => {
  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 gap-3`}
    >
      {/* Аватар */}
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}

      {/* Сообщение */}
      <div className="flex flex-col max-w-[70%]">
        <div
          className={`rounded-2xl px-4 py-3 break-words
          ${isUser ? "bg-blue-600 text-white" : "bg-none text-neutral-6 00"}`}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">AI думает...</span>
            </div>
          ) : (
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {text}
            </p>
          )}
        </div>

        {/* Временная метка */}
        {timestamp && (
          <span
            className={`text-xs text-gray-400 mt-1 ${
              isUser ? "text-right" : "text-left"
            }`}
          ></span>
        )}
      </div>

      {/* Аватар пользователя */}
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};
