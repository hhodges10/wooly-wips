import { CardData } from '@/_components/ui/cardGrid';
import { TagType } from '@/_components/ui/tag';

export const projectsMock: CardData[] = [
  {
    id: 'project-1',
    title: 'Project 1',
    image: '/knitting.png',
    tag: { id: '2', type: TagType.TERTIARY, name: 'Completed' },
  },
  {
    id: 'project-2',
    title: 'Project 2',
    image: null,
    tag: null,
  },
  {
    id: 'project-3',
    title: 'Project 3',
    image: '/knitting.png',
    tag: { id: '1', type: TagType.PRIMARY, name: 'In Progress' },
  },
  {
    id: 'project-4',
    title: 'Project 4',
    image: null,
    tag: null,
  },
  {
    id: 'project-5',
    title: 'Project 5',
    image: null,
    tag: null,
  },
  {
    id: 'project-6',
    title: 'Project 6',
    image: '/knitting.png',
    tag: null,
  },
  {
    id: 'project-7',
    title: 'Project 7',
    image: null,
    tag: null,
  },
  {
    id: 'project-8',
    title: 'Project 8',
    image: '/knitting.png',
    tag: { id: '1', type: TagType.PRIMARY, name: 'In Progress' },
  },
  {
    id: 'project-9',
    title: 'Project 9',
    image: null,
    tag: null,
  },
  {
    id: 'project-10',
    title: 'Project 10',
    image: null,
    tag: null,
  },
  {
    id: 'project-11',
    title: 'Project 11',
    image: '/knitting.png',
    tag: null,
  },
];
