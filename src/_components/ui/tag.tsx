export interface TagProps {
  id: string;
  type?: TagType;
  className?: string;
  children: React.ReactNode;
}

export enum TagType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

enum TagColors {
  primary = 'text-lilac bg-lilac-light',
  secondary = 'text-mint bg-mint-light',
  tertiary = 'text-pink bg-pink-light',
}

export default function Tag({
  id,
  type = TagType.PRIMARY,
  className = '',
  children: name,
}: TagProps) {
  const colorClasses = TagColors[type];
  return (
    <span
      key={id}
      className={`inline-block px-2 py-1 text-xs font-medium rounded-full text-nowrap text-ellipsis overflow-hidden ${colorClasses} ${className}`}
    >
      {name}
    </span>
  );
}
