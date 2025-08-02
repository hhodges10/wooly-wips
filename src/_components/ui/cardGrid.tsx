import Link from 'next/link';
import Card, { TagData } from './card';

export interface CardData {
  id: string;
  link: string;
  title: string;
  image: string | null;
  tag: TagData | null;
}

export default function CardGrid({ cardData }: { cardData: CardData[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cardData.map((card) => (
        <Link key={card.id} href={`/${card.link}/${card.id}`}>
          <Card
            title={card.title}
            image={card.image || undefined}
            tag={card.tag || undefined}
          />
        </Link>
      ))}
    </div>
  );
}
