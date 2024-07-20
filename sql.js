import postgres from "postgres";
import 'dotenv/config'

// Use variáveis de ambiente para armazenar informações sensíveis
const connectionUrl = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

// Configure a conexão com o banco de dados
export const sql = postgres(connectionUrl);
