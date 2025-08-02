export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: () => void;
}

export enum ButtonVariant {
  primarySolid = 'solid-primary',
  secondarySolid = 'solid-secondary',
  primaryGhost = 'ghost-primary',
  secondaryGhost = 'ghost-secondary',
}

export enum ButtonSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

const buttonSizeClasses: Record<ButtonSize, string> = {
  [ButtonSize.small]: 'text-base py-1 px-2 rounded-sm border-[1.5px]',
  [ButtonSize.medium]: 'text-base py-2 px-4 rounded-md',
  [ButtonSize.large]: 'text-lg py-3 px-6 rounded-md',
};

const buttonTypeClasses: Record<ButtonVariant, string> = {
  [ButtonVariant.primarySolid]:
    'bg-lilac-light border-lilac-light hover:border-lilac text-lilac',
  [ButtonVariant.secondarySolid]:
    'bg-pink-light border-pink-light hover:border-pink text-pink',
  [ButtonVariant.primaryGhost]:
    'bg-transparent border-lilac text-lilac hover:bg-lilac hover:text-bone',
  [ButtonVariant.secondaryGhost]:
    'bg-transparent border-pink text-pink hover:bg-pink hover:text-bone',
};

export default function Button({
  variant = ButtonVariant.primarySolid,
  size = ButtonSize.medium,
  children,
  onClick,
}: ButtonProps) {
  const sizeClasses = buttonSizeClasses[size] || buttonSizeClasses.medium;
  const variantClasses =
    buttonTypeClasses[variant] || buttonTypeClasses[ButtonVariant.primarySolid];
  return (
    <button
      onClick={onClick}
      className={`font-bold transition-colors duration-200 cursor-pointer border-2
        ${sizeClasses} ${variantClasses}`}
    >
      {children}
    </button>
  );
}
