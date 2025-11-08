import { Rocket, Globe, Cpu, Star, Sparkles } from "lucide-react";

/**
 * Maps icon names to Lucide React icon components
 */
export const iconMap = {
  Rocket,
  Globe,
  Cpu,
  Star,
  Sparkles,
};

/**
 * Gets an icon component by name
 * @param {string} iconName - The name of the icon
 * @returns {React.Component} - The icon component
 */
export function getIcon(iconName) {
  return iconMap[iconName] || Globe;
}

