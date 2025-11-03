import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@shared/ui/dialog";

import { Button } from "@shared/ui/button";
import { Label } from "@shared/ui/label";
import { Input } from "@shared/ui/input";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Modal = ({ open, setOpen }: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[480px] rounded-2xl">
        <DialogHeader>
          <DialogTitle>Редактирование профиля</DialogTitle>
        </DialogHeader>
        <form className="flex w-full flex-col gap-3 mt-4">
          <div>
            <Label className="mb-1 text-neutral-500">Имя</Label>
            <Input placeholder="Михаил" defaultValue="Михаил" />
          </div>
          <div>
            <Label className="mb-1 text-neutral-500">Фамилия</Label>
            <Input placeholder="Новиков" defaultValue="Новиков" />
          </div>
          <div>
            <Label className="mb-1 text-neutral-500">Отчество</Label>
            <Input placeholder="Генадьевич" defaultValue="Генадьевич" />
          </div>
          <div>
            <Label className="mb-1 text-neutral-500">Короткое имя</Label>
            <Input placeholder="@m.gendievich" defaultValue="@m.gendievich" />
          </div>
          <div>
            <Label className="mb-1 text-neutral-500">Почта</Label>
            <Input
              placeholder="example@mail.com"
              defaultValue="example@mail.com"
            />
          </div>
          <div>
            <Label className="mb-1 text-neutral-500">Номер телефона</Label>
            <Input
              placeholder="8 (123) 345 - 67 - 89"
              defaultValue="8 (123) 345 - 67 - 89"
            />
          </div>
          <div>
            <Label className="mb-1 text-neutral-500">О себе</Label>
            <Input
              placeholder="Предприниматель"
              defaultValue="Предприниматель"
            />
          </div>
          <div>
            <Label className="mb-1 text-neutral-500">Город</Label>
            <Input placeholder="Липецк" defaultValue="Липецк" />
          </div>

          {/* Кнопки */}
          <div className="flex w-full gap-2 mt-4">
            <Button
              variant="secondary"
              className="flex-1 bg-gray-200 text-gray-600 hover:bg-gray-300"
              onClick={() => setOpen(false)}
              type="button"
            >
              Отменить
            </Button>

            <Button
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              type="submit"
            >
              Сохранить
            </Button>
          </div>

          <Button
            variant="outline"
            className="mt-2 text-gray-400 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
          >
            Сбросить пароль
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
