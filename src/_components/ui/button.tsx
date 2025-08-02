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
  [ButtonSize.small]: 'text-base h-[35px] py-1 px-2 rounded-sm',
  [ButtonSize.medium]: 'text-base h-[44px] py-2 px-4 rounded-md',
  [ButtonSize.large]: 'text-lg h-[56px] py-3 px-6 rounded-md',
};

const buttonTypeClasses: Record<ButtonVariant, string> = {
  [ButtonVariant.primarySolid]:
    'bg-lilac-1 hover:bg-lilac-2 text-lilac-4 focus:outline-lilac-4',
  [ButtonVariant.secondarySolid]:
    'bg-pink-1 hover:bg-pink-2 text-pink-4 focus:outline-pink-4',
  [ButtonVariant.primaryGhost]:
    'bg-transparent border-2 border-lilac-4 text-lilac-4 hover:bg-lilac-4 hover:text-bone focus:outline-lilac-4 active:bg-lilac-5',
  [ButtonVariant.secondaryGhost]:
    'bg-transparent border-2 border-pink-4 text-pink-4 hover:bg-pink-4 hover:text-bone focus:outline-pink-4 active:bg-pink-5',
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
      className={`font-bold transition-colors duration-100 cursor-pointer focus:outline-2 focus:outline-offset-1
        ${sizeClasses} ${variantClasses}`}
    >
      {children}
    </button>
  );
}
