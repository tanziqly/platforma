import { Footer } from "@widgets/Footer";
import { Navbar } from "@widgets/Navbar";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="min-h-screen">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
