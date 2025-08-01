import Tag, { TagType } from '@/_components/ui/tag';

export const UITag = ({
  id,
  type = TagType.DEFAULT,
  children: name,
}: {
  id: string;
  type?: TagType;
  children: React.ReactNode;
}) => {
  return (
    <Tag id={id} type={type}>
      {name}
    </Tag>
  );
};
