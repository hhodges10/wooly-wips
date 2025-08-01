import Image, { StaticImageData } from 'next/image';
import Tag, { TagProps } from './tag';

export interface CardProps {
  image?: string | StaticImageData;
  title: string;
  description: string;
  tags?: TagProps[];
}

export default function Card({ image, title, description, tags }: CardProps) {
  return (
    <div className={`bg-bone rounded shadow-md max-w-xs w-full pb-6`}>
      <Image
        src={image || '/placeholder-image.png'}
        alt={title}
        priority={true}
        className="w-full h-48 pt-0 object-cover rounded-t"
      />
      <div className="px-6">
        <h2 className="text-xl font-semibold mt-8">{title}</h2>
        <p className="mt-1">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {tags.map((tag) => (
              <Tag key={tag.id} id={tag.id} type={tag.type}>
                {tag.children}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
