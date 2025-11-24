import React, { useRef, useState } from "react";
import { Card, CardContent } from "@shared/ui/card";
import { ProductList } from "@widgets/ProductList";
import { Button } from "@shared/ui/button";
import { SendIcon } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const Admin: React.FC = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      title: "ГАСУ",
      description: "Сервис для госуслуг",
      image: "",
      link: "https://gacu.example.com",
    },
    {
      id: 2,
      title: "Нейрошлюз",
      description: "Интеграция ИИ",
      image: "",
      link: "https://neuro.example.com",
    },
  ]);

  const [showNewServiceModal, setShowNewServiceModal] = useState(false);
  const [showEditServiceModal, setShowEditServiceModal] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

  const [serviceForm, setServiceForm] = useState<Omit<Service, "id">>({
    title: "",
    description: "",
    image: "",
    link: "",
  });

  const addService = () => {
    if (!serviceForm.title || !serviceForm.link) return;
    setServices((prev) => [...prev, { id: Date.now(), ...serviceForm }]);
    setServiceForm({ title: "", description: "", image: "", link: "" });
    setShowNewServiceModal(false);
  };

  const saveService = () => {
    if (!editingService) return;
    setServices((prev) =>
      prev.map((s) => (s.id === editingService.id ? editingService : s))
    );
    setEditingService(null);
    setShowEditServiceModal(false);
  };

  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Для фронтенда можно просто логировать файлы или сохранять их локально
      console.log("Dropped files:", Array.from(e.dataTransfer.files));
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFiles = (files: FileList) => {
    const validFiles = Array.from(files).filter((file) => {
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      return fileExtension === "pdf" || fileExtension === "docx";
    });

    if (validFiles.length === 0) {
      alert("Пожалуйста, выберите файлы формата PDF или DOCX");
      return;
    }

    console.log("Selected files:", validFiles);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) handleFiles(e.target.files);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col items-center py-6 px-5">
      <div className="w-full max-w-[1400px] flex flex-col gap-8">
        <h1 className="text-3xl font-bold">Админ панель платформы</h1>

        <div className="min-w-full px-5 flex pb-2 gap-6 overflow-x-auto flex-nowrap">
          <Card className="w-[250px] shrink-0 shadow-sm">
            <CardContent className="px-6 text-left">
              <div className="text-4xl font-medium">{services.length}</div>
              <div className="text-gray-600">Всего сервисов</div>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 px-5">
          <button
            onClick={() => setShowNewServiceModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Новый сервис
          </button>

          <button
            onClick={() => setShowEditServiceModal(true)}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Редактировать сервисы
          </button>
        </div>

        <ProductList title="Все сервисы" variant="all" />
      </div>

      {showNewServiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Новый сервис</h2>
            <div className="space-y-6">
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? "border-blue-600 bg-blue-100"
                    : "border-blue-500 bg-blue-50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="space-y-2">
                  <img src={SendIcon} className="w-6 mx-auto" alt="" />
                  <p className="font-bold">
                    Переместите Изображение или выберите его в "Обзоре"
                  </p>
                  <p className="text-sm text-gray-500">
                    Формат: png, jpeg, svg
                  </p>
                  <Button
                    onClick={handleBrowseClick}
                    className="bg-blue-600 hover:bg-blue-700 rounded-[8px] px-4 py-1 text-white"
                  >
                    Обзор
                  </Button>
                  <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileInputChange}
                  />
                </div>
              </div>
            </div>

            <input
              type="text"
              placeholder="Название"
              className="border p-2 rounded"
              value={serviceForm.title}
              onChange={(e) =>
                setServiceForm((prev) => ({ ...prev, title: e.target.value }))
              }
            />
            <input
              type="text"
              placeholder="Описание"
              className="border p-2 rounded"
              value={serviceForm.description}
              onChange={(e) =>
                setServiceForm((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
            <input
              type="text"
              placeholder="Ссылка"
              className="border p-2 rounded"
              value={serviceForm.link}
              onChange={(e) =>
                setServiceForm((prev) => ({ ...prev, link: e.target.value }))
              }
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowNewServiceModal(false)}
                className="px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500 transition"
              >
                Отмена
              </button>
              <button
                onClick={addService}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      )}

      {showEditServiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Редактировать сервис</h2>

            {!editingService ? (
              <div className="flex flex-col gap-2">
                {services.map((s) => (
                  <button
                    key={s.id}
                    className="text-left border p-2 rounded hover:bg-gray-100 transition"
                    onClick={() => setEditingService(s)}
                  >
                    {s.title}
                  </button>
                ))}
                <button
                  onClick={() => setShowEditServiceModal(false)}
                  className="mt-2 px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500 transition"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={editingService.title}
                  onChange={(e) =>
                    setEditingService({
                      ...editingService,
                      title: e.target.value,
                    })
                  }
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  value={editingService.description}
                  onChange={(e) =>
                    setEditingService({
                      ...editingService,
                      description: e.target.value,
                    })
                  }
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  value={editingService.link}
                  onChange={(e) =>
                    setEditingService({
                      ...editingService,
                      link: e.target.value,
                    })
                  }
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  value={editingService.image}
                  onChange={(e) =>
                    setEditingService({
                      ...editingService,
                      image: e.target.value,
                    })
                  }
                  className="border p-2 rounded"
                />
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    onClick={() => setEditingService(null)}
                    className="px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500 transition"
                  >
                    Отмена
                  </button>
                  <button
                    onClick={saveService}
                    className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Сохранить
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
