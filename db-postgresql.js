import { sql } from './sql.js'
import { randomUUID } from 'node:crypto'

export class DatabasePostgres {
    async list(search) {
        let videos

        if (search) {
            return videos = await sql`SELECT * FROM videos WHERE title ILIKE ${`%` + search + `%`}`;
        } else {
            return videos = await sql`select * from videos`
        }
    }

    async create(video) {
        const videoId = randomUUID()
        const { title, description, duration } = video
        await sql`insert into videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration})`

    }

    async update(id, video) {
        const { title, description, duration } = video
        await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} WHERE  id = ${id}`
    }

    async delete(id) {
        await sql`delete from videos where id = ${id}`
    }
}