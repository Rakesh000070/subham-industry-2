import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/utils/cn';

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (location.pathname === '/') return null;

  return (
    <div className="bg-neutral-50 border-b border-neutral-200 py-3">
      <Container>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-neutral-500 font-medium">
            <li className="flex items-center">
              <Link to="/" className="hover:text-primary transition-colors flex items-center">
                <Home className="h-4 w-4" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              const label = value.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

              return (
                <li key={to} className="flex items-center">
                  <ChevronRight className="h-4 w-4 mx-1 text-neutral-300" />
                  {last ? (
                    <span className="text-charcoal font-bold" aria-current="page">
                      {label}
                    </span>
                  ) : (
                    <Link to={to} className="hover:text-primary transition-colors">
                      {label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
      
      {/* Schema.org BreadcrumbList JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": window.location.origin
            },
            ...pathnames.map((value, index) => ({
              "@type": "ListItem",
              "position": index + 2,
              "name": value.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
              "item": `${window.location.origin}/${pathnames.slice(0, index + 1).join('/')}`
            }))
          ]
        })}
      </script>
    </div>
  );
}
