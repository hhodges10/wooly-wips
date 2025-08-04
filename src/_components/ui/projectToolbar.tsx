'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button, { ButtonVariant } from './button';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import { addProject } from '../../../lib/projects';

export default function ProjectToolbar() {
  return (
    <>
      <div className="flex justify-between pb-5 px-5">
        <Button
          variant={ButtonVariant.iconSolid}
          onClick={() => addProject()} // // refactor to remove mock data & to follow best practices
        >
          <FontAwesomeIcon icon={faPlus} className="h-3.5" />
          Add Project
        </Button>
        {/* add onclick handler to open filter modal */}
        <Button variant={ButtonVariant.iconOutline}>
          <FontAwesomeIcon icon={faFilter} className="h-3.5" />
        </Button>
      </div>
    </>
  );
}
