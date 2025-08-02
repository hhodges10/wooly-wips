import CardGrid from '@/_components/ui/cardGrid';
import { projectsMock } from '@/_mocks/projects-mock';

export default function Projects() {
  // make API call to fetch projects
  const projects = projectsMock;
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <CardGrid cardData={projects} />
    </main>
  );
}
