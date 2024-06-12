"use client";
import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Tasks from "../components/tasks/Tasks";

function page() {
    const { importantTasks } = useGlobalState();
    return <Tasks title="Tareas Importantes" tasks={importantTasks} />;
}

export default page;