'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button, { ButtonVariant } from './button';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import AddProjectModal from '../project/addProjectModal';
import { ProjectData } from '../../../lib/projects';

export default function ProjectToolbar({
  onAddProject,
}: {
  onAddProject: (newProject: ProjectData) => void;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addProjectAndClose = async (newProject: ProjectData) => {
    onAddProject(newProject);
    closeModal();
  };

  return (
    <>
      <div className="flex justify-between pb-5 px-5">
        <Button variant={ButtonVariant.iconSolid} onClick={openModal}>
          <FontAwesomeIcon icon={faPlus} className="h-3.5" />
          Add Project
        </Button>
        {/* add onclick handler to open filter modal */}
        <Button variant={ButtonVariant.iconOutline}>
          <FontAwesomeIcon icon={faFilter} className="h-3.5" />
        </Button>
      </div>
      <AddProjectModal
        isOpen={isModalOpen}
        onCloseModal={closeModal}
        onAddProject={addProjectAndClose}
      />
    </>
  );
}
