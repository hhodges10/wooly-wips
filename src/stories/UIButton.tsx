import Button, { ButtonProps } from '@/_components/ui/button';

export const UIButton = ({
  isPrimary = true,
  size = 'medium',
  children,
}: ButtonProps) => {
  return (
    <Button isPrimary={isPrimary} size={size}>
      {children}
    </Button>
  );
};
