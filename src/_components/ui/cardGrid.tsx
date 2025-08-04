import Link from 'next/link';
import Card, { TagData } from './card';

export interface CardData {
  id: string;
  title: string;
  image: string | null;
  tag: TagData | null;
}

export default function CardGrid({
  link,
  fallBackImage = '/yarnbasket.png',
  cardData,
}: {
  link: string;
  fallBackImage?: string;
  cardData: CardData[];
}) {
  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-8">
      {cardData.map((card) => (
        <Link key={card.id} href={`/${link}/${card.id}`}>
          <Card
            title={card.title}
            image={card.image || undefined}
            fallbackImage={fallBackImage}
            tag={card.tag || undefined}
          />
        </Link>
      ))}
    </div>
  );
}
