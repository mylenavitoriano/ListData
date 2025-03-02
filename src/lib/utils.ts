import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// combina classes css para otimizar a aplicação
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
