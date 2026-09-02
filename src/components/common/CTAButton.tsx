import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

interface CTAButtonProps {
  variant?: 'quote' | 'enquire' | 'contact';
  mode?: 'button' | 'link';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

export function CTAButton({
  variant = 'quote',
  mode = 'link',
  className,
  size = 'md',
  showIcon = true,
}: CTAButtonProps) {
  const config = {
    quote: {
      text: 'Request a Quote',
      icon: ArrowRight,
      href: '/contact',
      btnVariant: 'primary' as const,
    },
    enquire: {
      text: 'Enquire Now',
      icon: MessageSquare,
      href: '/contact',
      btnVariant: 'secondary' as const,
    },
    contact: {
      text: 'Contact Sales',
      icon: PhoneCall,
      href: '/contact',
      btnVariant: 'outline' as const,
    },
  };

  const { text, icon: Icon, href, btnVariant } = config[variant];

  if (mode === 'link') {
    return (
      <Button asChild variant={btnVariant} size={size} className={cn('group', className)}>
        <Link to={href}>
          {text}
          {showIcon && <Icon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
        </Link>
      </Button>
    );
  }

  return (
    <Button variant={btnVariant} size={size} className={cn('group', className)}>
      {text}
      {showIcon && <Icon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </Button>
  );
}
