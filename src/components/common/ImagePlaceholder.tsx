import { cn } from '@/utils/cn';

interface ImagePlaceholderProps {
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide';
  className?: string;
  text?: string;
}

export function ImagePlaceholder({
  aspectRatio = 'video',
  className,
  text = 'SUBHAM INDUSTRIES',
}: ImagePlaceholderProps) {
  const aspectRatios = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]',
  };

  return (
    <div
      className={cn(
        'bg-neutral-100 flex items-center justify-center border border-neutral-200 rounded-lg overflow-hidden',
        aspectRatios[aspectRatio],
        className
      )}
    >
      <div className="text-center p-6">
        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-primary font-black text-2xl">SI</span>
        </div>
        <span className="text-neutral-400 font-bold text-sm tracking-widest uppercase">
          {text}
        </span>
      </div>
    </div>
  );
}
