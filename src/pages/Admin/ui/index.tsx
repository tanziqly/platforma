import React, { useState } from "react";

interface Request {
  id: number;
  userName: string;
  userEmail: string;
  serviceName: string;
  date: string;
  status: "pending" | "approved" | "rejected";
}

export const Admin: React.FC = () => {
  const [requests, setRequests] = useState<Request[]>([
    {
      id: 1,
      userName: "Иван Петров",
      userEmail: "ivan.petrov@mail.ru",
      serviceName: "ГАСУ",
      date: "2025-11-09",
      status: "pending",
    },
    {
      id: 2,
      userName: "Ольга Смирнова",
      userEmail: "olga.smirnova@mail.ru",
      serviceName: "Нейрошлюз",
      date: "2025-11-08",
      status: "pending",
    },
    {
      id: 3,
      userName: "Михаил Новиков",
      userEmail: "m.novikov@mail.ru",
      serviceName: "Бездомные собаки",
      date: "2025-11-06",
      status: "approved",
    },
     {
      id: 4,
      userName: "Михаил Новиков",
      userEmail: "m.novikov@mail.ru",
      serviceName: "Бездомные собаки",
      date: "2025-11-06",
      status: "approved",
    },
  ]);

  const handleApprove = (id: number) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: "approved" } : req))
    );
  };

  const handleReject = (id: number) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: "rejected" } : req))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">

      <main className="flex-1 p-6">
          <h1 className="text-xl font-semibold text-gray-800">
          Админ панель
        </h1>
        <div className="max-w-5xl mx-auto">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-700">
              Всего заявок: {requests.length}
            </h2>
          </div>

          <div className="grid gap-4">
            {requests.map((req) => (
              <div
                key={req.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 border border-gray-100"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {req.serviceName}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Заявка от{" "}
                      <span className="font-medium">{req.userName}</span> (
                      {req.userEmail})
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium text-center ${
                      req.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : req.status === "approved"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {req.status === "pending"
                      ? "Ожидает решения"
                      : req.status === "approved"
                      ? "Одобрено"
                      : "Отклонено"}
                  </span>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  <p>Дата подачи: {new Date(req.date).toLocaleDateString("ru-RU")}</p>
                </div>

                {req.status === "pending" && (
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => handleApprove(req.id)}
                      className="px-4  py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-900 transition"
                    >
                      Принять
                    </button>
                    <button
                      onClick={() => handleReject(req.id)}
                      className="px-4 py-2 rounded-lg bg-gray-600 text-white text-sm font-medium hover:bg-gray-700 transition"
                    >
                      Отклонить
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

    
    </div>
  );
};


