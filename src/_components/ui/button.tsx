export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export enum ButtonVariant {
  primarySolid = 'solid-primary',
  secondarySolid = 'solid-secondary',
  primaryGhost = 'ghost-primary',
  secondaryGhost = 'ghost-secondary',
  iconSolid = 'icon-solid',
  iconOutline = 'icon-outline',
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
    'bg-lilac-1 text-lilac-4 hover:bg-lilac-2 active:bg-lilac-3',
  [ButtonVariant.secondarySolid]:
    'bg-pink-1 text-pink-4 hover:bg-pink-2 active:bg-pink-3',
  [ButtonVariant.primaryGhost]:
    'bg-transparent border-2 border-lilac-4 text-lilac-4 hover:bg-lilac-1 active:bg-lilac-2',
  [ButtonVariant.secondaryGhost]:
    'bg-transparent border-2 border-pink-4 text-pink-4 hover:bg-pink-1 active:bg-pink-2',
  [ButtonVariant.iconSolid]:
    'bg-pink-1 text-pink-4 text-xs rounded-full px-3 py-2 hover:bg-pink-2 active:bg-pink-3',
  [ButtonVariant.iconOutline]:
    'bg-transparent text-xs border-2 border-transparent hover:border-text/60 active:bg-text/10 rounded-full px-3 py-2',
};

// TODO - refactor to split variants into separate components, e.g. IconButton, SolidButton, GhostButton
export default function Button({
  variant = ButtonVariant.primarySolid,
  size = ButtonSize.medium,
  children,
  className = '',
  onClick,
}: ButtonProps) {
  const sizeClasses =
    variant !== ButtonVariant.iconSolid && variant !== ButtonVariant.iconOutline
      ? buttonSizeClasses[size] || buttonSizeClasses.medium
      : '';
  const variantClasses =
    buttonTypeClasses[variant] || buttonTypeClasses[ButtonVariant.primarySolid];
  return (
    <button
      onClick={onClick}
      className={`font-bold cursor-pointer flex items-center justify-center gap-2 ${className}
        ${sizeClasses} ${variantClasses}`}
    >
      {children}
    </button>
  );
}
