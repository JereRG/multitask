"use client";
import Tasks from "./components/tasks/Tasks";
import { useGlobalState } from "./context/globalProvider";

export default function Home() {
  const { tasks } = useGlobalState();

  return <Tasks title="Todas las tareas" tasks={tasks} />;
}