import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

export const Layout: FC = () => {
  return (
    <section>
      <Header />
      <main>
        <Navbar />
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};
