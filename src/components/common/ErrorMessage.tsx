import { AlertCircle, X } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ErrorMessageProps {
  title?: string;
  message: string;
  onDismiss?: () => void;
  className?: string;
}

export function ErrorMessage({ title = 'Error Occurred', message, onDismiss, className }: ErrorMessageProps) {
  return (
    <div className={cn(
      'bg-error/5 border border-error/20 rounded-lg p-4 flex items-start gap-4',
      className
    )}>
      <AlertCircle className="h-5 w-5 text-error shrink-0 mt-0.5" />
      <div className="flex-grow">
        <h5 className="text-error font-bold text-sm mb-1">{title}</h5>
        <p className="text-error/80 text-sm leading-relaxed">{message}</p>
      </div>
      {onDismiss && (
        <button 
          onClick={onDismiss}
          className="text-error/60 hover:text-error transition-colors p-1"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
