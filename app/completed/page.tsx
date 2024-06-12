"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Tasks from "../components/tasks/Tasks";

function page() {
    const { completedTasks } = useGlobalState();

    return <Tasks title="Tareas Completadas" tasks={completedTasks} />;
}

export default page;

/*
Este archivo define una página React que muestra las tareas completadas.
- Importa el hook `useGlobalState` del proveedor de contexto global.
- Renderiza el componente `Tasks` con el título "Tareas Completadas" y las tareas completadas obtenidas del estado global.

La página utiliza el hook `useGlobalState` para acceder al estado global y mostrar las tareas completadas.
*/
