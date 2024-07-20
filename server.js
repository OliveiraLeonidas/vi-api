import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './db-postgresql.js'

const server = fastify()

//CRUD -> CREAT, READM UPDATE, DELETE

// POST -> Busca e listagem de informações http://localhost:3333/videos
// PUT  -> Criar um registro http://localhost:3333/videos/3
// Route Parameter
//const db = new DatabaseMemory()

const db = new DatabasePostgres()

// Request body -> envio de dados. Ex: Informações de um formulário

server.post('/videos', async (request, reply) => {
    const { title, description, duration } = request.body
    await db.create({
        title: title,
        description: description,
        duration: duration,
    })
    return reply.status(201).send()
})

server.get('/videos', async (request, reply) => {
    const search = request.query.search

    console.log(search)

    const videos = await db.list(search)

    return videos
})

server.put('/videos/:id', async (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body
    await db.update(videoId, {
        title,
        description,
        duration
    })

    return reply.status(204).send()
})


server.delete('/videos/:id', async (request, reply) => {
    const videoId = request.params.id

    await db.delete(videoId)
    return reply.status(204).send()
})

server.listen({
    port: process.env.PORT || 3333,
    host: '0.0.0.0'
})

