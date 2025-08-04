import CardGrid from '@/_components/ui/cardGrid';
import { projectsMock } from '@/_mocks/projects-mock';
import ProjectToolbar from '@/_components/ui/projectToolbar';
import { fetchProjects } from '../../../lib/projects';

export default async function Projects() {
  // refactor to remove mock data & to follow best practices
  // also need to fetch after adding a project
  const projects = (await fetchProjects()) || projectsMock;
  return (
    <main className="container w-full mx-auto px-10 py-8">
      <ProjectToolbar />
      <CardGrid link="projects" fallBackImage="/wip.png" cardData={projects} />
    </main>
  );
}
