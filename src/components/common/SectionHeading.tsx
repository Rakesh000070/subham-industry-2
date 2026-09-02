import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
  underline?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  alignment = 'left',
  className,
  underline = true,
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'mb-12 space-y-4',
      alignment === 'center' ? 'text-center' : 'text-left',
      className
    )}>
      <div className={cn(
        'inline-block',
        alignment === 'center' ? 'mx-auto' : ''
      )}>
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight mb-2 uppercase">
          {title}
        </h2>
        {underline && (
          <div className={cn(
            'h-1.5 w-20 bg-primary rounded-full',
            alignment === 'center' ? 'mx-auto' : ''
          )} />
        )}
      </div>
      {subtitle && (
        <p className="text-neutral-600 text-lg max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
