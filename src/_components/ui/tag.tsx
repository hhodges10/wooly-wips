export interface TagProps {
  id: string;
  type?: TagType;
  children: React.ReactNode;
}

export enum TagType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DEFAULT = 'default',
}

enum TagColors {
  primary = 'bg-pomegranate-light text-pomegranate-dark',
  secondary = 'bg-harbor-light text-harbor-dark',
  default = 'bg-oatmeal-light text-oatmeal-dark',
}

export default function Tag({
  id,
  type = TagType.DEFAULT,
  children: name,
}: TagProps) {
  const colorClasses = TagColors[type];
  return (
    <span
      key={id}
      className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${colorClasses}`}
    >
      {name}
    </span>
  );
}
