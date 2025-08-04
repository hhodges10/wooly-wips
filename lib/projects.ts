'use server';
import { CardData } from '@/_components/ui/cardGrid';
import client from './mongodb';

// refactor to take in parameters instead of using mock data
// also add error handling & validation
export async function addProject() {
  const project: CardData = {
    id: 'new-project-id',
    title: 'New Project',
    image: null,
    tag: null,
  };
  client.db('woolywips').collection('projects').insertOne({
    title: project.title,
    image: project.image,
    tag: project.tag,
    createdAt: new Date(),
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
