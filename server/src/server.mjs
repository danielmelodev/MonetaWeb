import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express()

app.use(express.json())

const prisma = new PrismaClient()

app.get('/clientes', async (request, response) => {
    const clientes = await prisma.cliente.findMany()
    
    return response.json(clientes);
})

app.post('/clientes', (request, response) => {
    const body = request.body;
    
    return response.status(201).json([]);
})


app.listen(3333)

