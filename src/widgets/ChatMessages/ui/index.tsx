import { MessageBubble } from "@shared/ui/MessageBubble";

export const ChatMessages = () => {
  // Простые заглушечные данные
  const messages = [
    {
      id: 1,
      content: "Привет! 👋 Я — твой AI-помощник.",
      type: "bot",
      isLoading: false,
      timestamp: new Date(),
    },
    {
      id: 2,
      content: "Привет! Расскажи, что ты умеешь?",
      type: "user",
      isLoading: false,
      timestamp: new Date(),
    },
    {
      id: 3,
      content: "",
      type: "bot",
      isLoading: true,
      timestamp: new Date(),
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          text={message.content}
          isUser={message.type === "user"}
          isLoading={message.isLoading}
          timestamp={message.timestamp}
        />
      ))}
    </div>
  );
};
