import CardGrid from '@/_components/ui/cardGrid';
import { yarnMock } from '@/_mocks/yarn-mocks';

export default function Yarn() {
  // make API call to fetch yarn data
  const yarn = yarnMock;
  return (
    <main className="container mx-auto px-4 py-8">
      <CardGrid link="yarn" fallBackImage="/skein.png" cardData={yarn} />
    </main>
  );
}
