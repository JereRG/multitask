import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    const { id } = params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const task = await prisma.task.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR DELETING TASK: ", error);
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}

/*
Este archivo maneja las solicitudes DELETE para eliminar tareas de la base de datos.
Primero verifica si el usuario está autenticado utilizando el middleware de Clerk.
Luego, utiliza Prisma para eliminar la tarea correspondiente de la base de datos.
Si la eliminación es exitosa, devuelve la tarea eliminada como respuesta.
En caso de cualquier error durante el proceso, registra el error y devuelve un mensaje de error con un estado HTTP 500.
*/
