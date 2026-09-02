import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Settings } from 'lucide-react';
import { Product } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { cn } from '@/utils/cn';

interface MachineCardProps {
  machine: Product;
  variant?: 'grid' | 'list';
  className?: string;
}

export function MachineCard({ machine, variant = 'grid', className }: MachineCardProps) {
  const detailPath = `/machines/${machine.category.toLowerCase().replace(/ /g, '-')}/${machine.slug}`;

  if (variant === 'list') {
    return (
      <Card className={cn(
        'group overflow-hidden border-neutral-100 hover:border-primary/20 transition-all duration-300 hover:shadow-lg',
        className
      )}>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-72 relative shrink-0 overflow-hidden">
            {machine.images?.[0] ? (
              <img 
                src={machine.images[0]} 
                alt={machine.name}
                className="w-full h-full object-cover aspect-video md:aspect-square transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            ) : (
              <ImagePlaceholder aspectRatio="square" text={machine.model || 'SI'} className="rounded-none border-none" />
            )}
            <div className="absolute top-4 left-4">
              <Badge variant="success" className="bg-white/90 backdrop-blur shadow-sm">
                {machine.category}
              </Badge>
            </div>
          </div>
          
          <div className="flex-grow p-6 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-charcoal group-hover:text-primary transition-colors">
                  {machine.name}
                </h3>
                {machine.model && (
                  <Badge variant="outline" className="bg-neutral-50 text-neutral-500 font-mono text-[10px]">
                    {machine.model}
                  </Badge>
                )}
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
                {machine.shortDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {machine.specifications.slice(0, 4).map((spec) => (
                  <div key={spec.label} className="flex items-center space-x-2">
                    <div className="bg-primary/5 p-1 rounded">
                      <Settings className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">{spec.label}</p>
                      <p className="text-xs text-charcoal font-bold">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-end border-t border-neutral-50 pt-6">
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <Link to={detailPath}>View Details</Link>
              </Button>
              <Button className="w-full sm:w-auto group/btn" asChild>
                <Link to="/contact">
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn(
      'group flex flex-col h-full border-neutral-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
      className
    )}>
      <div className="relative aspect-video overflow-hidden">
        {machine.images?.[0] ? (
          <img 
            src={machine.images[0]} 
            alt={machine.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        ) : (
          <ImagePlaceholder aspectRatio="video" text={machine.model || 'SI'} />
        )}
        <div className="absolute top-4 left-4">
          <Badge variant="success" className="bg-white/90 backdrop-blur shadow-sm">
            {machine.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="flex-grow pt-6">
        <div className="flex flex-col gap-1 mb-3">
          <h3 className="text-xl font-bold text-charcoal group-hover:text-primary transition-colors line-clamp-1">
            {machine.name}
          </h3>
          {machine.model && (
            <span className="text-[10px] text-neutral-400 font-mono tracking-wider">
              MODEL: {machine.model}
            </span>
          )}
        </div>
        
        <p className="text-neutral-500 text-sm leading-relaxed mb-6 line-clamp-2">
          {machine.shortDescription}
        </p>
        
        <div className="space-y-2 border-t border-neutral-50 pt-4">
          {machine.specifications.slice(0, 2).map((spec) => (
            <div key={spec.label} className="flex justify-between items-center text-xs">
              <span className="text-neutral-400 font-medium">{spec.label}</span>
              <span className="text-charcoal font-bold">{spec.value}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-0 pb-6 grid grid-cols-2 gap-3 border-none bg-transparent">
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link to={detailPath}>Details</Link>
        </Button>
        <Button size="sm" className="w-full group/btn" asChild>
          <Link to="/contact">
            Quote
            <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
