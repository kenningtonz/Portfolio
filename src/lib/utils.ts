import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function openInNewTab(url: string) {
	const newWindow = window.open(url, "_blank");
	if (newWindow) {
		newWindow.focus();
	}
}
