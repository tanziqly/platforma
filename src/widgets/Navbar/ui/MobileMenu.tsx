import { forwardRef, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@shared/ui/avatar";
import { ChevronDown, Search } from "lucide-react";
import { useClickOutside } from "@shared/hooks/useClickOutside";
import { useAuth } from "@features/auth/hooks/useAuth";

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(({ onClose }, ref) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isAuth, userDisplayName, userInitials, logout } = useAuth();

  useClickOutside(dropdownRef, () => setOpen(false));

  const handleLogout = () => {
    logout();
    setOpen(false);
    onClose();
  };

  const handleLinkClick = () => {
    setOpen(false);
    onClose();
  };

  return (
    <div
      ref={ref}
      className="absolute mx-5 lg:hidden inset-x-0 py-6 top-0 mt-20 bg-white border rounded-xl flex flex-col items-center gap-4 z-50"
    >
      <div className="w-full px-8 flex flex-col items-center gap-4">
        <Link
          className="text-start w-full text-neutral-400 hover:text-neutral-600"
          to="/"
          onClick={handleLinkClick}
        >
          Новое
        </Link>
        <Link
          className="text-start w-full text-neutral-400 hover:text-neutral-600"
          to="/about"
          onClick={handleLinkClick}
        >
          О нас
        </Link>
        <Link
          className="text-start w-full text-neutral-400 hover:text-neutral-600"
          to="/learning"
          onClick={handleLinkClick}
        >
          Обучение
        </Link>

        <div className="flex w-full gap-4 items-center">
          <Input placeholder="Начните искать..." />
          <Button className="bg-secondary hover:bg-green-600 h-8 w-8 p-0 flex justify-center items-center">
            <Search />
          </Button>
        </div>

        {isAuth ? (
          <div ref={dropdownRef} className="relative w-full">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="gap-4 py-1 px-4 w-full justify-center flex items-center rounded-[12px] cursor-pointer bg-neutral-100 hover:bg-neutral-200"
            >
              <div className="flex gap-2 items-center">
                <ChevronDown className={`text-neutral-400 h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
                <span className="font-semibold">{userDisplayName}</span>
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={"https://github.com/shadcn.png"}
                  alt={userDisplayName}
                />
                <AvatarFallback>{userInitials}</AvatarFallback>
              </Avatar>
            </button>

            {open && (
              <div className="absolute w-full right-0 mt-2 bg-white flex flex-col gap-1 px-2 py-2 border rounded-xl shadow-md z-50">
                <Link
                  to="/profile"
                  onClick={handleLinkClick}
                  className="font-semibold w-full text-sm px-6 py-2 hover:bg-[#CADDFF] rounded-sm"
                >
                  Профиль
                </Link>
                <button
                  onClick={handleLogout}
                  className="font-semibold w-full text-start cursor-pointer text-sm px-6 py-2 hover:bg-[#CADDFF] rounded-sm"
                >
                  Выйти
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/sign-in" onClick={handleLinkClick}>
            <Button className="cursor-pointer">Войти</Button>
          </Link>
        )}
      </div>
    </div>
  );
});

MobileMenu.displayName = "MobileMenu";