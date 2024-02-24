import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimeStamp = (createdAt: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - createdAt.getTime();

  // Convert milliseconds to seconds
  const diffSeconds = Math.round(diffMs / 1000);

  // Calculate time differences
  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86400;
  const secondsInWeek = 604800;
  const secondsInYear = 31536000;

  if (diffSeconds < secondsInMinute) {
    return `${diffSeconds} second${diffSeconds > 1 ? "s" : ""} ago`;
  } else if (diffSeconds < secondsInHour) {
    const minutes = Math.floor(diffSeconds / secondsInMinute);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (diffSeconds < secondsInDay) {
    const hours = Math.floor(diffSeconds / secondsInHour);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (diffSeconds < secondsInWeek) {
    const days = Math.floor(diffSeconds / secondsInDay);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (diffSeconds < secondsInYear) {
    const weeks = Math.floor(diffSeconds / secondsInWeek);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(diffSeconds / secondsInYear);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
};

export function formatNumbers(num: number): string {
  if (num >= 1000000) {
    let simplified = (num / 1000000).toFixed(1);
    return simplified.replace(".0", "") + "M";
  } else if (num >= 1000) {
    let simplified = (num / 1000).toFixed(1);
    return simplified.replace(".0", "") + "K";
  } else {
    return num.toString();
  }
}
