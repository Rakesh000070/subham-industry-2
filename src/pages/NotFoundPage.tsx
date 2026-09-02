import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Box, Home, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-[80vh] items-center justify-center bg-white py-20">
      <Container>
        <div className="text-center max-w-xl mx-auto">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative bg-neutral-50 p-10 rounded-full border border-neutral-100 shadow-xl">
              <Box className="h-20 w-20 text-neutral-300" />
            </div>
          </div>
          
          <h1 className="text-6xl font-black text-charcoal mb-4">404</h1>
          <h2 className="text-2xl font-bold text-charcoal mb-6">Page Not Found</h2>
          <p className="text-neutral-500 mb-10 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/machines">
                <Search className="mr-2 h-5 w-5" />
                Search Machines
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
