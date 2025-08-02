import Image, { StaticImageData } from 'next/image';
import Tag, { TagType } from './tag';

export interface CardProps {
  image?: string | StaticImageData;
  title: string;
  tag?: TagData;
}

export interface TagData {
  id: string;
  type?: TagType;
  name: string;
}

export default function Card({ image, title, tag }: CardProps) {
  return (
    <div
      className={`bg-bone rounded-lg max-w-xs w-full pb-6 shadow-lg hover:cursor-pointer transition-transform duration-200 hover:scale-[1.02]`}
    >
      <div className="p-1.5 rounded-lg">
        {image ? (
          <Image
            src={image}
            width={400}
            height={400}
            alt={title}
            priority={true}
            className="w-full h-64 object-cover"
          />
        ) : (
          <div className="w-full h-64 bg-mint-light flex items-center justify-center">
            <Image
              src="/wip.png"
              width={100}
              height={100}
              alt="No image available"
            />
            <span className="sr-only">No image available</span>
          </div>
        )}
      </div>
      <div className="px-4 flex flex-row justify-between items-center gap-1 mt-4">
        <h2 className="text-xl font-semibold text-nowrap text-ellipsis overflow-hidden max-w-[68%]">
          {title}
        </h2>
        {tag && (
          <Tag key={tag.id} id={tag.id} type={tag.type} className="max-w-[30%]">
            {tag.name}
          </Tag>
        )}
      </div>
    </div>
  );
}
