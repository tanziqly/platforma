import { Footer } from "@widgets/Footer";
import { Navbar } from "@widgets/Navbar";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <nav className="w-full fixed flex justify-center items-center h-[72px] lg:h-[92px]">
        <Navbar />
      </nav>
      <main className="min-h-screen">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
