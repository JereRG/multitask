import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId } = auth();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized", status: 401 });
        }

        const { title, description, date, completed, important } = await req.json();

        if (!title || !description || !date) {
            return NextResponse.json({
                error: "Faltan campos obligatorios",
                status: 400,
            });
        }

        if (title.length < 3) {
            return NextResponse.json({
                error: "El titulo debe tener al menos 3 caracteres",
                status: 400,
            });
        }

        const task = await prisma.task.create({
            data: {
                title,
                description,
                date,
                isCompleted: completed,
                isImportant: important,
                userId,
            },
        });

        return NextResponse.json(task);
    } catch (error) {
        console.log("ERROR CREATING TASK: ", error);
        return NextResponse.json({ error: "Error creating task", status: 500 });
    } 
}

export async function GET(req: Request) {
    try {
        const { userId } = auth();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized", status: 401 });
        }

        const tasks = await prisma.task.findMany({
            where: {
                userId,
            },
        });

        return NextResponse.json(tasks);
    } catch (error) {
        console.log("ERROR GETTING TASKS: ", error);
        return NextResponse.json({ error: "Error updating task", status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const { userId } = auth();
        const { isCompleted, id } = await req.json();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized", status: 401 });
        }

        const task = await prisma.task.findUnique({
            where: {
                id,
            },
        });

        if (!task || task.userId !== userId) {
            return NextResponse.json({ error: "Tarea no encontrada", status: 404 });
        }

        const updatedTask = await prisma.task.update({
            where: {
                id,
            },
            data: {
                isCompleted,
            },
        });

        return NextResponse.json(updatedTask);
    } catch (error) {
        console.log("ERROR UPDATING TASK: ", error);
        return NextResponse.json({ error: "Error updating task", status: 500 });
    }
}

/*
Este archivo contiene funciones para manejar las solicitudes POST, GET y PUT relacionadas con las tareas.
- La función POST crea una nueva tarea en la base de datos.
- La función GET devuelve todas las tareas asociadas con el usuario autenticado.
- La función PUT actualiza el estado de una tarea específica.

Cada función verifica si el usuario está autenticado antes de realizar operaciones en la base de datos.
En caso de algún error durante el proceso, se registra y se devuelve una respuesta con el estado correspondiente.
*/