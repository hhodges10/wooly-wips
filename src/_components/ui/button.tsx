export interface ButtonProps {
  isPrimary?: boolean;
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: () => void;
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

enum ButtonSizeClasses {
  small = 'text-base py-1 px-2 rounded-sm',
  medium = 'text-base py-2 px-4 rounded-md',
  large = 'text-lg py-3 px-6 rounded-md',
}

enum ButtonColorClasses {
  primary = 'bg-pomegranate hover:bg-pomegranate-dark',
  secondary = 'bg-harbor hover:bg-harbor-dark',
}

export default function Button({
  isPrimary = true,
  size = ButtonSize.MEDIUM,
  children,
  onClick,
}: ButtonProps) {
  const sizeClasses = ButtonSizeClasses[size];
  const colorClasses = isPrimary
    ? ButtonColorClasses.primary
    : ButtonColorClasses.secondary;
  return (
    <button
      onClick={onClick}
      className={`text-bone font-bold transition-colors duration-200 cursor-pointer
        ${sizeClasses} ${colorClasses}`}
    >
      {children}
    </button>
  );
}
