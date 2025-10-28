import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";
import { Search } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { UserDropdown } from "./UserDropdown";
import { useClickOutside } from "@shared/hooks/useClickOutside";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setMenuOpen(false));

  const isAuth = true;

  return (
    <div className="max-w-[1440px] w-full mx-5 flex justify-between items-center border-b relative">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      {/* Кнопка открытия мобильного меню */}
      <div
        onClick={() => setMenuOpen((prev) => !prev)}
        className="flex flex-col gap-1 justify-center lg:hidden cursor-pointer"
      >
        <div className="h-0.5 w-5 bg-black rounded-sm" />
        <div className="h-0.5 w-5 bg-black rounded-sm" />
        <div className="h-0.5 w-5 bg-black rounded-sm" />
      </div>

      {menuOpen && <MobileMenu ref={menuRef} />}

      {/* Десктопная навигация */}
      <div className="hidden items-center gap-4 lg:flex">
        <NavLinks />

        <div className="flex gap-2 items-center pr-4 border-r">
          <Input placeholder="Начните искать..." />
          <Button className="bg-secondary hover:bg-green-600 h-8 w-8 p-0 flex justify-center items-center">
            <Search />
          </Button>
        </div>

        {isAuth ? (
          <UserDropdown />
        ) : (
          <Link to="/sign-in">
            <Button className="cursor-pointer">Войти</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
