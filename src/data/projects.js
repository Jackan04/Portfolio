import TaskManagerImage from '../assets/images/task-manager.jpeg'
import DesignCaseImage from '../assets/images/design-case.png'
import ToDoAppImage from '../assets/images/todo-app.jpeg'

const projects = [
    {
        category: "Design",
        src: DesignCaseImage,
        href: "https://www.linkedin.com/pulse/designcase-förbättring-av-självbetjäningskassa-jacob-asker-hva4e/?trackingId=T%2BxvKZHHRFeXrygYROiDBg%3D%3D",
        title: "Redesign of Self-Checkout",
        description: "Suggested improvements for a self-service checkout screen based on observed usability issues, aiming to make it more intuitive and reduce errors for first-time users."
    },
    {
        category: "Coding",
        src: TaskManagerImage,
        href: "https://github.com/Jackan04/Task-Manager",
        title: "Simple Project Manager",
        description: "A project management app that helps you organize multiple projects, create task lists, and track tasks. Includes task notes, due dates and saves your data locally in the browser."
    },
    {
        category: "Coding",
        src: ToDoAppImage,
        href: "https://github.com/Jackan04/Task-app",
        title: "Simple Todo List",
        description: "A minimal, delightful todo app with due dates, completion tracking, and task statistics. Features local storage persistence in the browser."
    }
];

export default projects;

