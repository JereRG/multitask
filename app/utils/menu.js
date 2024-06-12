import { list, check, todo, home } from "./icons";

const menu = [
    {
        id: 1,
        title: "Todas las Tareas",
        icon: home,
        link: "/",
    },
    {
        id: 2,
        title: "Importantes",
        icon: list,
        link: "/important",
    },
    {
        id: 3,
        title: "Completadas",
        icon: check,
        link: "/completed",
    },
    {
        id: 4,
        title: "Hacer Ahora",
        icon: todo,
        link: "/incomplete",
    },
];

export default menu;