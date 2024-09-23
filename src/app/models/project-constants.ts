import { Project } from "./project-interface";

export const PROJECTS: Project[] = [
    {
    id: 1,
    name: 'Project Alpha',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'In Progress',
    deadline: new Date('2024-06-30'),
    teamMembers: ['John Doe', 'Jane Smith', 'Alice Johnson']
    },
    {
    id: 2,
    
    name: 'Project Beta',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    status: 'Completed',
    deadline: new Date('2024-05-15'),
    teamMembers: ['Bob Brown', 'Mary Davis']
    },
    // Add more mock projects as needed
];
    