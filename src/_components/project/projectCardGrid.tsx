'use client';
import { useEffect, useState } from 'react';
import CardGrid, { CardData } from '../ui/cardGrid';
import { addProject, fetchProjects, ProjectData } from '../../../lib/projects';
import ProjectToolbar from '../ui/projectToolbar';

export default function ProjectCardGrid() {
  const [projects, setProjects] = useState<CardData[]>([]);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  const handleAddProject = (newProject: ProjectData) => {
    addProject(newProject).then(() => {
      fetchProjects().then(setProjects);
    });
  };

  return (
    <>
      <ProjectToolbar onAddProject={handleAddProject} />
      <CardGrid link="projects" fallBackImage="/wip.png" cardData={projects} />
    </>
  );
}
