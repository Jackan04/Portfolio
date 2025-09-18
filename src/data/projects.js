import TaskManagerImage from '../assets/images/task-manager.jpeg'
import DesignCaseImage from '../assets/images/design-case.png'
import UtilityAppImage from '../assets/images/utility-app.jpeg'

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
        description: "A simple, modern task management app built using vanilla JavaScript, HTML, and CSS. All data is stored locally in your browser using localStorage, ensuring privacy and persistence across sessions."
    },
    {
        category: "Coding",
        src: UtilityAppImage,
        href: "https://github.com/Jackan04/Utility-app",
        title: "Utility App",
        description: "A growing collection of handy tools, starting with a QR code generator and Pomodoro timer—all in one place."
    }
];

export default projects;

