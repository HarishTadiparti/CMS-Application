import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const emptySpace = (value: string) => {
  return value.replace(/^\s+/, '');
};

export const stateVariants: { [state: string]: string } = {
  Published: 'bg-[#d1fadf] text-[#013719] hover:bg-green-500/40',
  Draft: 'bg-[#ffefc7] text-yellow-700 hover:bg-yellow-500/50',
  Archived: 'bg-zinc-200 text-zinc-700 hover:bg-zinc-300',
};
