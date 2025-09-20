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
        title: "Task Manager",
        description: "A simple, modern project and task management app built using vanilla JavaScript, HTML, and CSS."
    },
    {
        category: "Coding",
        src: ToDoAppImage,
        href: "https://github.com/Jackan04/Task-app",
        title: "Simple Todo List",
        description: "A simple, modern task management web app built with vanilla JavaScript, HTML, and CSS."
    }
];

export default projects;

