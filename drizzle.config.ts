import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: './src/drizzle/migrations',
    schema: './src/drizzle/schema.ts'
    driver: 'pg'
    dbCredentials: {
        url: process.env.DATABASE_URL as string,
    },
    dialect: 'postgresql'

})