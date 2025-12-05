//index.ts

export type Industry = "dental" | "vision" | "veterinarian" | null;
export type AppStep = "industry" | "equipment" | "chatbot";

export interface IndustryCardProps {
  title?: string;
  icon?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  isLoading?: boolean;
}
export interface EquipmentButtonProps {
  label?: string;
  selected?: boolean;
  onClick?: () => void;
  isLoading?: boolean;
}

export interface IndustrySectionProps {
  selectedIndustry: Industry;
  onSelectIndustry: (industry: Industry) => void;
  fadeIn: boolean;
  isLoading?: boolean;
}

export interface EquipmentSectionProps {
  equipment: string[];
  selectedEquipment: string | null;
  onSelectEquipment: (equipment: string) => void;
  onFindEquipment: () => void;
  fadeIn: boolean;
  isLoading?: boolean;
}

export interface ChatbotPageProps {
  fadeIn: boolean;
}

export interface LandingPageProps {
  onGetStarted: () => void;
  isLoading?: boolean;
}
