import { Footer } from "@widgets/Footer";
import { Navbar } from "@widgets/Navbar";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <nav className="w-full sticky flex justify-center items-center h-[72px] lg:h-[92px]">
        <Navbar />
      </nav>
      <main className="min-h-screen">{children}</main>
      <footer className="w-full flex justify-center">
        <Footer />
      </footer>
    </>
  );
};
