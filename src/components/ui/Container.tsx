import { cn } from '@/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

export function Container({ children, className, fluid = false }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-4 md:px-6 lg:px-8',
        !fluid && 'max-w-7xl',
        className
      )}
    >
      {children}
    </div>
  );
}
