import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()
    // set, map -> ds

    list(search) {
        //transforma em um array iteravel
        return Array.from(this.#videos.entries())
            .map((videolist) => {
                const id = videolist[0]
                const data = videolist[1]

                return {
                    id,
                    ...data,
                }
            })
            .filter(video => {
                if (search) {
                    return video.title.includes(search)
                }
                return true
            })
    }

    create(video) {
        const videoId = randomUUID() //-> Unique universal id
        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}