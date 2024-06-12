import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
  // @ts-ignore
    if (!global.prisma) {
        // @ts-ignore
        global.prisma = new PrismaClient();
    }
  // @ts-ignore
    prisma = global.prisma;
}

export default prisma;

// Se crea una instancia del cliente Prisma para interactuar con la base de datos.
// En producción, se crea una nueva instancia en cada solicitud para garantizar la conexión segura.
// En desarrollo, se reutiliza la misma instancia para evitar fugas de memoria.