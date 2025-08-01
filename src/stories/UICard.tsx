import Card, { CardProps } from '@/_components/ui/card';

export const UICard = ({ image, title, description, tags }: CardProps) => {
  return (
    <Card
      image={image}
      title={title}
      description={description}
      tags={tags}
    ></Card>
  );
};
