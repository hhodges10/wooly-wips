import Button, { ButtonVariant } from '@/_components/ui/button';
import CardGrid from '@/_components/ui/cardGrid';
import { projectsMock } from '@/_mocks/projects-mock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  // make API call to fetch projects
  const projects = projectsMock;
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between pb-5 px-5">
        <Button variant={ButtonVariant.iconSolid}>
          <FontAwesomeIcon icon={faPlus} className="h-3.5" />
          Add Project
        </Button>
        {/* add onclick handler to open filter modal */}
        <Button variant={ButtonVariant.iconOutline}>
          <FontAwesomeIcon icon={faFilter} className="h-3.5" />
        </Button>
      </div>
      <CardGrid link="projects" fallBackImage="/wip.png" cardData={projects} />
    </main>
  );
}
