import { Card, CardContent } from "@shared/ui/card";
import React, { useState } from "react";
import { SortDropdown } from "./SortDropdown";

interface Request {
  id: number;
  userName: string;
  userEmail: string;
  serviceName: string;
  date: string;
  status: "pending" | "approved" | "rejected";
}

export const AdminService: React.FC = () => {
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

  const [filter, setFilter] = useState<
    "all" | "approved" | "rejected" | "pending"
  >("all");

  const filteredRequests = requests.filter((req) => {
    if (filter === "all") return true;
    return req.status === filter;
  });

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
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl mb-2 font-semibold text-gray-800">
            Админ панель
          </h1>
          <div className="min-w-full flex pb-2 gap-6 overflow-x-auto flex-nowrap">
            <Card className="w-[250px] shrink-0 shadow-sm">
              <CardContent className="px-6 text-left">
                <div className="text-4xl font-medium">{requests.length}</div>
                <div className="text-gray-600">Всего заявок</div>
              </CardContent>
            </Card>

            <Card className="w-[250px] shrink-0 shadow-sm">
              <CardContent className="px-6 text-left">
                <div className="text-4xl font-medium">
                  {requests.filter((req) => req.status === "approved").length}
                </div>
                <div className="text-gray-600">Принято заявок</div>
              </CardContent>
            </Card>

            <Card className="w-[250px] shrink-0 shadow-sm">
              <CardContent className="px-6 text-left">
                <div className="text-4xl font-medium">
                  {requests.filter((req) => req.status === "pending").length}
                </div>
                <div className="text-gray-600">Ожидают решения</div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-neutral-600">Заявки</h2>
            <SortDropdown onSelect={setFilter} selected={filter} />
          </div>

          <div className="grid gap-4">
            {filteredRequests.map((req) => (
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
                  <p>
                    Дата подачи:{" "}
                    {new Date(req.date).toLocaleDateString("ru-RU")}
                  </p>
                </div>

                {/* --- Умные кнопки статуса --- */}
                <div className="flex justify-end gap-2">
                  {req.status === "rejected" && (
                    <button
                      onClick={() => handleApprove(req.id)}
                      className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-900 transition"
                    >
                      Принять
                    </button>
                  )}

                  {req.status === "approved" && (
                    <button
                      onClick={() => handleReject(req.id)}
                      className="px-4 py-2 rounded-lg bg-gray-600 text-white text-sm font-medium hover:bg-gray-700 transition"
                    >
                      Отклонить
                    </button>
                  )}

                  {req.status === "pending" && (
                    <>
                      <button
                        onClick={() => handleApprove(req.id)}
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-900 transition"
                      >
                        Принять
                      </button>
                      <button
                        onClick={() => handleReject(req.id)}
                        className="px-4 py-2 rounded-lg bg-gray-600 text-white text-sm font-medium hover:bg-gray-700 transition"
                      >
                        Отклонить
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
