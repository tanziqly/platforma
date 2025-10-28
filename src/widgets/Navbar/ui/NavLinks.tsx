import { Link } from "react-router-dom";

export const NavLinks = () => (
  <>
    <Link className="text-neutral-400 hover:text-neutral-600" to="/">
      Новое
    </Link>
    <Link className="text-neutral-400 hover:text-neutral-600" to="/">
      О нас
    </Link>
    <Link className="text-neutral-400 hover:text-neutral-600" to="/">
      Обучение
    </Link>
  </>
);
