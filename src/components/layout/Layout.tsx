import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Breadcrumb } from '../common/Breadcrumb';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const isListingPage = ['/machines', '/services', '/about', '/contact', '/profile'].includes(pathname);
  const showBreadcrumb = !isHomePage && !isListingPage;

  // Scroll restoration
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showBreadcrumb && <Breadcrumb />}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
