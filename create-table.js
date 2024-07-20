import { sql } from './sql.js';

// sql`DROP TABLE IF EXISTS videos;`.then(() => {
//     console.log('tabela removida com sucesso!')
// })

// async function createTable() {
//     try {
//         await sql`
//             CREATE TABLE IF NOT EXISTS videos (
//                 id TEXT PRIMARY KEY,
//                 title VARCHAR(255) NOT NULL,
//                 description TEXT,
//                 duration INTEGER
//             );
//         `;
//         console.log('Tabela "videos" criada com sucesso.');
//     } catch (error) {
//         console.error('Erro ao criar a tabela:', error);
//     } finally {
//         // Encerra a conexão após a execução
//         await sql.end();
//     }
// }

// createTable();
async function testConnection() {
    try {
        const result = await sql`SELECT NOW()`;
        console.log('Conexão bem-sucedida:', result);
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
}

testConnection();
