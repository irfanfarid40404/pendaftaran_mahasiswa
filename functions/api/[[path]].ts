type D1Database = any

export interface Env {
    DB: D1Database
}

interface Mahasiswa {
    nim: string
    nama: string
    jurusan: string
    semester: number
    email: string
}

export default {
    async fetch(request: Request, env: Env) {
        const { pathname } = new URL(request.url)
        const method = request.method

        // GET /api/mahasiswa - Get all mahasiswa
        if (pathname === '/api/mahasiswa' && method === 'GET') {
            const { results } = await env.DB.prepare('SELECT * FROM mahasiswa').all()
            return Response.json(results)
        }

        // POST /api/mahasiswa - Create new mahasiswa
        if (pathname === '/api/mahasiswa' && method === 'POST') {
            const data = (await request.json()) as Mahasiswa

            try {
                await env.DB.prepare(
                    'INSERT INTO mahasiswa (nim, nama, jurusan, semester, email) VALUES (?, ?, ?, ?, ?)',
                )
                    .bind(data.nim, data.nama, data.jurusan, data.semester, data.email)
                    .run()

                return Response.json({ success: true }, { status: 201 })
            } catch (e) {
                return Response.json({ error: e.message }, { status: 400 })
            }
        }

        return new Response('Not found', { status: 404 })
    },
}
