import { IconPlus as Icon } from '../Icon/Icons';

export const ButtonType = {
  DEFAULT: 'default' as const,
  PRIMARY: 'primary' as const,
  SECONDARY: 'secondary' as const,
  TERTIARY: 'tertiary' as const,
};

export const ButtonSize = {
  SMALL: 'small' as const,
  MEDIUM: 'medium' as const,
  LARGE: 'large' as const,
};

export interface ButtonProps {
  className?: string;
  label: string;
  onClick?: () => void;
  size?: (typeof ButtonSize)[keyof typeof ButtonSize];
  type?: (typeof ButtonType)[keyof typeof ButtonType];
  isRound?: boolean;
  Icon?: typeof Icon;
}
