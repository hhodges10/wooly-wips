import { CardData } from '@/_components/ui/cardGrid';
import { TagType } from '@/_components/ui/tag';

export const projectsMock: CardData[] = [
  {
    id: 'project-1',
    link: 'projects',
    title: 'Project 1',
    image: '/knitting.png',
    tag: { id: '2', type: TagType.TERTIARY, name: 'Completed' },
  },
  {
    id: 'project-2',
    link: 'projects',
    title: 'Project 2',
    image: null,
    tag: null,
  },
  {
    id: 'project-3',
    link: 'projects',
    title: 'Project 3',
    image: '/knitting.png',
    tag: { id: '1', type: TagType.PRIMARY, name: 'In Progress' },
  },
  {
    id: 'project-4',
    link: 'projects',
    title: 'Project 4',
    image: null,
    tag: null,
  },
  {
    id: 'project-5',
    link: 'projects',
    title: 'Project 5',
    image: null,
    tag: null,
  },
  {
    id: 'project-6',
    link: 'projects',
    title: 'Project 6',
    image: '/knitting.png',
    tag: null,
  },
];
