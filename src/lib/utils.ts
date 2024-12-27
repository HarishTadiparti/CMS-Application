import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const stateVariants: { [state: string]: string } = {
  Published: 'bg-[#d1fadf] text-[#013719]',
  Draft: 'bg-[#ffefc7] text-yellow-700',
  Archived: 'bg-zinc-200 text-zinc-700'
};
