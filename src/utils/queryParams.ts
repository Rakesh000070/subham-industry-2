import { machines } from '@/data/machines';
import { Product } from '@/types';

/**
 * Extracts query parameters from the current URL.
 */
export function getQueryParam(param: string): string | null {
  if (typeof window === 'undefined') return null;
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(param);
}

/**
 * Finds a machine by its slug.
 */
export function getMachineBySlug(slug: string | null): Product | undefined {
  if (!slug) return undefined;
  return machines.find(m => m.slug === slug);
}
