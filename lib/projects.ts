'use server';
import client from './mongodb';

export interface ProjectData {
  title: string;
  image?: string;
  tag?: string;
  description?: string;
}

// refactor to take in parameters instead of using mock data
// also add error handling & validation
export async function addProject(project: ProjectData) {
  client
    .db('woolywips')
    .collection('projects')
    .insertOne({
      title: project.title,
      image: project.image || '/knitting.png',
      tag: project.tag,
      createdAt: new Date(),
      description: project.description,
    });
}

// refactor to take in parameters for filtering, pagination, etc.
// also add error handling & validation
export async function fetchProjects() {
  const projects = await client
    .db('woolywips')
    .collection('projects')
    .find()
    .toArray();
  return projects.map((proj) => ({
    id: proj._id.toString(),
    title: proj.title,
    image: proj.image,
    tag: proj.tag,
  }));
}
